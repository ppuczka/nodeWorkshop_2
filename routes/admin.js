const express = require('express');

const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();


const productList = [];

router.use('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post("/product", (req, res) => {
    console.log(req.body);
    productList.push(req.body);
    res.redirect("/");
})

router.get("/product", (req, res) => {
    productList.forEach(u => console.log(u))
    res.send('<h1>Product Page</h1>');
})

module.exports = router;