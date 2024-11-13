const FriendModel = require('../../models/FriendModel')
const FriendService = () => {
    const getFriend = async ({ _id }) => {
        return _id ? FriendModel.find({ _id }) : FriendModel.find()
    }

    return {
        getFriend,

    }
}
module.exports = FriendService