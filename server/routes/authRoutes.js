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

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    // res.send(req.session); // req.session is the passport looking for
    res.send(req.user);
  });
};
