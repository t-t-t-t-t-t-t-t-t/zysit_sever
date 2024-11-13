const BannerModel = require('../../models/BannerModel')
const BannerService = () => {
    const getBannerList = ({ _id }) => {
        return _id ? BannerModel.find({ _id }) : BannerModel.find();
    }
    const putBannerList = ({ title, content, _id, type, image }) => {
        return BannerModel.updateOne({ _id }, { title, content, type, image })// 更新
    }
    const initBanner = () => {
        return BannerModel.create([{ title: 'home', content: 'home', type: 'home', image: '' },
        { title: 'about', content: 'about', type: 'about', image: '' },
        { title: 'product', content: 'product', type: 'product', image: '' },
        { title: 'solution', content: 'solution', type: 'solution', image: '' },
        { title: 'cases', content: 'cases', type: 'cases', image: '' },
        { title: 'serve', content: 'serve', type: 'serve', image: '' },
        { title: 'news', content: 'news', type: 'news', image: '' }
        ])// 更新
    }

    return {
        getBannerList,
        putBannerList,
        initBanner
    }
}
module.exports = BannerService