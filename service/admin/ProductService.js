const ProductModel = require('../../models/ProductModel')
const SolutionModel = require('../../models/SolutionModel')
const ProductService = () => {
    const getProduct = async ({ _id }) => {
        return _id ? ProductModel.find({ _id }) : ProductModel.find()
    }
    const addProduct = async ({ title, image, content, isXin, isHot, parameters, scene, category }) => {
        return ProductModel.create({ title, image, content, isXin, isHot, parameters, scene, category })
    }
    const deleteProduct = async ({ _id }) => {
        return ProductModel.deleteOne({ _id })
    }
    const putProduct = async ({ _id, title, image, content, isXin, isHot, parameters, scene, category }) => {
        return ProductModel.updateOne({ _id }, { title, image, content, isXin, isHot, parameters, scene, category })
    }
    const getSolutionTitle = async () => {
        return SolutionModel.find({}, ['_id', 'title'])
    }
    return {
        getProduct,
        addProduct,
        deleteProduct,
        putProduct,
        getSolutionTitle
    }
}
module.exports = ProductService