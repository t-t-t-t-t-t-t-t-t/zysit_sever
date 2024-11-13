const SolutionModel = require('../../models/SolutionModel')
const ProductModel = require('../../models/ProductModel')
const CasesModel = require('../../models/CasesModel')
const SolutionService = () => {
    const getSolution = async ({ _id }) => {
        return _id ? SolutionModel.find({ _id }) : SolutionModel.find()
    }
    const getProductTitle = async () => {
        return ProductModel.find({}, ['title', "_id"])
    }
    const getCasesTitle = async () => {
        return CasesModel.find({}, ['title', "_id"])
    }
    const getSolutionByCategory = ({ category }) => {
        return SolutionModel.find({ category })
    }
    return {
        getSolution,
        getProductTitle,
        getCasesTitle,
        getSolutionByCategory
    }
}
module.exports = SolutionService