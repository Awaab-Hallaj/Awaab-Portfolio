var createError = require('http-errors');
var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var indexRouter = require('./controllers/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.locals.github = 'https://github.com/Awaab-Hallaj';
  res.locals.linkedin = 'https://www.linkedin.com/in/awaab-hallaj-a09148323/';
  res.locals.page = '';
  next();
});

app.use('/', indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

