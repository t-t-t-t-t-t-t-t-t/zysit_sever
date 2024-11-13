const CasesCategoryService = require('../../service/web/CasesCategoryService')
const CasesCategoryController = () => {
    const getCasesCategory = async (req, res) => {
        const result = await CasesCategoryService().getCasesCategory(req.params)
        res.send({
            msg: "获得应用案例类别成功",
            code: 0,
            data: result
        })
    }
    return {
        getCasesCategory,
    }
}
module.exports = CasesCategoryController