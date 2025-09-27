import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: "No token provided" });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Use secret from .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded info to req (depends on how you signed token)
        req.userId = decoded.userId;

        next();
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

export default authMiddleware;