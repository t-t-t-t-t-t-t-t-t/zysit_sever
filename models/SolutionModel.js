const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SolutionType = {
    title: String,
    category: Object,
    bannerImage: String,
    content: String,
    contentImage: String,
    demandAnalysis: Array,
    heighLight: Array,
    mainProduct: Array,
    mainCaseImage: String,
    mainCase: Array
}
const SolutionMoudel = mongoose.model("solution", new Schema(SolutionType))
module.exports = SolutionMoudel