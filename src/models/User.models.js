const mongoose = require("mongoose");

//user Schema
const userSchema = new mongoose.Schema(
  {
    firstName:{type:String, required:true},
    middleName:{type:String, required:false},
    lastName:{type:String, required:true},
    age:{type:String, required:true},
    email:{type:String, required:true},
    address:{type:String, required:true},
    gender:{type:String, required:false, default:Female},
    type:{type:String, required:false, default:customer},
    masterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"masteraccount",
        
    }
  },
  {
    timestamps:true
  }
);
//user model
module.exports = mongoose.model("user",userSchema)
