const mongoose = require('mongoose')
const globalData = require('../globalData')
mongoose.connect(globalData.dbUrl)