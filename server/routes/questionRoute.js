import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();
import {
  getAllQuestions,
<<<<<<< HEAD
  postQuestion,
  getSingleQuestion,
} from "../controller/questionController.js";

router.get("/", getAllQuestions);
router.get("/:questionid", getSingleQuestion);
router.post("/",authMiddleware, postQuestion);
// router.get("/", );
=======
  getSingleQuestion,
  postQuestion
} from "../controller/questionController.js";

router.get("/", getAllQuestions);

// get a single question
router.post("/", postQuestion);
router.get("/:questionid", getSingleQuestion);

>>>>>>> origin
export default router;
