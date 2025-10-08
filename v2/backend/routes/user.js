const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Account } = require('../models/userModel');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

// this is our user ka api
// /api/v2/user/signup
router.post('/signup', async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400).json({
            message: "All fields are required"
        })
    }

    const existingUser = await User.findOne({ email });

    if(existingUser) {
        return res.status(409).json({
            message: "Email already taken"
        })
    }

    const newUser = await User.create({
        name: name,
        email: email,
        password: password
    });

    const userId = newUser._id;

    // creating an account
    await Account.create({
        userId: userId,
        balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign({userId}, "secret-key");

    res.status(201).json({
        message: "user created successfully",
        token: token
    });
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if(!existingUser || !(bcrypt.compare(password, existingUser.password))) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({userId: existingUser._id}, "secret-key");

        res.json({
            message: "Logged in successfully",
            token
        })

    } catch(error) {
        return res.status(501).json({
            message: "Internal server error",
            error: error.message
        })
    }
});


router.put('/', authMiddleware, async (req, res) => {
    try {
        await User.updateOne({
            id: req.userId
        }, req.body);

        res.json({
            message: "updated successfully"
        })
    } catch(error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
});


router.get('/bulk', authMiddleware, async (req, res) => {
    try {
        const filter = req.query.filter || "";
        const users = await User.find({
            _id: {$ne: req.userId},
            $or: [
                {name: {$regex: filter, $options: 'i'}},
                {email: {$regex: filter, $options: 'i'}}
            ]
        });

        res.json({
               users: users.map((user) => ({
               email: user.email,
               name: user.name,
               id: user._id
            }))
});
    } catch(error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
});

module.exports = router;