const mongoose = require("mongoose");

//Master Schema
const masterAccountSchema = new mongoose.Schema(
  {
    balance: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true
  }
);
//Master model
module.exports = mongoose.model("masteraccount", masterAccountSchema);
