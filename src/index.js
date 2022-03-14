const express = require("express");

const app = express();

app.use(express.json());

const router = new express.Router();

const masterRouter = require("./controllers/masteraccount.controllers");
app.use("/master", masterRouter);

module.exports = app;
