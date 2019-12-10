const path = require('path');
const rootDir = require('../utils/path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next) => {
    const products = adminData.productList;
    products.forEach(c => console.log('lista', c));
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;