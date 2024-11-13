// 用户相关的
const express = require('express');
const CasesCategoryController = require('../../controller/admin/CasesCategoryController')
const CasesCategoryRouter = express.Router();


// 登录
CasesCategoryRouter.post("/casesCategoryList", CasesCategoryController().addCasesCategory)
CasesCategoryRouter.get('/casesCategoryList/:_id', CasesCategoryController().getCasesCategory)
CasesCategoryRouter.get('/casesCategoryList/', CasesCategoryController().getCasesCategory)
CasesCategoryRouter.delete('/casesCategoryList/:_id', CasesCategoryController().deleteCasesCategory)
CasesCategoryRouter.put('/casesCategoryList/', CasesCategoryController().putCasesCategory)
module.exports = CasesCategoryRouter;

