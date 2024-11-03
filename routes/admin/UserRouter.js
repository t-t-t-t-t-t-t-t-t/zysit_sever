// 用户相关的
const express = require('express');
const UserController = require('../../controller/admin/UserController')
const UserRouter = express.Router();
UserRouter.use()

// 登录
UserRouter.post("/adminApi/user/login", UserController().login)

module.exports = router;
