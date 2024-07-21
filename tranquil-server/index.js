import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import url from "url";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";

// routes
import authRoute from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "uploads")));
const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log("Database connection error: ", err);
  });

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server running on port http://localhost:${process.env.PORT || 5000}`
  );
});
