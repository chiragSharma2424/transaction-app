import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import zod from 'zod'
import userModel from '../models/user.model.js';
const router = express.Router();

// zod validation check
const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.get('/signup', async (req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success) {
        return res.status(400).json({
            message: "Email already exists"
        })
    }

    const user = userModel.findOne({
        username: body.username
    });

    if(user._id) {
        return res.status(400).json({
            message: "email already exits/ incorrect inputs"
        })
    }

    const dbUser = await userModel.create(body);
    const token = jwt.sign({
        userId: dbUser._id
    }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({
        message: "User created successfully || signup completed",
        token: token
    })
});

export default router;