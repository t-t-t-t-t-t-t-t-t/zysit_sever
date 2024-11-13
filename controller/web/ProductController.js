const ProductService = require('../../service/web/ProductService')
const ProductController = () => {
    const getProduct = async (req, res) => {
        const result = await ProductService().getProduct(req.params)
        res.send({
            msg: "获得产品列表成功",
            code: 0,
            data: result
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
    const getProductByCategory = async (req, res) => {
        const result = await ProductService().getProductByCategory(req.params)
        res.send({
            msg: "分类获得产品列表成功",
            code: 0,
            data: result
        })
    }
    // 获取所有场景列表，返回名字，id，进行选择，产品中的场景，存id和名字
    return {
        getProduct,
        getSolutionTitle,
        getProductByCategory
    }
}
module.exports = ProductController