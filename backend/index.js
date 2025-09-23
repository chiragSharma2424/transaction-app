import express from 'express';
import connectsDB from './database/db.js';
import router from './routes/index-routes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "server is up and running"
    })
});

app.use('/api/v1', router);

connectsDB();

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});