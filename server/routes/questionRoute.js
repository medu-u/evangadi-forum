import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();
import {
  getAllQuestions,
  getSingleQuestion,
  postQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controller/questionController.js";

router.get("/", getAllQuestions);

// get a single question
router.post("/", authMiddleware, postQuestion);
router.get("/:questionid", getSingleQuestion);
router.put("/:questionid", authMiddleware, updateQuestion);
router.delete("/:questionid", authMiddleware, deleteQuestion);

export default router;
