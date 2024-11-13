const express = require('express');
const FriendController = require('../../controller/web/FriendController')
const FriendRouter = express.Router();


FriendRouter.get('/friendList/:_id', FriendController().getFriend)
FriendRouter.get('/friendList/', FriendController().getFriend)
module.exports = FriendRouter;
