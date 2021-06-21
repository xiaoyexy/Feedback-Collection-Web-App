const express = require('express'); // CommonJS Module
// import express from 'express'; // ES6 Module
const app = express();

app.get('/', (request, result) => {
    result.send({ "bye": 'buddy' });

});

const PORT = process.env.PORT || 5000 // Heroku App port or local machine port
app.listen(PORT);