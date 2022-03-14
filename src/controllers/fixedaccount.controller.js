const express = require("express");

const router = new express.Router();

const Fixed = require("../models/FixedAccount.models");

router.post("", async (req, res) => {
  try {
    const details = await Fixed.create(req.body);
    console.log(details);
    res.status(200).send({ details });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
