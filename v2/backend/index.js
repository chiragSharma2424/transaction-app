const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/index');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('api/v2', mainRouter);

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
})