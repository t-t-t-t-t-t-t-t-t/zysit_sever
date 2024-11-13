// 用户相关的
const express = require('express');
const HonerController = require('../../controller/web/HonerController')
const HonerRouter = express.Router();


// 登录
HonerRouter.get('/honerList/:_id', HonerController().getHoner)
HonerRouter.get('/honerList/', HonerController().getHoner)
module.exports = HonerRouter;
