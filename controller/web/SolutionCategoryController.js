const SolutionCategoryService = require('../../service/web/SolutionCategoryService')
const SolutionCategoryController = () => {
    const getSolutionCategory = async (req, res) => {
        const result = await SolutionCategoryService().getSolutionCategory(req.params)
        res.send({
            msg: "获得解决方案类别成功",
            code: 0,
            data: result
        })
    }
    return {
        getSolutionCategory,
    }
}
module.exports = SolutionCategoryController