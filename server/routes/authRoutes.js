const passport = require("passport"); // original passport module

module.exports = (app) => {
  //  name the new specific strategy as "google"
  //  everytime access /auth/google, will use "google" strategy
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
