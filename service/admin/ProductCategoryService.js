const ProductCategoryModel = require('../../models/ProductCategoryModel')
const ProductCategoryService = () => {

    const getProductCategory = async ({ _id }) => {
        return _id ? ProductCategoryModel.find({ _id }) : ProductCategoryModel.find()
    }
    const addProductCategory = async ({ title }) => {
        return ProductCategoryModel.create({ title })
    }
    const deleteProductCategory = async ({ _id }) => {
        return ProductCategoryModel.deleteOne({ _id })
    }
    const putProductCategory = async ({ _id, title }) => {
        return ProductCategoryModel.updateOne({ _id }, { title })
    }
    return {
        getProductCategory,
        addProductCategory,
        deleteProductCategory,
        putProductCategory
    }
}
module.exports = ProductCategoryService