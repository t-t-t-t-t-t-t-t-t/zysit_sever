// user处理
const UserService = require('../../service/admin/UserService')
const UserController = () => {
    const login = async (req, res) => {
        //req.body
        // 对数据库的操作
        const result = await UserService().login(req.body);
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "用户名密码不匹配"
            })
        } else {
            res.send({
                code: "0",
                sussess: "登录成功"
            })
        }
    }

    return {
        login
    }
}
module.exports = UserController;