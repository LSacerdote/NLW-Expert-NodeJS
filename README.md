# 📊 NLW Expert - Sistema de Votação em Tempo Real (Trilha de NodeJS)

## 🎯 Objetivos do Projeto

O principal objetivo deste projeto, desenvolvido durante o evento **NLW Expert da Rocketseat**, foi construir um sistema de votação em tempo real. O foco foi aplicar conceitos avançados de backend com Node.js para criar uma aplicação robusta, escalável e de alta performance.

- **Desenvolver** uma API RESTful para gerenciar enquetes e votos.
- **Implementar** comunicação em tempo real com WebSockets para notificar os clientes sobre novos votos instantaneamente.
- **Estruturar** a aplicação utilizando tecnologias modernas e padrões de mercado como Pub/Sub.
- **Utilizar** Docker para criar um ambiente de desenvolvimento padronizado e isolado.

## ⚡ Funcionalidades Implementadas

✅ **Criação de Enquetes:**
- Endpoint para cadastrar novas enquetes com múltiplas opções.
- Validação no servidor para garantir que os dados da enquete (título e opções) sejam válidos.

✅ **Votação em Enquetes:**
- Endpoint para que os usuários possam votar em uma das opções de uma enquete específica.
- O sistema impede votos duplicados do mesmo usuário na mesma enquete (controlado por sessão ou cookies).

✅ **Contabilização de Votos em Tempo Real:**
- Utilização de WebSockets para notificar todos os clientes conectados sobre cada novo voto.
- Os resultados da votação são atualizados na interface do usuário instantaneamente, sem a necessidade de recarregar a página.

✅ **Ranking de Opções:**
- O sistema organiza e exibe os resultados em formato de ranking, mostrando a contagem de votos para cada opção.

## 🏗️ Arquitetura e Estrutura do Projeto

O projeto foi arquitetado para ser desacoplado e escalável, separando responsabilidades e utilizando um padrão de mensageria para a comunicação interna.

- **`http`**: Camada responsável por receber as requisições HTTP, contendo os controladores e as rotas da aplicação.
- **`utils`**: Funções e lógicas auxiliares, como o contador de votos.
- **`db`**: Configuração e schemas do banco de dados (neste caso, Prisma com PostgreSQL).
- **Padrão Pub/Sub (Publish/Subscribe)**:
    - O sistema utiliza **Redis** como um canal de mensagens.
    - Quando um voto é computado, a aplicação "publica" uma mensagem neste canal.
    - Um serviço "inscrito" (subscriber) no mesmo canal recebe essa mensagem e a retransmite via WebSocket para todos os clientes conectados, garantindo a atualização em tempo real.

## 🔧 Tecnologias Utilizadas

| Tecnologia | Propósito |
| :--- | :--- |
| **Node.js** | Ambiente de execução para o backend em JavaScript. |
| **Fastify** | Framework web focado em alta performance e baixo overhead. |
| **TypeScript** | Superset do JavaScript que adiciona tipagem estática ao código. |
| **Prisma** | ORM (Object-Relational Mapping) para interagir com o banco de dados. |
| **PostgreSQL** | Banco de dados relacional para persistir os dados das enquetes e votos. |
| **Redis** | Banco de dados em memória, utilizado para implementar o padrão Pub/Sub. |
| **WebSockets** | Protocolo que permite a comunicação bidirecional e em tempo real. |
| **Docker** | Plataforma para criar, implantar e executar aplicações em contêineres. |
| **Zod** | Biblioteca para validação de schemas e tipos de dados. |

## 🚀 Como Executar o Projeto Localmente

**Pré-requisitos**

- **Node.js** - Versão 18 ou superior.
- **Docker** e **Docker Compose** instalados e em execução.
- Um gerenciador de pacotes como **npm** ou **yarn**.

**Instalação e Execução**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LSacerdote/NLW-Expert-NodeJS.git]
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd nome-do-projeto
    ```

3.  **Inicie os contêineres:**
    - O comando abaixo irá subir os serviços do PostgreSQL e Redis definidos no arquivo `docker-compose.yml`.
    ```bash
    docker-compose up -d
    ```

4.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```

5.  **Execute as migrations do banco de dados:**
    - Este comando criará as tabelas no PostgreSQL com base no schema do Prisma.
    ```bash
    npx prisma migrate dev
    ```

6.  **Inicie a aplicação:**
    ```bash
    npm run dev
    ```

7.  **Acesse a Aplicação:**
    - O servidor estará rodando em `http://localhost:3333`.

## 👥 Contribuidor

Este projeto foi desenvolvido seguindo as aulas da **Rocketseat**.

- **Evento**: NLW Expert
- **Trilha**: NodeJS
- **Instrutor**: [Diego Fernandes](https://github.com/diego3g)

## 📄 Licença

Este projeto foi desenvolvido para fins de aprendizado durante o evento NLW da **Rocketseat**. © 2024 Rocketseat. Todos os direitos reservados.
