import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect(
    "mongodb+srv://codingwithmustafa:test1234@cluster0.3vfzmjn.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected To database"))
  .catch((err) => console.log(err));
