const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SolutionCategoryType = {
    title: String,
}
const SolutionCategoryMoudel = mongoose.model("solutionCategory", new Schema(SolutionCategoryType))
module.exports = SolutionCategoryMoudel