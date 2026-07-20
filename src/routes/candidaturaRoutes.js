const express = require("express");
const router = express.Router();

const candidaturaController = require(
    "../controllers/candidaturaController"
);

// Lista as candidaturas
router.get(
    "/",
    candidaturaController.listarCandidaturas
);

// Exibe o formulário
router.get(
    "/nova",
    candidaturaController.exibirFormulario
);

// Cadastra uma candidatura
router.post(
    "/",
    candidaturaController.cadastrarCandidatura
);

// Altera o status
router.post(
    "/:id/status",
    candidaturaController.alterarStatus
);

// Exclui uma candidatura
router.post(
    "/:id/excluir",
    candidaturaController.excluirCandidatura
);

module.exports = router;