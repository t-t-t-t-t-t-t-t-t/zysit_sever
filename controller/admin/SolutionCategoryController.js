const SolutionCategoryService = require('../../service/admin/SolutionCategoryService')
const SolutionCategoryController = () => {
    const getSolutionCategory = async (req, res) => {
        const result = await SolutionCategoryService().getSolutionCategory(req.params)
        res.send({
            msg: "获得解决方案类别成功",
            code: 0,
            data: result
        })
    }
    const addSolutionCategory = async (req, res) => {
        const result = await SolutionCategoryService().addSolutionCategory(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteSolutionCategory = async (req, res) => {
        const result = await SolutionCategoryService().deleteSolutionCategory(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putSolutionCategory = async (req, res) => {
        const result = await SolutionCategoryService().putSolutionCategory(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ""
        })
    }
    return {
        getSolutionCategory,
        addSolutionCategory,
        deleteSolutionCategory,
        putSolutionCategory
    }
}
module.exports = SolutionCategoryController