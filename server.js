const express = require("express");
const app = express();
const mongoose = require("mongoose");
const initDB = require("./config/dbConecction");
const mainRouter = require("./routes/mainRouter");
const PORT = process.env.PORT || 3500;

//db conection execution
initDB();

//URL decoding middleware
app.use(express.urlencoded({ extended: false }));

//JSON parser middleware
app.use(express.json());

//Main router middleware
app.use("/", mainRouter);

//mongoose conection to db
mongoose.connection.once("open", () => {
  console.log("Connected to database");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
