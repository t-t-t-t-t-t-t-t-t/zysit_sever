// 用户相关的
const express = require('express');
const ProductCategoryController = require('../../controller/admin/ProductCategoryController')
const ProductCategoryRouter = express.Router();


// 登录
ProductCategoryRouter.post("/productCategoryList", ProductCategoryController().addProductCategory)
ProductCategoryRouter.get('/productCategoryList/:_id', ProductCategoryController().getProductCategory)
ProductCategoryRouter.get('/productCategoryList/', ProductCategoryController().getProductCategory)
ProductCategoryRouter.delete('/productCategoryList/:_id', ProductCategoryController().deleteProductCategory)
ProductCategoryRouter.put('/productCategoryList/', ProductCategoryController().putProductCategory)
module.exports = ProductCategoryRouter;
