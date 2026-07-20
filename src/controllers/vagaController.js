const prisma = require("../config/prisma");

// Lista todas as vagas com os dados da empresa
exports.listarVagas = async (req, res) => {
    try {
        const vagas = await prisma.vaga.findMany({
            include: {
                empresa: true
            },
            orderBy: {
                id: "desc"
            }
        });

        res.render("vagas", {
            vagas
        });
    } catch (erro) {
        console.error("Erro ao carregar vagas:", erro);

        res.status(500).send(
            "Erro ao carregar as vagas."
        );
    }
};

// Exibe o formulário de cadastro de vaga
exports.exibirFormulario = async (req, res) => {
    try {
        const empresas = await prisma.empresa.findMany({
            orderBy: {
                nome: "asc"
            }
        });

        res.render("vaga-form", {
            empresas
        });
    } catch (erro) {
        console.error(
            "Erro ao carregar formulário de vaga:",
            erro
        );

        res.status(500).send(
            "Erro ao carregar o formulário."
        );
    }
};

// Cadastra uma nova vaga
exports.cadastrarVaga = async (req, res) => {
    try {
        const {
            titulo,
            descricao,
            area,
            local,
            bolsa,
            requisitos,
            status,
            empresaId
        } = req.body;

        if (
            !titulo ||
            !descricao ||
            !area ||
            !local ||
            !empresaId
        ) {
            return res.status(400).send(
                "Título, descrição, área, local e empresa são obrigatórios."
            );
        }

        const empresaIdNumero = Number(empresaId);

        if (!Number.isInteger(empresaIdNumero)) {
            return res.status(400).send(
                "Empresa inválida."
            );
        }

        const empresaExiste = await prisma.empresa.findUnique({
            where: {
                id: empresaIdNumero
            }
        });

        if (!empresaExiste) {
            return res.status(404).send(
                "A empresa selecionada não foi encontrada."
            );
        }

        let valorBolsa = null;

        if (bolsa && bolsa.trim() !== "") {
            valorBolsa = Number(
                bolsa.replace(",", ".")
            );

            if (Number.isNaN(valorBolsa)) {
                return res.status(400).send(
                    "O valor da bolsa é inválido."
                );
            }
        }

        await prisma.vaga.create({
            data: {
                titulo: titulo.trim(),
                descricao: descricao.trim(),
                area: area.trim(),
                local: local.trim(),
                bolsa: valorBolsa,
                requisitos:
                    requisitos && requisitos.trim() !== ""
                        ? requisitos.trim()
                        : null,
                status:
                    status && status.trim() !== ""
                        ? status
                        : "ABERTA",
                empresaId: empresaIdNumero
            }
        });

        res.redirect("/vagas");
    } catch (erro) {
        console.error("Erro ao cadastrar vaga:", erro);

        res.status(500).send(
            "Não foi possível cadastrar a vaga."
        );
    }
};

// Exclui uma vaga
exports.excluirVaga = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).send(
                "ID da vaga inválido."
            );
        }

        await prisma.vaga.delete({
            where: {
                id
            }
        });

        res.redirect("/vagas");
    } catch (erro) {
        console.error("Erro ao excluir vaga:", erro);

        res.status(500).send(
            "Não foi possível excluir a vaga."
        );
    }
};
// Altera o status da vaga
exports.alterarStatus = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { status } = req.body;

        const statusPermitidos = [
            "ABERTA",
            "PAUSADA",
            "ENCERRADA"
        ];

        if (!statusPermitidos.includes(status)) {
            return res.status(400).send("Status inválido.");
        }

        await prisma.vaga.update({
            where: {
                id
            },
            data: {
                status
            }
        });

        res.redirect("/vagas");

    } catch (erro) {
        console.error(erro);
        res.status(500).send("Erro ao atualizar o status.");
    }
};