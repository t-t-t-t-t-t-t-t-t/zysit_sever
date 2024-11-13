const BannerModel = require('../../models/BannerModel')
const BannerService = () => {
    const getBannerList = ({ type }) => {
        return type ? BannerModel.find({ type }) : BannerModel.find();
    }
    return {
        getBannerList,
    }
}
module.exports = BannerService