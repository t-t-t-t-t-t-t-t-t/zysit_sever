const CasesService = require('../../service/web/CasesService')
const CasesController = () => {
    const getCases = async (req, res) => {
        const result = await CasesService().getCases(req.params)
        res.send({
            msg: "获得应用案例成功",
            code: 0,
            data: result
        })
    }
    const getCasesByCategory = async (req, res) => {
        const result = await CasesService().getCasesByCategory(req.params)
        res.send({
            msg: "分类获得应用案例成功",
            code: 0,
            data: result
        })
    }
    return {
        getCases,
        getCasesByCategory
    }
}
module.exports = CasesController