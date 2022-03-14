const mongoose = require("mongoose");

//Fixed Schema
const fixedAccountSchema = new mongoose.Schema(
  {
    account_number:{type:String, required:true, unique:true},
    balance:{type:String, required:false},
    interestRate:{type:String, required:true},
    startDate:{type:String, required:true},
    maturityDate:{type:String, required:true},
  },
  {
    timestamps:true
  }
);
//Fixed model
module.exports = mongoose.model("fixedaccount",fixedAccountSchema)
