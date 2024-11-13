const CasesCategoryModel = require('../../models/CasesCategoryModel')
const CasesCategoryService = () => {

    const getCasesCategory = async ({ _id }) => {
        return _id ? CasesCategoryModel.find({ _id }) : CasesCategoryModel.find()
    }
    return {
        getCasesCategory,
    }
}
module.exports = CasesCategoryService