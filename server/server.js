const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
const todoRoutes = require("./routes/todoRoutes")
const PORT = process.env.PORT;
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/todoRoutes",todoRoutes)


app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
