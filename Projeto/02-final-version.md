# CSI606-2026-01 — Trabalho Final — Resultados

**Discente:** Ismael dos Santos Costa  
**Disciplina:** CSI606 — Sistemas Web I  
**Professor:** Fernando Bernardes de Oliveira  
**Instituição:** Universidade Federal de Ouro Preto — UFOP  

## Resumo

O presente trabalho consiste no desenvolvimento de um Sistema Web de Gerenciamento de Estágios, criado com o objetivo de organizar informações relacionadas a empresas, vagas de estágio, alunos e candidaturas.

O sistema permite cadastrar e consultar empresas, cadastrar vagas vinculadas a uma empresa, cadastrar alunos e registrar candidaturas para vagas disponíveis. Também é possível alterar o status de vagas e candidaturas, além de excluir registros.

A aplicação foi desenvolvida utilizando tecnologias de backend e frontend, seguindo uma organização baseada no padrão arquitetural MVC. O banco de dados foi implementado com SQLite e manipulado por meio do Prisma ORM.

## 1. Tecnologias utilizadas — Backend e Frontend

### Backend

- Node.js;
- Express.js;
- Prisma ORM;
- SQLite;
- JavaScript.

### Frontend

- HTML5;
- CSS3;
- EJS — Embedded JavaScript Templates.

### Organização do projeto

O projeto foi estruturado com base no padrão MVC, separando as responsabilidades entre:

- Models, representados pelo schema do Prisma;
- Controllers, responsáveis pelas regras e operações do sistema;
- Routes, responsáveis pelo direcionamento das requisições;
- Views, responsáveis pela interface apresentada ao usuário;
- Banco de dados SQLite.

## 2. Funcionalidades implementadas

### Gerenciamento de empresas

- Cadastro de empresas;
- Listagem das empresas cadastradas;
- Exclusão de empresas;
- Associação entre empresas e vagas.

### Gerenciamento de vagas

- Cadastro de vagas;
- Associação de cada vaga a uma empresa;
- Listagem de vagas;
- Alteração do status da vaga;
- Status de vaga aberta, pausada ou encerrada;
- Exclusão de vagas;
- Exibição apenas de vagas abertas no cadastro de candidaturas.

### Gerenciamento de alunos

- Cadastro de alunos;
- Listagem dos alunos cadastrados;
- Exclusão de alunos.

### Gerenciamento de candidaturas

- Cadastro de candidaturas;
- Associação entre aluno e vaga;
- Visualização da empresa responsável pela vaga;
- Listagem das candidaturas;
- Alteração do status da candidatura;
- Status de candidatura pendente, aprovada ou rejeitada;
- Exclusão de candidaturas.

## 3. Funcionalidades previstas e não implementadas

Algumas funcionalidades inicialmente consideradas não foram implementadas dentro do prazo disponível para o desenvolvimento do trabalho:

- Autenticação de usuários;
- Controle de acesso por perfil de aluno e administrador;
- Upload de currículo;
- Recuperação de senha;
- Envio de notificações;
- Geração de relatórios;
- Dashboard com indicadores;
- Filtros avançados de pesquisa.

Essas funcionalidades podem ser adicionadas em versões futuras do sistema.

## 4. Outras funcionalidades implementadas

Além das operações básicas de cadastro, listagem e exclusão, foram implementadas funcionalidades complementares:

- Controle do status das vagas;
- Controle do status das candidaturas;
- Relacionamento entre empresas e vagas;
- Relacionamento entre alunos e candidaturas;
- Relacionamento entre vagas e candidaturas;
- Filtragem de vagas disponíveis para candidatura;
- Interface responsiva;
- Página inicial com acesso aos principais módulos;
- Organização visual das tabelas, formulários e botões;
- Validação de campos obrigatórios nos formulários.

## 5. Principais desafios e dificuldades

Um dos principais desafios do desenvolvimento foi compreender e aplicar corretamente o padrão MVC, separando as responsabilidades entre rotas, controllers, views e banco de dados.

Também houve dificuldade na configuração inicial do Prisma ORM e na criação dos relacionamentos entre as entidades Empresa, Vaga, Aluno e Candidatura.

Outro desafio foi implementar o fluxo de candidaturas de forma consistente, garantindo que apenas vagas com status aberta fossem apresentadas no formulário de candidatura.

A criação das interfaces também exigiu ajustes de HTML, CSS e EJS para manter os formulários, tabelas, botões e páginas organizados e funcionais.

Durante o desenvolvimento, foram realizados testes manuais para verificar o cadastro, a listagem, a alteração de status e a exclusão dos registros.

## 6. Instruções para instalação e execução

### Requisitos

Para executar o sistema, é necessário possuir:

- Node.js instalado;
- npm instalado;
- Git instalado, caso o projeto seja clonado do GitHub.

### Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/csi606-gerenciamento-estagios.git
```

### Acessar a pasta do projeto

```bash
cd csi606-gerenciamento-estagios
```

### Instalar as dependências

```bash
npm install
```

### Configurar o banco de dados

Execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

Caso seja necessário gerar novamente o cliente do Prisma:

```bash
npx prisma generate
```

### Executar a aplicação

```bash
npm start
```

Caso o projeto utilize um script de desenvolvimento, também poderá ser executado com:

```bash
npm run dev
```

Após iniciar o servidor, acesse no navegador:

```text
http://localhost:3000
```

## 7. Referências

NODE.JS. **Node.js Documentation**. Disponível em: <https://nodejs.org/docs/latest/api/>. Acesso em: 20 jul. 2026.

EXPRESS.JS. **Express — Node.js web application framework**. Disponível em: <https://expressjs.com/>. Acesso em: 20 jul. 2026.

PRISMA. **Prisma Documentation**. Disponível em: <https://www.prisma.io/docs>. Acesso em: 20 jul. 2026.

SQLITE. **SQLite Documentation**. Disponível em: <https://www.sqlite.org/docs.html>. Acesso em: 20 jul. 2026.

EJS. **EJS — Embedded JavaScript Templates**. Disponível em: <https://ejs.co/>. Acesso em: 20 jul. 2026.

MDN WEB DOCS. **HTML: HyperText Markup Language**. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/HTML>. Acesso em: 20 jul. 2026.

MDN WEB DOCS. **CSS: Cascading Style Sheets**. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/CSS>. Acesso em: 20 jul. 2026.