const HonerModel = require('../../models/HonerModel')
const HonerService = () => {
    const getHoner = async ({ _id }) => {
        return _id ? HonerModel.find({ _id }) : HonerModel.find()
    }
    const addHoner = async ({ title, image }) => {
        return HonerModel.create({ title, image })
    }
    const deleteHoner = async ({ _id }) => {
        return HonerModel.deleteOne({ _id })
    }
    const putHoner = async ({ _id, title, image }) => {
        return HonerModel.updateOne({ _id }, { title, image })
    }
    return {
        getHoner,
        addHoner,
        deleteHoner,
        putHoner
    }
}
module.exports = HonerService