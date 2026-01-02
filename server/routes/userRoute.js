import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { login, register, checkUser } from "../controller/userController.js";

const router = express.Router();

// login user route
router.post("/login", login);

// check user 
router.get("/check", authMiddleware, checkUser);

// register route
router.post("/register", register);

export default router;
