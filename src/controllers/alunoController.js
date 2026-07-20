const prisma = require("../config/prisma");

// Lista todos os alunos
exports.listarAlunos = async (req, res) => {
    try {
        const alunos = await prisma.aluno.findMany({
            orderBy: {
                id: "desc"
            }
        });

        res.render("alunos", {
            alunos
        });
    } catch (erro) {
        console.error("Erro ao carregar alunos:", erro);

        res.status(500).send(
            "Erro ao carregar os alunos."
        );
    }
};

// Exibe o formulário de cadastro
exports.exibirFormulario = (req, res) => {
    res.render("aluno-form");
};

// Cadastra um novo aluno
exports.cadastrarAluno = async (req, res) => {
    try {
        const {
            nome,
            email,
            curso
        } = req.body;

        if (!nome || !email || !curso) {
            return res.status(400).send(
                "Nome, e-mail e curso são obrigatórios."
            );
        }

        await prisma.aluno.create({
            data: {
                nome: nome.trim(),
                email: email.trim(),
                curso: curso.trim()
            }
        });

        res.redirect("/alunos");
    } catch (erro) {
        console.error("Erro ao cadastrar aluno:", erro);

        if (erro.code === "P2002") {
            return res.status(400).send(
                "Já existe um aluno cadastrado com esse e-mail."
            );
        }

        res.status(500).send(
            "Não foi possível cadastrar o aluno."
        );
    }
};

// Exclui um aluno
exports.excluirAluno = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).send(
                "ID do aluno inválido."
            );
        }

        await prisma.aluno.delete({
            where: {
                id
            }
        });

        res.redirect("/alunos");
    } catch (erro) {
        console.error("Erro ao excluir aluno:", erro);

        res.status(500).send(
            "Não foi possível excluir o aluno."
        );
    }
};