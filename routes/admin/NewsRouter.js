// 用户相关的
const express = require('express');
const NewsController = require('../../controller/admin/NewsController')
const NewsRouter = express.Router();


// 登录
NewsRouter.post("/newsList", NewsController().addNews)
NewsRouter.get('/newsList/:_id', NewsController().getNews)
NewsRouter.get('/newsList/', NewsController().getNews)
NewsRouter.delete('/newsList/:_id', NewsController().deleteNews)
NewsRouter.put('/newsList/', NewsController().putNews)
module.exports = NewsRouter;
