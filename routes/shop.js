const path = require('path');
const rootDir = require('../utils/path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();

//Controllers imports 
const productsController = require('../controllers/products');

router.get('/', productsController.getAllProducts);

module.exports = router;