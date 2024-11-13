const NewsModel = require('../../models/NewsModel')
const NewsService = () => {

    const getNews = async ({ _id }) => {
        return _id ? NewsModel.find({ _id }) : NewsModel.find()
    }
    const addNews = async ({ title, image, url }) => {
        return NewsModel.create({ title, image, url })
    }
    const deleteNews = async ({ _id }) => {
        return NewsModel.deleteOne({ _id })
    }
    const putNews = async ({ _id, title, image, url }) => {
        return NewsModel.updateOne({ _id }, { title, image, url })
    }
    return {
        getNews,
        addNews,
        deleteNews,
        putNews
    }
}
module.exports = NewsService