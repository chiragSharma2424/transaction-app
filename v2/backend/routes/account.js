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
    try {
        const { amount, to } = req.body;

        const account = await Account.findOne({ userId: req.userId });

        if (!account || amount > account.balance) {
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({ userId: to });

        if (!toAccount) {
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        // Update balances
        await Account.updateOne(
            { userId: req.userId },
            { $inc: { balance: -amount } }
        );

        await Account.updateOne(
            { userId: to },
            { $inc: { balance: amount } }
        );

        res.json({ message: "Transaction successful" });
    } catch (err) {
        console.error("Transfer Error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;