// 用户相关的
const express = require('express');
const SolutionCategoryController = require('../../controller/admin/SolutionCategoryController')
const SolutionCategoryRouter = express.Router();


// 登录
SolutionCategoryRouter.post("/solutionCategoryList", SolutionCategoryController().addSolutionCategory)
SolutionCategoryRouter.get('/solutionCategoryList/:_id', SolutionCategoryController().getSolutionCategory)
SolutionCategoryRouter.get('/solutionCategoryList/', SolutionCategoryController().getSolutionCategory)
SolutionCategoryRouter.delete('/solutionCategoryList/:_id', SolutionCategoryController().deleteSolutionCategory)
SolutionCategoryRouter.put('/solutionCategoryList/', SolutionCategoryController().putSolutionCategory)
module.exports = SolutionCategoryRouter;
