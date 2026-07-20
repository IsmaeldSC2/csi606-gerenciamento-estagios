const prisma = require("../config/prisma");

// Lista todas as candidaturas
exports.listarCandidaturas = async (req, res) => {
    try {
        const candidaturas = await prisma.candidatura.findMany({
            include: {
                aluno: true,
                vaga: {
                    include: {
                        empresa: true
                    }
                }
            },
            orderBy: {
                id: "desc"
            }
        });

        res.render("candidaturas", {
            candidaturas
        });
    } catch (erro) {
        console.error("Erro ao carregar candidaturas:", erro);

        res.status(500).send(
            "Não foi possível carregar as candidaturas."
        );
    }
};

// Exibe o formulário de candidatura
exports.exibirFormulario = async (req, res) => {
    try {
        const alunos = await prisma.aluno.findMany({
            orderBy: {
                nome: "asc"
            }
        });

        const vagas = await prisma.vaga.findMany({
            where: {
                status: "ABERTA"
            },
            include: {
                empresa: true
            },
            orderBy: {
                titulo: "asc"
            }
        });

        res.render("candidatura-form", {
            alunos,
            vagas
        });
    } catch (erro) {
        console.error(
            "Erro ao abrir formulário de candidatura:",
            erro
        );

        res.status(500).send(
            "Não foi possível abrir o formulário."
        );
    }
};

// Cadastra uma candidatura
exports.cadastrarCandidatura = async (req, res) => {
    try {
        const alunoId = Number(req.body.alunoId);
        const vagaId = Number(req.body.vagaId);

        if (
            !Number.isInteger(alunoId) ||
            !Number.isInteger(vagaId)
        ) {
            return res.status(400).send(
                "Aluno ou vaga inválidos."
            );
        }

        const aluno = await prisma.aluno.findUnique({
            where: {
                id: alunoId
            }
        });

        if (!aluno) {
            return res.status(404).send(
                "Aluno não encontrado."
            );
        }

        const vaga = await prisma.vaga.findUnique({
            where: {
                id: vagaId
            }
        });

        if (!vaga) {
            return res.status(404).send(
                "Vaga não encontrada."
            );
        }

        if (vaga.status !== "ABERTA") {
            return res.status(400).send(
                "Essa vaga não está aberta para candidaturas."
            );
        }

        const candidaturaExistente =
            await prisma.candidatura.findFirst({
                where: {
                    alunoId,
                    vagaId
                }
            });

        if (candidaturaExistente) {
            return res.status(400).send(
                "Este aluno já se candidatou a essa vaga."
            );
        }

        await prisma.candidatura.create({
            data: {
                alunoId,
                vagaId,
                status: "PENDENTE"
            }
        });

        res.redirect("/candidaturas");
    } catch (erro) {
        console.error(
            "Erro ao cadastrar candidatura:",
            erro
        );

        if (erro.code === "P2002") {
            return res.status(400).send(
                "Este aluno já se candidatou a essa vaga."
            );
        }

        res.status(500).send(
            "Não foi possível cadastrar a candidatura."
        );
    }
};

// Altera o status da candidatura
exports.alterarStatus = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;

        const statusPermitidos = [
            "PENDENTE",
            "APROVADA",
            "REJEITADA"
        ];

        if (!Number.isInteger(id)) {
            return res.status(400).send(
                "ID da candidatura inválido."
            );
        }

        if (!statusPermitidos.includes(status)) {
            return res.status(400).send(
                "Status da candidatura inválido."
            );
        }

        await prisma.candidatura.update({
            where: {
                id
            },
            data: {
                status
            }
        });

        res.redirect("/candidaturas");
    } catch (erro) {
        console.error(
            "Erro ao alterar status da candidatura:",
            erro
        );

        res.status(500).send(
            "Não foi possível alterar o status."
        );
    }
};

// Exclui uma candidatura
exports.excluirCandidatura = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).send(
                "ID da candidatura inválido."
            );
        }

        await prisma.candidatura.delete({
            where: {
                id
            }
        });

        res.redirect("/candidaturas");
    } catch (erro) {
        console.error(
            "Erro ao excluir candidatura:",
            erro
        );

        res.status(500).send(
            "Não foi possível excluir a candidatura."
        );
    }
};