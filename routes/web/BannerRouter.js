const express = require('express');
const BannerController = require('../../controller/web/BannerController')
const BannerRouter = express.Router();

// 登录
BannerRouter.get("/bannerList", BannerController().getBannerList)
BannerRouter.get("/bannerList/:type", BannerController().getBannerList)
module.exports = BannerRouter;
