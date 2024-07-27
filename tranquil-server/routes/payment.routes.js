import express from "express";

import { verifyAccessToken } from "../middleware/verify-access-token.js";
import { createPayment } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/", verifyAccessToken, createPayment);

export default router;
