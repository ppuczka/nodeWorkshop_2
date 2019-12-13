const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router();

//Controllers imports 
const poroductController = require('../controllers/products'); 


router.get('/add-product',(req, res, next) => {
    res.render('add-product', {title: "Add Product", path: "/admin/add-product"});
})

router.post("/add-product", poroductController.postAddProduct);

module.exports = router;