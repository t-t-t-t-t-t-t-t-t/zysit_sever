const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CasesType = {
    title: String,
    detail: String,
    image: String,
    content: String,
    category: String
}
const CasesMoudel = mongoose.model("cases", new Schema(CasesType))
module.exports = CasesMoudel