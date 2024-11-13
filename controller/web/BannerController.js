const BannerService = require('../../service/web/BannerService')
const BannerController = () => {
    const getBannerList = async (req, res) => {
        const result = await BannerService().getBannerList({ type: req.params.type })
        res.send({
            msg: "获取Banner列表成功",
            code: 0,
            data: result
        })
    }
    return {
        getBannerList,
    }
}
module.exports = BannerController