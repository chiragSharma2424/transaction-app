import express from 'express';
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

export default accountRouter;