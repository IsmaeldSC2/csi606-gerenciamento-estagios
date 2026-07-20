
const prisma = require("../config/prisma");

// Lista todas as empresas cadastradas
exports.listarEmpresas = async (req, res) => {
    try {
        const empresas = await prisma.empresa.findMany({
            orderBy: {
                id: "desc"
            }
        });

        res.render("empresas", {
            empresas
        });
    } catch (erro) {
        console.error("Erro ao carregar empresas:", erro);
        res.status(500).send("Erro ao carregar empresas.");
    }
};

// Exibe o formulário de cadastro
exports.exibirFormulario = (req, res) => {
    res.render("empresa-form");
};

// Cadastra uma nova empresa
exports.cadastrarEmpresa = async (req, res) => {
    try {
        const { nome, email, setor, telefone } = req.body;

        if (!nome || !email) {
            return res.status(400).send(
                "O nome e o e-mail da empresa são obrigatórios."
            );
        }

        await prisma.empresa.create({
            data: {
                nome: nome.trim(),
                email: email.trim(),
                setor: setor ? setor.trim() : null,
                telefone: telefone ? telefone.trim() : null
            }
        });

        res.redirect("/empresas");
    } catch (erro) {
        console.error("Erro ao cadastrar empresa:", erro);

        res.status(500).send(
            "Não foi possível cadastrar a empresa."
        );
    }
};

// Exclui uma empresa
exports.excluirEmpresa = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).send("ID da empresa inválido.");
        }

        await prisma.empresa.delete({
            where: {
                id
            }
        });

        res.redirect("/empresas");
    } catch (erro) {
        console.error("Erro ao excluir empresa:", erro);

        res.status(500).send(
            "Não foi possível excluir a empresa. Ela pode possuir vagas vinculadas."
        );
    }
};