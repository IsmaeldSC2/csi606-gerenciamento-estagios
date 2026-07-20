# Sistema de Gerenciamento de Estágios

Trabalho desenvolvido para a disciplina **CSI606 – Sistemas Web I**, da **Universidade Federal de Ouro Preto (UFOP)**.

O sistema permite o gerenciamento de empresas, vagas de estágio, alunos e candidaturas, oferecendo uma interface simples para administrar todo o processo seletivo de estágios.

---

# Objetivo

Desenvolver uma aplicação web utilizando o padrão arquitetural **MVC**, permitindo o gerenciamento das principais entidades envolvidas em um processo de estágio.

O sistema foi construído buscando organização do código, facilidade de manutenção e uma interface intuitiva para o usuário.

---

# Tecnologias utilizadas

## Backend

- Node.js
- Express.js
- Prisma ORM
- SQLite

## Frontend

- HTML5
- CSS3
- EJS (Embedded JavaScript Templates)

---

# Arquitetura

O projeto foi desenvolvido utilizando o padrão **MVC (Model-View-Controller)**.

A estrutura do projeto está organizada da seguinte forma:

```
src/
│
├── controllers/
├── routes/
├── views/
├── public/
│
prisma/
```

Essa separação facilita a manutenção, reutilização de código e organização do sistema.

---

# Funcionalidades

## Empresas

- Cadastro de empresas
- Listagem de empresas
- Exclusão de empresas

---

## Vagas

- Cadastro de vagas
- Associação de vagas às empresas
- Alteração do status da vaga
- Listagem de vagas
- Exclusão de vagas

---

## Alunos

- Cadastro de alunos
- Listagem de alunos
- Exclusão de alunos

---

## Candidaturas

- Cadastro de candidaturas
- Associação entre alunos e vagas
- Alteração do status da candidatura
- Exclusão de candidaturas

---

# Banco de Dados

O banco de dados foi implementado utilizando **SQLite**, sendo manipulado através do **Prisma ORM**.

Entidades implementadas:

- Empresa
- Vaga
- Aluno
- Candidatura

Os relacionamentos entre as entidades permitem representar corretamente o fluxo de gerenciamento de estágios.

---

# Como executar o projeto

## Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/csi606-gerenciamento-estagios.git
```

## Instalar as dependências

```bash
npm install
```

## Criar o banco de dados

```bash
npx prisma migrate dev
```

## Executar o projeto

```bash
npm start
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

---

# Funcionalidades futuras

Como possíveis melhorias futuras, o sistema poderá receber novas funcionalidades, como:

- Autenticação de usuários;
- Controle de permissões;
- Upload de currículo;
- Pesquisa e filtros avançados;
- Dashboard com indicadores;
- Relatórios em PDF.

---
# Demonstração

## Página inicial

<img width="1907" height="965" alt="Captura de tela 2026-07-20 204137" src="https://github.com/user-attachments/assets/91915f1a-e8ba-4b8d-9e32-3c40e1e08370" />


## Empresas

<img width="1912" height="963" alt="Captura de tela 2026-07-20 204149" src="https://github.com/user-attachments/assets/682c0734-a9a8-4563-bb81-cb1068dbb5cd" />


## Vagas

<img width="1911" height="966" alt="Captura de tela 2026-07-20 204204" src="https://github.com/user-attachments/assets/10362be6-004c-4434-84b8-4d4d06e7e28b" />


## Alunos

<img width="1912" height="967" alt="Captura de tela 2026-07-20 204217" src="https://github.com/user-attachments/assets/c4065b16-358e-40e6-b509-76092ae321ae" />


## Candidaturas

<img width="1911" height="962" alt="Captura de tela 2026-07-20 204236" src="https://github.com/user-attachments/assets/4cdd8680-e30c-4b2e-9c3f-28b833dd1b16" />


# Autor

**Ismael dos Santos Costa**

Universidade Federal de Ouro Preto (UFOP)

Disciplina: CSI606 – Sistemas Web I

Professor: Fernando Bernardes de Oliveira
