const passport = require("passport"); // original passport module in npm
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

/* define a function when serializeUser
    it's to generate the cookies
 */
passport.serializeUser((user, done) => {
  done(null, user.id); // null means no error here we should handle
});

/* define a function when deserializeUser
    it's to get the user based on cookies
*/
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

/*  tell passport a new specific strategy */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      const user = User.findOne({ googleID: profile.id }).then(
        (existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({ googleID: profile.id })
              .save()
              .then((user) => done(null, user));
            //call "done" ==> Tell passport that we have finished creating a user and that it should now resume the auth process
          }
        }
      );

      // console.log(accessToken); // allow us to reach back google
      // console.log(refreshToken);
      // console.log(profile);
    }
  )
);
