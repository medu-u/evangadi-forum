import express from "express";
import dotenv from "dotenv";
import userRoutes from  './routes/userRoutes.js'
import answerRoutes from "./routes/answerRoute.js";

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3000;

//json packing middleware
app.use(express.json());

//userRoutes middleware
app.use('/api',userRoutes)
app.use("/api", answerRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});