//To execute the index.js we have to write node index.js(it is not auto update)

//To do auto update or auto restarting we have to use nodemon npm
//and the command for nodemon is

//"dev" : "nodemon index.js" (it is used for when anyone do npm run dev the nodemon index.js is automatic starting) 

//to store the port number or any data secretly in the form of key and value we have to use .env file and it is a environmental file 

//index.js is the server page in express
const express = require("express"); //It is used to import the express inside the current file
const dotenv = require("dotenv"); //it is used to import dotenv
dotenv.config()//the dotenv is ready for configuration (where we can start the file)

const app = express();//application
let port = process.env.port;

app.listen(port,()=>{ //handler //listen () is used to run the server
    console.log("my server is starting and now we can access hahaha.........",port);
}) //the 1st parameter(8000) is the port number and the 2nd one is the handler
//if the handler start executing,so we can know that the application is starting

//steps
//npm init -y
//npm i express dotenv nodemon
//for database
    //npm i mongoose