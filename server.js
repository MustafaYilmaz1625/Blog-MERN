const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes =require("./routes/auth.js");


const port =5000;

dotenv.config();

const connect =async () =>{
    try{
        await mongoose.connect(process.env.MONGOOSE);
        console.log('connected to MongoDB');
    }catch(err){
        console.log(err);
    }
}

app.use("/auth", authRoutes);

app.listen(port,() => {
    connect();
    console.log("Server is running on port " + port);
})