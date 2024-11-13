const SolutionModel = require('../../models/SolutionModel')
const ProductModel = require('../../models/ProductModel')
const CasesModel = require('../../models/CasesModel')
const SolutionService = () => {
    const getSolution = async ({ _id }) => {
        return _id ? SolutionModel.find({ _id }) : SolutionModel.find()
    }
    const addSolution = async ({ title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category }) => {
        return SolutionModel.create({ title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category })
    }
    const deleteSolution = async ({ _id }) => {
        return SolutionModel.deleteOne({ _id })
    }
    const putSolution = async ({ _id, title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category }) => {
        return SolutionModel.updateOne({ _id }, { title, bannerImage, content, contentImage, demandAnalysis, heighLight, mainProduct, mainCaseImage, mainCase, category })
    }
    const getProductTitle = async () => {
        return ProductModel.find({}, ['title', "_id"])
    }
    const getCasesTitle = async () => {
        return CasesModel.find({}, ['title', "_id"])
    }
    return {
        getSolution,
        addSolution,
        deleteSolution,
        putSolution,
        getProductTitle,
        getCasesTitle
    }
}
module.exports = SolutionService