const { Router } = require('express');
const user = require('../controller/user.controller');

const userRouter = Router();

userRouter.post('/login', user.login);
userRouter.post('/user', user.create);

module.exports = userRouter;