import express from "express";
import "dotenv";
import { configDotenv } from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

configDotenv();
connectDB();

const app = express();

//routes
app.use("/api/auth", authRoutes);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// define PORT as env or 8080 is a very good practice, it will use this on deploy
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server on localhost:${PORT}`);
});
