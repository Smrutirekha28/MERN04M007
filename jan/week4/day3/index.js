const express = require("express");
const dotenv= require("dotenv");
const connectDb = require("./dbConfig/db");
dotenv.config();
const app = express();

connectDb()

app.use("/api",(req,res)=>{//the 1st parameter is the api name and the 2nd parameter is the handling code
    console.log("hiiii")
    // res.send("app running.....");//it is used to send the data 
    res.send("<h1>get method called</h1>")
})

app.post("/post",(req,res)=>{
    res.send("post method called")
})

const port = process.env.port;
console.log(port)
app.listen(port,()=>{
    console.log("my server is starting....",port);
    
})