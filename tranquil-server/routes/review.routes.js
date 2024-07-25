import express from "express";
import { verifyAccessToken } from "../middleware/verify-access-token.js";

import { createReview, getReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/:id", verifyAccessToken, createReview);
router.get("/:id", verifyAccessToken, getReviews);

export default router;
