import express from "express";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
import {
  login,
  logout,
  me,
  refreshToken,
  register,
} from "../controllers/auth.controller.js";
import { verifyAccessToken } from "../middleware/verify-access-token.js";

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);
router.post("/logout", verifyAccessToken, logout);
router.get("/me", verifyAccessToken, me);

export default router;
