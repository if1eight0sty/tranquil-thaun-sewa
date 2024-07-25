import express from "express";
import { verifyAccessToken } from "../middleware/verify-access-token.js";
import { verifyRole } from "../middleware/verify-role.js";
import upload from "../utility/multer.js";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";
const router = express.Router();

router.post(
  "/",
  verifyAccessToken,
  verifyRole(["seller", "admin"]),
  upload.array("images", 5),
  createRoom
);
router.get("/", verifyAccessToken, getRooms);
router.get("/:id", verifyAccessToken, getRoom);
router.put(
  "/:id",
  verifyAccessToken,
  verifyRole(["seller", "admin"]),
  upload.array("images", 5),
  updateRoom
);
router.delete(
  "/:id",
  verifyAccessToken,
  verifyRole(["seller", "admin"]),
  deleteRoom
);

export default router;
