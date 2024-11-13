const UserMoudel = require('../../models/UserModel')
const UserService = () => {
    const login = async ({ userName, password }) => {
        return UserMoudel.find({
            userName,
            password
        })
    }
    const addUser = async ({ userName, password, role }) => {
        return UserMoudel.create({ userName, password, role })
    }
    const getUserList = ({ _id }) => {
        // return id ? UserMoudel.find({ _id }, ["_id", "userName", "role"]) : UserMoudel.find({}, ["_id", "userName", "role"])// 不取用户密码
        return _id ? UserMoudel.find({ _id }) : UserMoudel.find()
    }
    const deleteUser = async ({ _id }) => {
        return UserMoudel.deleteOne({ _id })// 删除
    }
    const putUser = async ({ _id, userName, password, role }) => {
        return UserMoudel.updateOne({ _id }, { userName, password, role })// 更新
    }
    const setAdminUser = async () => {
        return UserMoudel.create({ userName: 'admin', password: '123456', role: 0 });
    }
    return {
        login,
        addUser,
        getUserList,
        deleteUser,
        putUser,
        setAdminUser
    }
}
module.exports = UserService;