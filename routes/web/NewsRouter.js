// 用户相关的
const express = require('express');
const NewsController = require('../../controller/web/NewsController')
const NewsRouter = express.Router();


// 登录
NewsRouter.get('/newsList/:_id', NewsController().getNews)
NewsRouter.get('/newsList/', NewsController().getNews)
module.exports = NewsRouter;
