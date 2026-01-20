const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./dbConfig/db");//import statement of db.js
dotenv.config()

const app = express();
connectDb();//this is used to call the db.js file
const port= process.env.port;
app.listen(port,()=>{
    console.log("my server is starting");
    
})


//model is the one way where we can connect the server with database
//field->schema(collection of fields)->model
//model is used to go to the database through this