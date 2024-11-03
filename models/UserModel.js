const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userType = {
    userName: String,
    password: String,
    role: Number //0:管理员,1:编辑者
}
const UserMoudel = mongoose.model("user", new Schema(userType))
module.exports = UserMoudel