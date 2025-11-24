const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./configs/db");
const boardRoute = require("./routes/boardRoute");
const taskRoute = require("./routes/taskRoute");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "https://scriptguru-frontend-five.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type",
}));

app.use(express.json());

app.use("/boards", boardRoute);
app.use("/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("Team Collaboration Board Backend is Running...");
});

module.exports = app;  // Export app for serverless
