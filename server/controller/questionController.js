// database connection to be imported from  collaborators
import dbConnection from "../DB/dbconfig.js";
import { StatusCodes } from "http-status-codes";
import { extract } from "keyword-extractor";
import { randomBytes } from "crypto";

async function getAllQuestions(req, res) {
  try {
    // Get all questions from the database (updated to match your schema)
    const [questions] = await dbConnection.execute(
      `SELECT 
        q.questionid,
        q.title,
        q.description,
        q.tag,
        q.createdat,
        q.userid,
        u.username,
        u.firstname,
        u.lastname
      FROM questions q 
      JOIN users u ON q.userid = u.userid 
      ORDER BY q.createdat DESC`
    );

    // Check if the questions array is empty
    if (questions.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "No questions found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      message: "Questions retrieved successfully",
      questions: questions,
    });
  } catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "An unexpected error occurred",
      error: error.message,
    });
  }
}
const generateTag = (title) => {
  const extractionResult = extract(title, {
    language: "english", // Analyzes English text
    remove_digits: true, // Removes numbers (e.g., "React 16" → "React")
    return_changed_case: true, // Converts to lowercase
    remove_duplicates: true, // Removes duplicate keywords
  });
  return extractionResult.length > 0 ? extractionResult[0] : "general";
};

async function postQuestion(req, res) {
  const { title, description, userid } = req.body;
  console.log(title);

  // Check for missing items
  if (!title || !description) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Please provide all required fields!",
    });
  }
  // Add these checks after validating required fields
  if (title.length < 10) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Title should be at least 10 characters long",
    });
  }

  if (description.length < 10) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Description should be at least 10 characters long",
    });
  }

  try {
    // get userid from user
    // const { user_id } = req.user;

    // get a unique identifier for questionid so two questions do not end up having the same id. crypto built in node module.
    const questionid = randomBytes(16).toString("hex");

    const tag = generateTag(title);

    // Insert question into database
    await dbConnection.execute(
      "INSERT INTO questions (questionid, userid, title, description, tag, createdat) VALUES (?,?,?,?,?,?)",
      [questionid, userid, title, description, tag, new Date()]
    );

    // After inserting, you might want to return the question data
    return res.status(StatusCodes.CREATED).json({
      message: "Question created successfully",
      question: {
        questionid,
        title,
        description,
        tag,
        userid,
        createdat: new Date(),
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "An unexpected error occurred.",
    });
  }
}



export { getAllQuestions, postQuestion};
