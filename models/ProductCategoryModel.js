const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductCategoryType = {
    title: String,
}
const ProductCategoryMoudel = mongoose.model("productCategory", new Schema(ProductCategoryType))
module.exports = ProductCategoryMoudel