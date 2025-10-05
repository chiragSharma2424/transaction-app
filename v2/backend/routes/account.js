const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const { Account } = require('../models/userModel');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get('/balance', authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId,
    });

    res.json({
        balance: account.balance,
    })
});

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    const account = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!account || amount > account.balance) {
        await session.abortTransaction();

        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = await Account.findOne({
        userId: to
    }).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne(
        {userId: req.userId},
        {$inc: {balance: -amount}}
    );

    await Account.updateOne({
        userId: to
    }, {$inc: {balance: amount}});
});

module.exports = router;