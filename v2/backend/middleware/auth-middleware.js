const jwt = require('jsonwebtoken');
const jwt_secret = 'secret-key';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(403).json({
            message: "Authorization token missing or invalid"
        });
    }
    const token = authHeader.split(' ')[1];

    if(!token) {
        return res.status(403).json({
            message: "Token not provided"
        })
    }

    try {
        const decode = jwt.verify(token, jwt_secret);
        if(!decode.userId) {
            return res.status(403).json({
                message: "Invalid token"
            })
        }

        req.userId = decode.userId;
        next();
    } catch(err) {
        return res.status(403).json({
            message: "Invalid or expired token"
        })
    }
}

module.exports = authMiddleware;