const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
const todoRoutes = require("./routes/todoRoutes");
const PORT = process.env.PORT;
connectDB();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/todoRoutes", todoRoutes);

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
