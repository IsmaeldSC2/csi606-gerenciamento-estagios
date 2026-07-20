const express = require("express");
const router = express.Router();

const empresaController = require("../controllers/empresaController");

// Lista as empresas
router.get("/", empresaController.listarEmpresas);

// Exibe o formulário para cadastrar uma empresa
router.get("/nova", empresaController.exibirFormulario);

// Recebe os dados do formulário
router.post("/", empresaController.cadastrarEmpresa);

// Exclui uma empresa
router.post("/:id/excluir", empresaController.excluirEmpresa);

module.exports = router;