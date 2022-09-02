const { Router } = require('express');
const controller = require('../controller/post.controller');
const validate = require('../middlewares/auth');

const postRouter = Router();

postRouter.get('/post', validate.auth, controller.getAll);
postRouter.get('/post/:id', validate.auth, controller.getById);

module.exports = postRouter;