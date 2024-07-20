import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Access denied",
      status: 401,
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid token",
        status: 403,
      });
    }
    req.user = user;
    next();
  });
};
