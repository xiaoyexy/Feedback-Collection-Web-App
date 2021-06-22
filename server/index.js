const express = require("express"); // CommonJS Module
// import express from 'express'; // ES6 Module
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

/*  tell passport a new specific strategy */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken); // allow us to reach back google
      console.log(refreshToken);
      console.log(profile);
    } // error handler
  )
);

/*  name the new specific strategy as "google"
    everytime access /auth/google, will use "google" strategy 
*/
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000; // Heroku App port or local machine port
app.listen(PORT);
