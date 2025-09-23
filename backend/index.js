import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import connectsDB from './database/db.js';
import router from './routes/user-routes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "server is up and running"
    })
});

app.use('/api/v1/user', router);

connectsDB();

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});


// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword

// /api/v1/account/transferMoney
// /api/v1/account/balance