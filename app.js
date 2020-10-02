var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testApi = require('./routes/testapi');
const { check, validationResult } = require('express-validator');
// var userdetail = require('./routes/usedetail');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static('public'));
// app.use('/static', express.static('public'));
// app.use('/static',express.static(path.join(__dirname, 'public')));
var express = require('express');
var router = express.Router();
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testApi);
// app.use('/test', testApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err);
  // console.log(res);
  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Errors', msg: err.message, location:err.status || 500, param: res.locals.error });
});


app.listen(4000,()=>console.log("Server running on port : 4000"));
module.exports = app;

