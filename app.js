var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const UserRoute = require('./routes/admin/UserRouter')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));// 相对路径设置
app.set('view engine', 'jade');

app.use(logger('dev'));// 开发调试的日志上色
app.use(express.json());// json
app.use(express.urlencoded({ extended: false }));// urlendoded
app.use(cookieParser());//
app.use(express.static(path.join(__dirname, 'public')));// 静态资源设置

// 引入路由
app.use(UserRoute)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// 路径访问错误时的
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
