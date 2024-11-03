const UserMoudel = require('../../models/UserModel')
const UserService = () => {
    const login = async ({ userName, password }) => {
        return UserMoudel.find({
            userName,
            password
        })
    }

    return {
        login
    }
}
module.exports = UserService;