// 用户相关的
const express = require('express');
const BannerController = require('../../controller/admin/BannerController')
const BannerRouter = express.Router();


// 登录
BannerRouter.get("/bannerList", BannerController().getBannerList)
BannerRouter.get("/bannerList/:id", BannerController().getBannerList)
BannerRouter.put("/bannerList", BannerController().putBannerList)
BannerRouter.post("/init", BannerController().initBanner)
module.exports = BannerRouter;
