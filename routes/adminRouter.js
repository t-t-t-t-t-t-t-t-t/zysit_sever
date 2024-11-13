const UserRoute = require('./admin/UserRouter');
const GeneralRoute = require('./admin/GeneralApi')
const BannerRoute = require('./admin/BannerRouter')
const HonerRouter = require('./admin/HonerRouter')
const FriendRouter = require('./admin/FriendRouter')
const ProductRouter = require('./admin/ProductRouter')
const ProductCategoryRouter = require('./admin/ProductCategoryRouter')
const SolutionCategoryRouter = require('./admin/SolutionCategoryRouter')
const SolutionRouter = require('./admin/SolutionRouter')
const CasesCategoryRouter = require('./admin/CasesCategoryRouter')
const CasesRouter = require('./admin/CasesRouter')
const NewsRouter = require('./admin/NewsRouter')
const express = require('express');

const adminRouter = express.Router();


adminRouter.use("/user", UserRoute)
adminRouter.use("/banner", BannerRoute)
adminRouter.use("/uploadFile", GeneralRoute)
adminRouter.use("/honer", HonerRouter)
adminRouter.use("/friend", FriendRouter)
adminRouter.use("/product", ProductRouter)
adminRouter.use("/productCategory", ProductCategoryRouter)
adminRouter.use("/solutionCategory", SolutionCategoryRouter)
adminRouter.use("/solution", SolutionRouter)
adminRouter.use("/casesCategory", CasesCategoryRouter)
adminRouter.use("/cases", CasesRouter)
adminRouter.use("/news", NewsRouter)


module.exports = adminRouter;
