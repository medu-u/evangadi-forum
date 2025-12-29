import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import questionRoutes from "./routes/questionRoute.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

//json packing middleware
app.use(express.json());

// question routes midware
app.use("/api/question", questionRoutes);

//userRoutes middleware
app.use("/api", userRoutes);

// chatRoutes middlware
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
