// 用户相关的Product
const express = require('express');
const ProductController = require('../../controller/admin/ProductController')
const ProductRouter = express.Router();


// 登录
ProductRouter.post("/productList", ProductController().addProduct)
ProductRouter.get('/productList/:_id', ProductController().getProduct)
ProductRouter.get('/productList/', ProductController().getProduct)
ProductRouter.delete('/productList/:_id', ProductController().deleteProduct)
ProductRouter.put('/productList/', ProductController().putProduct)
ProductRouter.get('/productSolutionList/', ProductController().getSolutionTitle)
module.exports = ProductRouter;
