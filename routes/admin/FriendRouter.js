// 用户相关的
const express = require('express');
const FriendController = require('../../controller/admin/FriendController')
const FriendRouter = express.Router();


// 登录
FriendRouter.post("/friendList", FriendController().addFriend)
FriendRouter.get('/friendList/:_id', FriendController().getFriend)
FriendRouter.get('/friendList/', FriendController().getFriend)
FriendRouter.delete('/friendList/:_id', FriendController().deleteFriend)
FriendRouter.put('/friendList/', FriendController().putFriend)
module.exports = FriendRouter;
