const mongoose = require("mongoose");//import
let userSchema = mongoose.Schema({//schema creation
    fullName:{
        type:String,
        required:true,
    },//feilds
    age:{
        type:Number,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },cars:{
        type:[String],
    },role:{
        type:String,
        enum:["admin","user"],//enum is used as option
        default:"user"
    }
},{
    versionKey:false,
    timestamps:true
})

let userModel = mongoose.model("User",userSchema);//User(model name) it always 1st letter capital and User is the collection name //model 
module.exports = userModel;//export