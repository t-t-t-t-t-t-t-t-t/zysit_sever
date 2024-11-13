// 用户相关的
const express = require('express');
const CasesController = require('../../controller/admin/CasesController')
const CasesRouter = express.Router();


// 登录
CasesRouter.post("/casesList", CasesController().addCases)
CasesRouter.get('/casesList/:_id', CasesController().getCases)
CasesRouter.get('/casesList/', CasesController().getCases)
CasesRouter.delete('/casesList/:_id', CasesController().deleteCases)
CasesRouter.put('/casesList/', CasesController().putCases)
module.exports = CasesRouter;

