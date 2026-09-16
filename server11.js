const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});