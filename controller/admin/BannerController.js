const BannerService = require('../../service/admin/BannerService')
const BannerController = () => {
    const getBannerList = async (req, res) => {
        const result = await BannerService().getBannerList(req.params)
        res.send({
            msg: "获取Banner列表成功",
            code: 0,
            data: result
        })
    }
    const putBannerList = async (req, res) => {
        const result = await BannerService().putBannerList(req.body);
        console.log(result)
        res.send({
            msg: "编辑成功",
            data: "",
            code: 0
        })
    }
    const initBanner = async (req, res) => {
        const result = await BannerService().initBanner();
        console.log(result)
        res.send({
            msg: "初始化成功",
            data: "",
            code: 0
        })
    }
    return {
        getBannerList,
        putBannerList,
        initBanner
    }
}
module.exports = BannerController