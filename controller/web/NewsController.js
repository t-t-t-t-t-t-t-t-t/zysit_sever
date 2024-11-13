const NewsService = require('../../service/web/NewsService')
const NewsController = () => {
    const getNews = async (req, res) => {
        const result = await NewsService().getNews(req.params)
        res.send({
            msg: "获得新闻成功",
            code: 0,
            data: result
        })
    }

    return {
        getNews,
    }
}
module.exports = NewsController