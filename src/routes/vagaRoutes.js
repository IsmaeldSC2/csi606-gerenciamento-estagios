const express = require("express");
const router = express.Router();

const vagaController = require("../controllers/vagaController");

router.get("/", vagaController.listarVagas);

module.exports = router;