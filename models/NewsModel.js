const mongoose = require('mongoose')
const Schema = mongoose.Schema
const NewsType = {
    title: String,
    image: String,
    url: String
}
const NewsMoudel = mongoose.model("news", new Schema(NewsType))
module.exports = NewsMoudel