// 用户相关的
const express = require('express');
const ProductCategoryController = require('../../controller/web/ProductCategoryController')
const ProductCategoryRouter = express.Router();


// 登录
ProductCategoryRouter.get('/productCategoryList/:_id', ProductCategoryController().getProductCategory)
ProductCategoryRouter.get('/productCategoryList/', ProductCategoryController().getProductCategory)
module.exports = ProductCategoryRouter;
