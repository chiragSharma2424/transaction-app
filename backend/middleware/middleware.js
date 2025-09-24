import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({});
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({});
        }

    } catch(err) {
        console.log(`error in auth middleware ${err}`);
        return res.status(500).json({
            message: "middleware breaks"
        })
    }
}

export default authMiddleware;