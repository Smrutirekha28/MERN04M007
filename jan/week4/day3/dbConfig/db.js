const mongoose = require("mongoose");

async function connectDb(){
    try {
        let connect = await mongoose.connect(process.env.mongo_url);
        console.log("database connected");
        
    } catch (error) {
        console.log("failed to connect");
        
    }
}
module.exports = connectDb