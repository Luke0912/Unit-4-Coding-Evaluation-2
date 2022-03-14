const express = require("express");


const router = new express.Router();

const Saving = require("../models/SavingAccount.models");

router.post("", async (req, res) => {
  try {
    
    const details = await Mas.create({});
    console.log(details)
    res.status(200).send({ details });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports=router