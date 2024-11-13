const NewsModel = require('../../models/NewsModel')
const NewsService = () => {
    const getNews = async ({ _id }) => {
        return _id ? NewsModel.find({ _id }) : NewsModel.find()
    }
    return {
        getNews,
    }
}
module.exports = NewsService