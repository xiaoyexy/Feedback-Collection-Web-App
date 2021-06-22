const express = require("express"); // CommonJS Module
// import express from 'express'; // ES6 Module
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; // Heroku App port or local machine port
app.listen(PORT);
