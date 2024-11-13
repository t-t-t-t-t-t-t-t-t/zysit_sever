var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const adminRouter = require('./routes/adminRouter')
const webRouter = require('./routes/webRouter')


const JWT = require('./utils/JWT');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));// 相对路径设置
app.set('view engine', 'jade');

app.use(logger('dev'));// 开发调试的日志上色
app.use(express.json());// json
app.use(express.urlencoded({ extended: false }));// urlendoded
app.use(cookieParser());//
app.use(express.static(path.join(__dirname, 'public')));// 静态资源设置


app.use((req, res, next) => {// token校验中间件
  if (req.url === '/adminApi/user/login' || req.url == '/adminApi/user/setAdminUser' || req.url.includes('/webApi')) {//login放行
    next()
    return;
  }
  const token = req.headers["authorization"]
  if (token) {
    const payload = JWT.verify(token)
    if (payload) {  // 如果token有效,next通过
      const newToken = JWT.generate({ _id: payload._id, userName: payload.userName }, '1d')// 访问过一次重新生成token
      res.header("authorization", newToken)
      next();
      return;
    } else {  //如果token失效,返回401
      return res.status(401).send({
        msg: "无效token",
      })
    }
  } else {
    return res.status(401).send({
      msg: "无token",
    })
  }
})
// 引入路由
app.use("/adminApi", adminRouter)
app.use("/webApi", webRouter)



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
  res.send({
    msg: "路径访问错误"
  })
});

module.exports = app;
