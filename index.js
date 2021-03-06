const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// IMPORT ROUTERS
const categoryRouter = require('./routes/category');
const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');
const publisherRouter = require('./routes/publisher');
const authorRouter = require('./routes/author');
const orderRouter = require('./routes/order');

const sequelize = require('./configs/sequelize');

// IMPORT MODELS
const Category = require('./models/category');
const Book = require('./models/book');
const User = require('./models/User');
const Publisher = require('./models/publisher');
const Author = require('./models/author');
const Order = require('./models/order');

// TABLE ASSOCIANTIONS
Book.belongsTo(Category)
Book.belongsTo(Author)
Book.belongsTo(Publisher)
Book.belongsTo(User)
Order.belongsTo(Book)
Order.belongsTo(User)

// REGISTER IMPORTED ROUTERS
app.use('/category', categoryRouter);
app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/publisher', publisherRouter);
app.use('/author', authorRouter);
app.use('/order', orderRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})