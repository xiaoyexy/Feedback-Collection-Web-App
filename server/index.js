const express = require("express"); // CommonJS Module // import express from 'express'; // ES6 Modules
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport"); // orginal passport module in npms
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

/* connect mongoose */
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

/* init app */
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100, // 30days
    keys: [keys.cookieKey], // sign or encrypt our cookies
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

/* define routes */
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //express will serve up production assets (main.js or main.css)
  app.use(express.static("client/build"));

  //express will serve up the index.html file if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; // Heroku App port or local machine port
app.listen(PORT);
