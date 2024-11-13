const NewsService = require('../../service/admin/NewsService')
const NewsController = () => {
    const getNews = async (req, res) => {
        const result = await NewsService().getNews(req.params)
        res.send({
            msg: "获得新闻成功",
            code: 0,
            data: result
        })
    }
    const addNews = async (req, res) => {
        const result = await NewsService().addNews(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteNews = async (req, res) => {
        const result = await NewsService().deleteNews(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putNews = async (req, res) => {
        const result = await NewsService().putNews(req.body)
        res.send({
            msg: "更新成功",
            code: 0,
            data: ""
        })
    }
    return {
        getNews,
        addNews,
        deleteNews,
        putNews
    }
}
module.exports = NewsController