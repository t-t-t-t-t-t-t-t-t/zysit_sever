const HonerService = require('../../service/admin/HonerService')
const HonerController = () => {
    const getHoner = async (req, res) => {
        const result = await HonerService().getHoner(req.params)
        res.send({
            msg: "获得荣誉列表成功",
            code: 0,
            data: result
        })
    }
    const addHoner = async (req, res) => {
        const result = await HonerService().addHoner(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteHoner = async (req, res) => {
        const result = await HonerService().deleteHoner(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putHoner = async (req, res) => {
        const result = await HonerService().putHoner(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ""
        })
    }
    return {
        getHoner,
        addHoner,
        deleteHoner,
        putHoner
    }
}
module.exports = HonerController