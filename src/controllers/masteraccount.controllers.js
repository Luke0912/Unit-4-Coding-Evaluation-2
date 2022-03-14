const express = require("express");


const router = new express.Router();

const Master = require("../models/MasterAccount.models");

router.get("/details", async (req, res) => {
  try {
    
    const details = await Master.find({}).populate("userId");
    console.log(details)
    res.status(200).send({ details });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports=router