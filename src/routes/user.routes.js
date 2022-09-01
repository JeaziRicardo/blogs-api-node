const { Router } = require('express');
const user = require('../controller/user.controller');
const validate = require('../middlewares/auth');

const userRouter = Router();

userRouter.get('/user', validate.auth, user.getAll);
userRouter.post('/login', user.login);
userRouter.post('/user', user.create);

module.exports = userRouter;