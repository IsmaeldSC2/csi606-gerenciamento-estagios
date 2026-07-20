const express = require("express");
const path = require("path");

const vagaRoutes = require("./routes/vagaRoutes");
const empresaRoutes = require("./routes/empresaRoutes");

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Página inicial
app.get("/", (req, res) => {
    res.render("index");
});

// Rotas
app.use("/vagas", vagaRoutes);
app.use("/empresas", empresaRoutes);



// Rota para páginas inexistentes
app.use((req, res) => {
    res.status(404).send(`Página não encontrada: ${req.method} ${req.originalUrl}`);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});