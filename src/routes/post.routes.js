const { Router } = require('express');
const controller = require('../controller/post.controller');
const validate = require('../middlewares/auth');

const postRouter = Router();

postRouter.get('/post', validate.auth, controller.getAll);

module.exports = postRouter;