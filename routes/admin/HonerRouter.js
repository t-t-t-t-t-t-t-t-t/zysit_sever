// 用户相关的
const express = require('express');
const HonerController = require('../../controller/admin/HonerController')
const HonerRouter = express.Router();


// 登录
HonerRouter.post("/honerList", HonerController().addHoner)
HonerRouter.get('/honerList/:_id', HonerController().getHoner)
HonerRouter.get('/honerList/', HonerController().getHoner)
HonerRouter.delete('/honerList/:_id', HonerController().deleteHoner)
HonerRouter.put('/honerList/', HonerController().putHoner)
module.exports = HonerRouter;
