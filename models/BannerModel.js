const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BannerType = {
    title: String,
    content: String,
    type: String,
    image: String,//0:管理员,1:编辑者
}
const BannerModel = mongoose.model("banner", new Schema(BannerType))
module.exports = BannerModel