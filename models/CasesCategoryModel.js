const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CasesCategoryType = {
    title: String,
}
const CasesCategoryMoudel = mongoose.model("casesCategory", new Schema(CasesCategoryType))
module.exports = CasesCategoryMoudel