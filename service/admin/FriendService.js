const FriendModel = require('../../models/FriendModel')
const FriendService = () => {
    const getFriend = async ({ _id }) => {
        return _id ? FriendModel.find({ _id }) : FriendModel.find()
    }
    const addFriend = async ({ title, image }) => {
        return FriendModel.create({ title, image })
    }
    const deleteFriend = async ({ _id }) => {
        return FriendModel.deleteOne({ _id })
    }
    const putFriend = async ({ _id, title, image }) => {
        return FriendModel.updateOne({ _id }, { title, image })
    }
    return {
        getFriend,
        addFriend,
        deleteFriend,
        putFriend
    }
}
module.exports = FriendService