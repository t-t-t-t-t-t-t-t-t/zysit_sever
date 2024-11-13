const SolutionCategoryModel = require('../../models/SolutionCategoryModel')
const SolutionCategoryService = () => {

    const getSolutionCategory = async ({ _id }) => {
        return _id ? SolutionCategoryModel.find({ _id }) : SolutionCategoryModel.find()
    }
    const addSolutionCategory = async ({ title }) => {
        return SolutionCategoryModel.create({ title })
    }
    const deleteSolutionCategory = async ({ _id }) => {
        return SolutionCategoryModel.deleteOne({ _id })
    }
    const putSolutionCategory = async ({ _id, title }) => {
        return SolutionCategoryModel.updateOne({ _id }, { title })
    }
    return {
        getSolutionCategory,
        addSolutionCategory,
        deleteSolutionCategory,
        putSolutionCategory
    }
}
module.exports = SolutionCategoryService