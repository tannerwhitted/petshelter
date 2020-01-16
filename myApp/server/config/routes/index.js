const petRoutes = require('../routes/routes');
const router = require('express').Router();
const apiRouter = require('express').Router();
const catchallrouter = require('./catchall.routes');

router.use(petRoutes)
module.exports = apiRouter.use('/api', router).use(catchallrouter);
