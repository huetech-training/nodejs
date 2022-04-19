const express = require('express');
const router = require('./routes/index');

const app = express();
app.set('view engine', 'ejs');
app.use(router);

module.exports = app;
