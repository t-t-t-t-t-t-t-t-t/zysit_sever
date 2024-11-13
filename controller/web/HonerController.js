const HonerService = require('../../service/web/HonerService')
const HonerController = () => {
    const getHoner = async (req, res) => {
        const result = await HonerService().getHoner(req.params)
        res.send({
            msg: "获得荣誉列表成功",
            code: 0,
            data: result
        })
    }
    return {
        getHoner,
    }
}
module.exports = HonerController