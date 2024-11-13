// 用户相关的
const express = require('express');
const SolutionController = require('../../controller/admin/SolutionController')
const SolutionRouter = express.Router();


// 登录
SolutionRouter.post("/solutionList", SolutionController().addSolution)
SolutionRouter.get('/solutionList/:_id', SolutionController().getSolution)
SolutionRouter.get('/solutionList/', SolutionController().getSolution)
SolutionRouter.delete('/solutionList/:_id', SolutionController().deleteSolution)
SolutionRouter.put('/solutionList/', SolutionController().putSolution)
SolutionRouter.get('/solutionProductList', SolutionController().getProductTitle)
SolutionRouter.get('/solutionCasesList', SolutionController().getCasesTitle)
module.exports = SolutionRouter;
