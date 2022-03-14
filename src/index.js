const express = require("express");

const app = express();

app.use(express.json());

const router = new express.Router();

const masterRouter = require("./controllers/masteraccount.controllers");
const savingRouter = require("./controllers/saving.controller");

router.use("/saving", savingRouter);

router.use("/master", masterRouter);

app.use(router);
module.exports = app;
