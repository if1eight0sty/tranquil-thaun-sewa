import express from "express";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

import {
  createKYC,
  deleteUser,
  getUsers,
  verifyKYC,
  getLatestUsers,
  getNumberOfUsers,
} from "../controllers/user-controller.js";
import { verifyAccessToken } from "../middleware/verify-access-token.js";
import { verifyRole } from "../middleware/verify-role.js";

router.post("/kyc", verifyAccessToken, createKYC);
router.get("/", verifyAccessToken, verifyRole("admin"), getUsers);
router.get("/latest", verifyAccessToken, verifyRole("admin"), getLatestUsers);
router.put("/verify-kyc", verifyAccessToken, verifyRole("admin"), verifyKYC);
router.get(
  "/count",
  verifyAccessToken,
  verifyRole(["admin"]),
  getNumberOfUsers
);
router.delete("/:id", verifyAccessToken, verifyRole("admin"), deleteUser);
export default router;
