const SolutionService = require('../../service/web/SolutionService')
const SolutionController = () => {
    const getSolution = async (req, res) => {
        const result = await SolutionService().getSolution(req.params)
        res.send({
            msg: "获得解决方案成功",
            code: 0,
            data: result
        })
    }
    const getSolutionByCategory = async (req, res) => {
        const result = await SolutionService().getSolutionByCategory(req.params)
        res.send({
            msg: "分类获得解决方案成功",
            code: 0,
            data: result
        })
    }
    const getProductTitle = async (req, res) => {
        const result = await SolutionService().getProductTitle()
        res.send({
            msg: "获得产品列表成功",
            code: 0,
            data: result
        })
    }
    const getCasesTitle = async (req, res) => {
        const result = await SolutionService().getCasesTitle()
        res.send({
            msg: "获得应用场景列表成功",
            code: 0,
            data: result
        })
    }
    return {
        getSolution,
        getProductTitle,
        getCasesTitle,
        getSolutionByCategory
    }
}
module.exports = SolutionController