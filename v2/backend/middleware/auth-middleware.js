const jwt = require('jsonwebtoken');
const jwt_secret = 'secret-key';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(403).json({
            message: "Authorization token missing or invalid"
        })
    }
}