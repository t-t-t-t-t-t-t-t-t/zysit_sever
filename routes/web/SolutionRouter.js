// 用户相关的
const express = require('express');
const SolutionController = require('../../controller/web/SolutionController')
const SolutionRouter = express.Router();


// 登录
SolutionRouter.get('/solutionList/:_id', SolutionController().getSolution)
SolutionRouter.get('/solutionList/', SolutionController().getSolution)
SolutionRouter.get('/solutionListByCategory/:category', SolutionController().getSolutionByCategory)
SolutionRouter.get('/solutionProductList', SolutionController().getProductTitle)
SolutionRouter.get('/solutionCasesList', SolutionController().getCasesTitle)
module.exports = SolutionRouter;
