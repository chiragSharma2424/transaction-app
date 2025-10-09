const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const mainRouter = require('./routes/index');
const { connectsDB } = require('./db/db');
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/v2', mainRouter);

// connection of database
connectsDB()

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
})