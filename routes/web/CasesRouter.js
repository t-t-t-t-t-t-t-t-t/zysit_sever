const express = require('express');
const CasesController = require('../../controller/web/CasesController')
const CasesRouter = express.Router();


CasesRouter.get('/casesList/:_id', CasesController().getCases)
CasesRouter.get('/casesList/', CasesController().getCases)
CasesRouter.get('/casesListByCategory/:category', CasesController().getCasesByCategory)

module.exports = CasesRouter;

