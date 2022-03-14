const mongoose = require("mongoose");

//saving Schema
const savingsAccountSchema = new mongoose.Schema(
  {
    account_number:{type:String, required:true, unique:true},
    balance:{type:String, required:false},
    interestRate:{type:String, required:true},
  },
  {
    timestamps:true
  }
);
//saving model
module.exports = mongoose.model("savingsaccount",savingsAccountSchema)
