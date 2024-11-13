const CasesService = require('../../service/admin/CasesService')
const CasesController = () => {
    const getCases = async (req, res) => {
        const result = await CasesService().getCases(req.params)
        res.send({
            msg: "获得应用案例成功",
            code: 0,
            data: result
        })
    }
    const addCases = async (req, res) => {
        const result = await CasesService().addCases(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteCases = async (req, res) => {
        const result = await CasesService().deleteCases(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putCases = async (req, res) => {
        const result = await CasesService().putCases(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ""
        })
    }
    return {
        getCases,
        addCases,
        deleteCases,
        putCases
    }
}
module.exports = CasesController