# 🍽️ Cardápio Fullstack - Sistema de Gerenciamento Digital

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Apache_Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)](https://maven.apache.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Este projeto é uma aplicação **Fullstack** completa que simula um cardápio digital. Ele permite a visualização dinâmica de itens, adição de novos produtos e remoção em tempo real, integrando uma interface moderna a um ecossistema robusto de backend.

---

## 🏗️ Arquitetura e Tecnologias

O projeto foi construído separando as responsabilidades em camadas, garantindo escalabilidade e facilidade de manutenção.



### 💻 Frontend (Vercel)
* **React + TypeScript**: Desenvolvimento de componentes reutilizáveis e tipagem estática para evitar erros em tempo de execução.
* **Vite**: Ferramenta de build que proporcionou um ambiente de desenvolvimento ágil.
* **React Query (TanStack Query)**: Gerenciamento de estado assíncrono, cache de dados e sincronização automática com a API.
* **CSS Dinâmico**: Implementação de Grid Responsivo e interações avançadas de UI (como botões que surgem no hover).

### ⚙️ Backend & Build (Railway)
* **Java 17 & Spring Boot**: Base da API REST, utilizando Injeção de Dependência e Inversão de Controle.
* **Apache Maven**: O coração do gerenciamento do projeto:
    * **Gestão de Dependências**: Automatiza o download e versionamento de bibliotecas como Spring Data e Flyway.
    * **Ciclo de Vida (Build)**: Padroniza os processos de compilação e empacotamento (`.jar`) para produção.
* **Spring Data JPA**: Abstração de banco de dados para operações CRUD simplificadas.
* **Flyway**: Controle de versão do banco de dados (Migrations), garantindo que o esquema do PostgreSQL esteja sempre atualizado.
* **PostgreSQL**: Banco de dados relacional robusto hospedado em nuvem.

---

## 🛠️ Desafios Técnicos e Soluções

Abaixo, os principais obstáculos superados durante os estudos de integração fullstack e backend:

| Desafio | Descrição da Solução |
| :--- | :--- |
| **CORS Policy** | Configuração de segurança no Spring Boot para permitir requisições seguras vindas do domínio da Vercel. |
| **Persistência de IDs** | Ajuste na entidade Java para lidar com a geração de IDs via `BIGSERIAL` no PostgreSQL. |
| **Portas Dinâmicas** | Adaptação do backend para ler a variável de ambiente `PORT` exigida pelo Railway. |
| **Variáveis de Ambiente** | Proteção de dados sensíveis (URLs de API e DB) através de arquivos `.env` e segredos na nuvem. |
| **Layout Responsivo** | Criação de um Grid CSS que se adapta de 1 a 3 colunas dependendo do dispositivo. |

---

## ⚙️ Instalação e Execução

### 1. Backend (Java/Maven)
Navegue até o diretório do servidor e configure seu `application.properties`:
```properties
spring.datasource.url=${SPRING_DATASOURCE_URL}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}
