const FriendService = require('../../service/admin/FriendService')
const FriendController = () => {
    const getFriend = async (req, res) => {
        const result = await FriendService().getFriend(req.params)
        res.send({
            msg: "获得合作伙伴成功",
            code: 0,
            data: result
        })
    }
    const addFriend = async (req, res) => {
        const result = await FriendService().addFriend(req.body)
        res.send({
            msg: "添加成功",
            code: 0,
            data: result
        })
    }
    const deleteFriend = async (req, res) => {
        const result = await FriendService().deleteFriend(req.params)//接受id

        res.send({
            msg: "删除成功",
            code: 0,
            data: ""
        })
    }
    const putFriend = async (req, res) => {
        const result = await FriendService().putFriend(req.body)
        res.send({
            msg: "跟新成功",
            code: 0,
            data: ""
        })
    }
    return {
        getFriend,
        addFriend,
        deleteFriend,
        putFriend
    }
}
module.exports = FriendController