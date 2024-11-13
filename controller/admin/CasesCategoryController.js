const CasesCategoryService = require('../../service/admin/CasesCategoryService')
const CasesCategoryController = () => {
    const getCasesCategory = async (req, res) => {
        const result = await CasesCategoryService().getCasesCategory(req.params)
        res.send({
            msg: "获得应用案例类别成功",
            code: 0,
            data: result
        })
    }
    const addCasesCategory = async (req, res) => {
        const result = await CasesCategoryService().addCasesCategory(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteCasesCategory = async (req, res) => {
        const result = await CasesCategoryService().deleteCasesCategory(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putCasesCategory = async (req, res) => {
        const result = await CasesCategoryService().putCasesCategory(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ""
        })
    }
    return {
        getCasesCategory,
        addCasesCategory,
        deleteCasesCategory,
        putCasesCategory
    }
}
module.exports = CasesCategoryController