const path = require('path');
const rootDir = require('../utils/path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();



router.get('/',(req, res, next) => {
    console.log('shop js: ', adminData.productList);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router;