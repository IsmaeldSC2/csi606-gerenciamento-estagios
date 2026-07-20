const express = require("express");
const router = express.Router();

const vagaController = require(
    "../controllers/vagaController"
);

// Lista todas as vagas
router.get("/", vagaController.listarVagas);

// Exibe o formulário de cadastro
router.get("/nova", vagaController.exibirFormulario);

// Recebe os dados do formulário
router.post("/", vagaController.cadastrarVaga);

//Altera o status da vaga 
router.post("/:id/status", vagaController.alterarStatus);

// Exclui uma vaga
router.post("/:id/excluir", vagaController.excluirVaga);

module.exports = router;