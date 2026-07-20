const prisma = require("../config/prisma");

exports.listarEmpresas = async (req, res) => {
    try {
        const empresas = await prisma.empresa.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        res.render("empresas", {
            empresas
        });
    } catch (erro) {
        console.error("Erro ao listar empresas:", erro);

        res.status(500).send("Erro ao carregar as empresas.");
    }
};

exports.exibirFormulario = (req, res) => {
    res.render("empresa-form");
};

exports.cadastrarEmpresa = async (req, res) => {
    try {
        const { nome, email, setor, telefone } = req.body;

        await prisma.empresa.create({
            data: {
                nome,
                email,
                setor: setor || null,
                telefone: telefone || null
            }
        });

        res.redirect("/empresas");
    } catch (erro) {
        console.error("Erro ao cadastrar empresa:", erro);

        res.status(500).send(
            "Não foi possível cadastrar a empresa. Verifique se o e-mail já foi utilizado."
        );
    }
};