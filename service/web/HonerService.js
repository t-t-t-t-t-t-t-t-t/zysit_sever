const HonerModel = require('../../models/HonerModel')
const HonerService = () => {
    const getHoner = async ({ _id }) => {
        return _id ? HonerModel.find({ _id }) : HonerModel.find()
    }
    return {
        getHoner,
    }
}
module.exports = HonerService