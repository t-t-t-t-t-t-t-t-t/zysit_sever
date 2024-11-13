const ProductService = require('../../service/admin/ProductService')
const ProductController = () => {
    const getProduct = async (req, res) => {
        const result = await ProductService().getProduct(req.params)
        res.send({
            msg: "获得产品列表成功",
            code: 0,
            data: result
        })
    }
    const addProduct = async (req, res) => {
        const result = await ProductService().addProduct(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteProduct = async (req, res) => {
        const result = await ProductService().deleteProduct(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putProduct = async (req, res) => {
        const result = await ProductService().putProduct(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ''
        })
    }
    const getSolutionTitle = async (req, res) => {
        const result = await ProductService().getSolutionTitle(req.body)
        res.send({
            msg: "获得解决方案列表成功",
            code: 0,
            data: result
        })
    }
    // 获取所有场景列表，返回名字，id，进行选择，产品中的场景，存id和名字
    return {
        getProduct,
        addProduct,
        deleteProduct,
        putProduct,
        getSolutionTitle
    }
}
module.exports = ProductController