const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductType = {
    title: String,
    category: String,
    image: String,
    content: String,
    isXin: Boolean,
    isHot: Boolean,
    parameters: Array,
    scene: Array,
}
const ProductMoudel = mongoose.model("product", new Schema(ProductType))
module.exports = ProductMoudel