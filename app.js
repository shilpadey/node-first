const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const errorControllers = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');
const contactRoutes = require('./routes/contacts');
const successRoutes = require('./routes/success');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use(loginRoutes);
app.use(messageRoutes);
app.use(contactRoutes);
app.use(successRoutes);


app.use(errorControllers.get404);

app.listen(3000);