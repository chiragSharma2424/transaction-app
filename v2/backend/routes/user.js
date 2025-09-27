const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    res.json({
        msg: "signup"
    })
});

router.post('/signin', (req, res) => {
    res.json({
        msg: "signin"
    })
});

router.put('/', (req, res) => {
    res.json({
        msg: "update"
    })
});

router.get('/bulk', (req, res) => {
    res.json({
        msg: "get all users"
    })
});