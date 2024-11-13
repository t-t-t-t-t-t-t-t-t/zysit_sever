const SolutionCategoryModel = require('../../models/SolutionCategoryModel')
const SolutionCategoryService = () => {

    const getSolutionCategory = async ({ _id }) => {
        return _id ? SolutionCategoryModel.find({ _id }) : SolutionCategoryModel.find()
    }
    return {
        getSolutionCategory,
    }
}
module.exports = SolutionCategoryService