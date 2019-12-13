const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes );
app.use('/admin', shopRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {title: 'Page not found'});
});

app.listen(8080, '0.0.0.0');
