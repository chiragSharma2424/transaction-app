const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const accountRouter = require('./account');

// /api/v2/user
router.use('/user', userRouter);

// /ai/v2/account
router.use('/account', accountRouter);

module.exports = router;