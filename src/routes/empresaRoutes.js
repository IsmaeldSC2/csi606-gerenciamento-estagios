const express = require("express");
const router = express.Router();

const empresaController = require("../controllers/empresaController");



router.get("/", empresaController.listarEmpresas);
router.get("/nova", empresaController.exibirFormulario);
router.post("/", empresaController.cadastrarEmpresa);

module.exports = router;