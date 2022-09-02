const { Router } = require('express');
const controller = require('../controller/category.controller');
const validate = require('../middlewares/auth');

const categoryRouter = Router();

categoryRouter.get('/categories', validate.auth, controller.getAll);
categoryRouter.post('/categories', validate.auth, controller.create);

module.exports = categoryRouter;
