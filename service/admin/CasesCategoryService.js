const CasesCategoryModel = require('../../models/CasesCategoryModel')
const CasesCategoryService = () => {

    const getCasesCategory = async ({ _id }) => {
        return _id ? CasesCategoryModel.find({ _id }) : CasesCategoryModel.find()
    }
    const addCasesCategory = async ({ title }) => {
        return CasesCategoryModel.create({ title })
    }
    const deleteCasesCategory = async ({ _id }) => {
        return CasesCategoryModel.deleteOne({ _id })
    }
    const putCasesCategory = async ({ _id, title }) => {
        return CasesCategoryModel.updateOne({ _id }, { title })
    }
    return {
        getCasesCategory,
        addCasesCategory,
        deleteCasesCategory,
        putCasesCategory
    }
}
module.exports = CasesCategoryService