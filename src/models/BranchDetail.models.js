const mongoose = require("mongoose");

//Branch Schema
const branchSchema = new mongoose.Schema(
  {
    name:{type:String, required:true},
    address:{type:String, required:false},
    IFSC:{type:String, required:true},
    MICR:{type:Number, required:true},
  },
  {
    timestamps:true
  }
);
//Branch model
module.exports = mongoose.model("branch",branchSchema)