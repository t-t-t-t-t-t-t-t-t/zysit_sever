const ProductCategoryModel = require('../../models/ProductCategoryModel')
const ProductCategoryService = () => {
    const getProductCategory = async ({ _id }) => {
        return _id ? ProductCategoryModel.find({ _id }) : ProductCategoryModel.find()
    }
    return {
        getProductCategory,
    }
}
module.exports = ProductCategoryService