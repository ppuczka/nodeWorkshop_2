const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log("Welcome to mainPage");
    res.send("</h1>Welcome to mainPage</h1>");
})

module.exports = router;