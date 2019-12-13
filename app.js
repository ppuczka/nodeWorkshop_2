const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

//Controllers imports 
const errorController = require('./controllers/error')


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes );
app.use('/admin', shopRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(8080, '0.0.0.0');
