const SolutionService = require('../../service/admin/SolutionService')
const SolutionController = () => {
    const getSolution = async (req, res) => {
        const result = await SolutionService().getSolution(req.params)
        res.send({
            msg: "获得解决方案成功",
            code: 0,
            data: result
        })
    }
    const addSolution = async (req, res) => {
        const result = await SolutionService().addSolution(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteSolution = async (req, res) => {
        const result = await SolutionService().deleteSolution(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putSolution = async (req, res) => {
        const result = await SolutionService().putSolution(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ""
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
        addSolution,
        deleteSolution,
        putSolution,
        getProductTitle,
        getCasesTitle
    }
}
module.exports = SolutionController