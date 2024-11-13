// 用户相关的
const express = require('express');
const Path = require('path')
const uploadFileRouter = express.Router();
const { baseUrl } = require('../../globalData')
const multer = require('multer')
function uploadImageMiddle(path) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path)// 存放位置,绝对路径
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)// 文件名
        }
    })
    return multer({ storage: storage }).single('image')// image
}
// 登录
uploadFileRouter.post("/", uploadImageMiddle(Path.join(__dirname, '../../public/images')), (req, res) => {
    console.log(req.file)// 上传表单数据中的文件
    console.log(req.body)// 上传表单的中的
    // req.file.fildname , 键名
    // req.file.filename ,文件名

    res.send({
        msg: "图片上传成功",
        data: {
            image: baseUrl + `images/${req.file.filename}`
        },
        code: 0
    })
})

module.exports = uploadFileRouter;
