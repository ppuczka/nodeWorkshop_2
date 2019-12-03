const express = require('express');

const router = express.Router();

const userList = [];

router.use('/add-product',(req, res, next) => {
    console.log("Welcome to add product page");
    res.send('<body><form action="/admin/product" method="POST"><input type="text" name="product"><button type="submit">Send</button></form></body>');
})

router.post("/product", (req, res) => {
    console.log(req.body);
    userList.push(req.body);
    res.redirect("/");
})

router.get("/product", (req, res) => {
    userList.forEach(u => console.log(u))
    res.send('<h1>Product Page</h1>');
})

module.exports = router;