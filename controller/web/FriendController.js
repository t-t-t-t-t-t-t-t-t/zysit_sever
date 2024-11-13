const FriendService = require('../../service/web/FriendService')
const FriendController = () => {
    const getFriend = async (req, res) => {
        const result = await FriendService().getFriend(req.params)
        res.send({
            msg: "获得合作伙伴成功",
            code: 0,
            data: result
        })
    }
    return {
        getFriend,
    }
}
module.exports = FriendController