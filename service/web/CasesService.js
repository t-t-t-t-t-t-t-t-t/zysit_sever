const CasesModel = require('../../models/CasesModel')
const CasesService = () => {

    const getCases = async ({ _id }) => {
        return _id ? CasesModel.find({ _id }) : CasesModel.find()
    }
    const getCasesByCategory = ({ category }) => {
        return CasesModel.find({ category })
    }
    return {
        getCases,
        getCasesByCategory
    }
}
module.exports = CasesService