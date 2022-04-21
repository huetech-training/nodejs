const express = require('express');
const router = require('./routes/index');
const bodyParser= require('body-parser');


const app = express();
console.log(__dirname+'/public');
app.use("/public",express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(router);

module.exports = app;
