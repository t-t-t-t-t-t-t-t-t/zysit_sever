const ProductCategoryService = require('../../service/web/ProductCategoryService')
const ProductCategoryController = () => {
    const getProductCategory = async (req, res) => {
        const result = await ProductCategoryService().getProductCategory(req.params)
        res.send({
            msg: "获得产品类别成功",
            code: 0,
            data: result
        })
    }
    return {
        getProductCategory,
    }
}
module.exports = ProductCategoryController