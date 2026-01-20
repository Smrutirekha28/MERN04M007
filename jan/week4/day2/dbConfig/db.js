 const mongoose = require("mongoose");//this is the import statement
const userModel = require("../models/userModel");

async function connectDb(){
    try {
        let connect = await mongoose.connect(process.env.mongo_url)
        console.log("mongodb connected",connect.connection.host);
        // connect.disconnect() //it is used to disconnect mongodb
        // await  userModel.insertOne({fullName:"madhav",age:97,phone:"873623",email:"madhav@gmail.com",password:"8754",cars:["bmw","skoda"]});
        // console.log("data saved");
        
    } catch (error) {
        console.log("mongodb failed to connect");
        console.log(error);
        
    }
 }

 module.exports = connectDb;//this is the export statement