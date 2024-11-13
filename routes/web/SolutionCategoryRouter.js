// 用户相关的
const express = require('express');
const SolutionCategoryController = require('../../controller/web/SolutionCategoryController')
const SolutionCategoryRouter = express.Router();


// 登录
SolutionCategoryRouter.get('/solutionCategoryList/:_id', SolutionCategoryController().getSolutionCategory)
SolutionCategoryRouter.get('/solutionCategoryList/', SolutionCategoryController().getSolutionCategory)
module.exports = SolutionCategoryRouter;
