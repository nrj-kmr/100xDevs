import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import connectDB from "./db/db.config.js";
import userRouter from "./routes/user.routes.js";
import courseRouter from "./routes/course.routes.js";

dotenv.config({path: './.env'})

const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.use('/user', userRouter)
app.use('/course', courseRouter)

connectDB().then(() => {
  app.get("/", (req, res) => {
    res.send("Response from the server!");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.log(`Couldn't connect to DB - ${err}`)
})