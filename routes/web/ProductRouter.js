// 用户相关的Product
const express = require('express');
const ProductController = require('../../controller/web/ProductController')
const ProductRouter = express.Router();


// 登录
ProductRouter.get('/productList/:_id', ProductController().getProduct)
ProductRouter.get('/productList/', ProductController().getProduct)
ProductRouter.get('/productSolutionList/', ProductController().getSolutionTitle)
ProductRouter.get('/productListByCategory/:category', ProductController().getProductByCategory)
module.exports = ProductRouter; 
