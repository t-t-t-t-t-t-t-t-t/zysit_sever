// user处理
const UserService = require('../../service/admin/UserService')
const JWT = require('../../utils/JWT')
const UserController = () => {
    const login = async (req, res) => {
        //req.body
        // 对数据库的操作
        const result = await UserService().login(req.body);
        if (result.length === 0) {
            res.send({
                code: -1,
                msg: "用户名密码不匹配"
            })
        } else {
            const token = JWT.generate({ _id: result[0]._id, userName: result[0].userName }, '1d')
            res.header("Authorization", token)
            res.send({
                code: 0,
                data: {
                    token: token,
                    _id: result[0]._id,
                    userName: result[0].userName,
                    role: result[0].role
                },
                msg: "登录成功"
            })
        }
    }
    const addUser = async (req, res) => {
        const result = await UserService().addUser(req.body);
        console.log(result)
        res.send({
            msg: "添加成功",
            data: result,
            code: "0"
        })
    }
    const getUserList = async (req, res) => {
        const result = await UserService().getUserList(req.params);
        res.send({
            msg: "获得用户列表成功",
            data: result,
            code: "0"
        })
    }
    const deleteUser = async (req, res) => {
        const result = await UserService().deleteUser({ _id: req.params._id });
        console.log(result)
        res.send({
            msg: "删除成功",
            data: "",
            code: ""
        })
    }
    const putUser = async (req, res) => {
        const result = await UserService().putUser(req.body);
        console.log(result)
        res.send({
            msg: "编辑成功",
            data: "",
            code: ""
        })
    }
    const setAdminUser = async (req, res) => {
        const result = await UserService().setAdminUser(req.body);
        res.send({
            msg: "设置成功",
            data: "",
            code: ""
        })
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
module.exports = UserController;