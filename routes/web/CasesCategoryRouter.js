const express = require('express');
const CasesCategoryController = require('../../controller/web/CasesCategoryController')
const CasesCategoryRouter = express.Router();


CasesCategoryRouter.get('/casesCategoryList/:_id', CasesCategoryController().getCasesCategory)
CasesCategoryRouter.get('/casesCategoryList/', CasesCategoryController().getCasesCategory)
module.exports = CasesCategoryRouter;

