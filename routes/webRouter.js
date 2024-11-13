const BannerRoute = require('./web/BannerRouter')
const HonerRouter = require('./web/HonerRouter')
const FriendRouter = require('./web/FriendRouter')
const ProductRouter = require('./web/ProductRouter')
const ProductCategoryRouter = require('./web/ProductCategoryRouter')
const SolutionCategoryRouter = require('./web/SolutionCategoryRouter')
const SolutionRouter = require('./web/SolutionRouter')
const CasesCategoryRouter = require('./web/CasesCategoryRouter')
const CasesRouter = require('./web/CasesRouter')
const NewsRouter = require('./web/NewsRouter')
const express = require('express');

const webRouter = express.Router();


webRouter.use("/banner", BannerRoute)
webRouter.use("/honer", HonerRouter)
webRouter.use("/friend", FriendRouter)
webRouter.use("/product", ProductRouter)
webRouter.use("/productCategory", ProductCategoryRouter)
webRouter.use("/solutionCategory", SolutionCategoryRouter)
webRouter.use("/solution", SolutionRouter)
webRouter.use("/casesCategory", CasesCategoryRouter)
webRouter.use("/cases", CasesRouter)
webRouter.use("/news", NewsRouter)


module.exports = webRouter;
