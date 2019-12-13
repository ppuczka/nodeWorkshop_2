
const productList = [];

exports.getAddProduct = (req, res, next) => {
    productList.forEach(u => console.log(u))
    res.send('<h1>Product Page</h1>'
    )};

exports.postAddProduct = (req, res, next) => {
    productList.push({title: req.body.title});
    res.redirect("/");
    };

exports.getAllProducts = (req, res, next) => {
    res.render('shop', {prods: productList,
    title: 'Shop', path: '/',
    hasProducts: productList.length > 0});
    };
    
