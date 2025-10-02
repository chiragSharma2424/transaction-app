const express = require('express');
const router = express.Router();
const userRouter = require('./user')

// /api/v2/user
router.use('/user', userRouter);

module.exports = router;