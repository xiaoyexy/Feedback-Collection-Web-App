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

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.session);
    res.send(req.user);
  });
};
