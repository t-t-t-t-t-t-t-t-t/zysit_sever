const mongoose = require('mongoose')
const Schema = mongoose.Schema
const HonerType = {
    title: String,
    image: String,
}
const HonerMoudel = mongoose.model("honer", new Schema(HonerType))
module.exports = HonerMoudel