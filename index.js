const express = require("express");
const fs = require("fs");

const userRouter = require("./routes/user");
const logResReq = require("./middlewares/index");

const { connectMongoDB } = require("./connection");
// const { logResReq } = require("./middlewares/index");

const app = express();

const PORT = 8000;
//Connection
connectMongoDB("mongodb://127.0.0.1:27017/practice1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

//Midddleware
app.use(express.urlencoded({ extended: false }));

app.use(logResReq("./log.txt"));

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
