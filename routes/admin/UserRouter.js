// 用户相关的
const express = require('express');
const UserController = require('../../controller/admin/UserController')
const UserRouter = express.Router();


// 登录
UserRouter.post("/login", UserController().login)
UserRouter.post("/addUser", UserController().addUser)
UserRouter.get('/userList/', UserController().getUserList)
UserRouter.get('/userList/:_id', UserController().getUserList)
UserRouter.delete('/userList/:_id', UserController().deleteUser)// 路由参数
UserRouter.put('/userList/', UserController().putUser)// 路由参数
UserRouter.post('/init/', UserController().setAdminUser)
module.exports = UserRouter;
