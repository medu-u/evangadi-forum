<<<<<<< HEAD
import { Router } from "express";
const router = Router();
import { postAnswerForQuestion } from "../controller/answerController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/", authMiddleware, postAnswerForQuestion);
=======
import express from "express";
import { getAnswers , postAnswer} from "../controller/answerController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/:question_id", getAnswers);

// POST /api/answer
router.post("/answer", authMiddleware, postAnswer);
>>>>>>> origin

export default router;
