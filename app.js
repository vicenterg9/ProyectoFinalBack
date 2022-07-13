var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

//var indexRouter = require('./routes/index');
var peliculasRouter = require('./routes/peliculas');

var app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/peliculas', peliculasRouter);

app.get('/', function(req, res) {
    res.send('http://locahost:4200');
  });


module.exports = app;
