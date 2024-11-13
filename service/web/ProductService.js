const ProductModel = require('../../models/ProductModel')
const SolutionModel = require('../../models/SolutionModel')
const ProductService = () => {
    const getProduct = async ({ _id }) => {
        return _id ? ProductModel.find({ _id }) : ProductModel.find()
    }
    const getProductByCategory = ({ category }) => {
        return ProductModel.find({ category })
    }
    const getSolutionTitle = async () => {
        return SolutionModel.find({}, ['_id', 'title'])
    }
    return {
        getProduct,
        getSolutionTitle,
        getProductByCategory
    }
}
module.exports = ProductService