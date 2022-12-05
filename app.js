const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUSRoutes = require('./routes/contact-us');
const successRoutes = require('./routes/successR');

app.use(bodyParser.urlencoded({extended: false}));

//filter

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(contactUSRoutes);

app.use(successRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);