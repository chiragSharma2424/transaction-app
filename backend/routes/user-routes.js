import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import zod from 'zod'
import userModel from '../models/user.model.js';
import accountModel from '../models/account-model.js';


// zod validation check
const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post('/signup', async (req, res) => {
    const {success} = signupSchema.safeParse(req.body);
    if(!success) {
        return res.status(400).json({
            message: "Email already exists"
        })
    }

   const existingUser = userModel.findOne({
      username: req.body.username
   })

   if(existingUser) {
    return res.status(400).json({
        message: "email already taken"
    })
   }

   const user = await userModel.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName
   });

   const userId = user._id

   await accountModel.create({
    userId: userId,
    balanec: Math.floor(Math.random() * 10000)
   })

   const token = jwt.sign({
     userId
   }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({
        message: "User created successfully || signup completed",
        token: token
    })
});


const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})


router.post('/signin', async (req, res) => {
    try {
        const { success } = signinBody.safeParse(req.body);
        if(!success) {
            return res.status(400).json({
                message: "Incorrect inputs"
            })
        };
        
        const user = await userModel.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if(!user) {
            return res.status(404).json({
                message: "user not found in database"
            })
        };

        if(user) {
            const token = jwt.sign({
                userId: user._id
            }, process.env.JWT_SECRET, { expiresIn: '1h' });
        }

        return res.status(200).json({
            message: "User logged in successfully"
        });


    } catch(err) {
        console.log(`error in signin route ${err}`);
        return res.status(500).json({
            message: "internal sever error"
        })
    }
})


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await userModel.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
});

export default router;