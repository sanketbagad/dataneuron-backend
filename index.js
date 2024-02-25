import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./DB/config.js";
import dataRoutes from "./routes/dataRoutes.js";

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", dataRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
