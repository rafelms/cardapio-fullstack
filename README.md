# 🍽️ Cardápio Fullstack

Projeto de um sistema de cardápio digital completo, permitindo a visualização, adição e remoção de itens em tempo real. Desenvolvido para colocar em prática conceitos de integração Fullstack, persistência de dados e deploy em nuvem.

## 🚀 Tecnologias Utilizadas

### Frontend
* **React + TypeScript**: Construção da interface.
* **Vite**: Ferramenta de build e desenvolvimento.
* **Axios & React Query**: Gerenciamento de requisições HTTP e estado assíncrono.
* **Vercel**: Hospedagem do frontend.

### Backend
* **Java + Spring Boot**: Estrutura robusta para a API.
* **Spring Data JPA**: Abstração da camada de persistência.
* **Flyway**: Gerenciamento e histórico de migrações de banco de dados.
* **Railway**: Hospedagem do backend e banco de dados.

### Banco de Dados
* **PostgreSQL**: Banco de dados relacional para armazenamento dos itens do cardápio.

## 🛠️ Desafios Superados durante o Desenvolvimento

Durante a jornada de deploy, enfrentamos e resolvemos os seguintes pontos:
1. **Ajuste de Tipos de Dados**: Correção da inconsistência entre o ID na entidade Java (`Long`) e o tipo no PostgreSQL (`bigint` via `BIGSERIAL`).
2. **Configuração de Porta Dinâmica**: Implementação da variável `PORT` no backend para compatibilidade com o ambiente de produção do Railway.
3. **CORS Policy**: Configuração de permissões no Spring Boot para permitir que o domínio da Vercel consumisse a API com segurança.
4. **Variáveis de Ambiente**: Implementação de segurança via `.env` no frontend para esconder a URL da API e garantir que o `.gitignore` proteja dados sensíveis.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
* Java 17+
* Node.js & NPM
* Banco PostgreSQL

### Configuração do Backend
No arquivo `src/main/resources/application.properties`, configure as credenciais do seu banco local ou de produção:
```properties
spring.datasource.url=${SPRING_DATASOURCE_URL}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
