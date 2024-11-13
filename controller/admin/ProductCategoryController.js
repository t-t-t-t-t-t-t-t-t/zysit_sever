const ProductCategoryService = require('../../service/admin/ProductCategoryService')
const ProductCategoryController = () => {
    const getProductCategory = async (req, res) => {
        const result = await ProductCategoryService().getProductCategory(req.params)
        res.send({
            msg: "获得产品类别成功",
            code: 0,
            data: result
        })
    }
    const addProductCategory = async (req, res) => {
        const result = await ProductCategoryService().addProductCategory(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteProductCategory = async (req, res) => {
        const result = await ProductCategoryService().deleteProductCategory(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putProductCategory = async (req, res) => {
        const result = await ProductCategoryService().putProductCategory(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ""
        })
    }
    return {
        getProductCategory,
        addProductCategory,
        deleteProductCategory,
        putProductCategory
    }
}
module.exports = ProductCategoryController