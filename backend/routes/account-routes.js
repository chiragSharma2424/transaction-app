import express from 'express';
import mongoose from "mongoose";
import accountModel from '../models/account-model.js';
import authMiddleware from '../middleware/middleware.js';
const accountRouter = express.Router();


// to get balance
accountRouter.get('/balance',authMiddleware, async (req, res) => {
    try {
        const account = await accountModel.findOne({
            userId: req.userId
        });

        return res.status(200).json({
            balance: account.balance
        })
    } catch(err) {
        console.log(`error in balance route ${err}`);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
});

accountRouter.post('/transfer', authMiddleware, async (req, res) => {
    try {
        const session = await mongoose.startSession();
        const { amount, to } = req.body;

        const account = await accountModel.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });

        const toAccount = await accountModel.findOne({ userId: to }).session(session);
        if(!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
            message: "Invalid account"
          });
        }

        await accountModel.updateOne({ userId: req.userId }, { $inc: { balance: -amount }}).session(session);
        await accountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();

        return res.status(200).json({
            message: "transfer successfully"
        });
    }
    } catch(err) {
        console.log(`error in transfer route ${err}`);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

export default accountRouter;