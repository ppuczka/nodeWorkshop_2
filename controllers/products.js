 const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.send('<h1>Product Page</h1>'
    )};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
    };

exports.getAllProducts = (req, res, next) => {
    Product.fetchAll(productList => { 
    res.render('shop', {prods: productList,
    title: 'Shop', path: '/',
    hasProducts: productList.length > 0});
    });
};
    
