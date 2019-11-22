const http = require('http');
const express = require('express');

const app = express();

app.use('/add-user',(req, res, next) => {
    console.log("Welcome to addUserPage");
    res.send("</h1>Welcome to addUserPage</h1>");
})

app.use('/',(req, res, next) => {
    console.log("Welcome to mainPage");
    res.send("</h1>Welcome to mainPage</h1>");
})

app.listen(3000);