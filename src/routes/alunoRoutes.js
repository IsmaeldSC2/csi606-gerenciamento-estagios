const express = require("express");
const router = express.Router();

const alunoController = require(
    "../controllers/alunoController"
);

// Lista todos os alunos
router.get("/", alunoController.listarAlunos);

// Exibe o formulário de cadastro
router.get("/novo", alunoController.exibirFormulario);

// Recebe os dados do formulário
router.post("/", alunoController.cadastrarAluno);

// Exclui um aluno
router.post("/:id/excluir", alunoController.excluirAluno);

module.exports = router;