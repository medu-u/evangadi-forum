import { Router } from "express";
const router = Router();
import {
  getAllQuestions,
  postQuestion,
} from "../controller/questionController.js";

router.get("/", getAllQuestions);
router.post("/", postQuestion);
// router.get("/", );
export default router;
