const CasesModel = require('../../models/CasesModel')
const CasesService = () => {

    const getCases = async ({ _id }) => {
        return _id ? CasesModel.find({ _id }) : CasesModel.find()
    }
    const addCases = async ({ title, content, category, detail, image }) => {
        return CasesModel.create({ title, content, category, detail, image })
    }
    const deleteCases = async ({ _id }) => {
        return CasesModel.deleteOne({ _id })
    }
    const putCases = async ({ _id, title, content, category, detail, image }) => {
        return CasesModel.updateOne({ _id }, { title, content, category, detail, image })
    }
    return {
        getCases,
        addCases,
        deleteCases,
        putCases
    }
}
module.exports = CasesService