import express from "express";
import { login } from "../controller/userController.js";
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.get("/check", authMiddleware, checkUser);

export default router;
