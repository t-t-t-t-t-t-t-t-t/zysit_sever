const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FriendType = {
    title: String,
    image: String,
}
const FriendMoudel = mongoose.model("friend", new Schema(FriendType))
module.exports = FriendMoudel