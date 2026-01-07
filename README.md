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



### 💻 Frontend (Hospedado na Vercel)
* **React + TypeScript**: Desenvolvimento de componentes reutilizáveis e tipagem estática para evitar erros em tempo de execução.
* **Axios & React Query**: Gerenciamento de estado assíncrono, cache de dados e sincronização automática com a API.
* **CSS Responsivo**: Layout dinâmico que se adapta de 1 a 3 colunas e interações avançadas de UI.

### ⚙️ Backend & Infraestrutura (Hospedado no Railway)
* **Java 17 & Spring Boot**: Core da API REST, utilizando Injeção de Dependência e Inversão de Controle.
* **Apache Maven**: Gerenciamento completo de dependências e ciclo de vida do build.
* **Flyway**: Controle de versão do banco de dados (Migrations), garantindo integridade no PostgreSQL.
* **PostgreSQL**: Banco de dados relacional robusto para persistência dos itens.

---

## 🧠 Aprendizados Chave & Insights Técnicos

Desenvolver este projeto proporcionou aprendizados práticos sobre o ecossistema Fullstack que foram fundamentais para minha formação:

### 1. O Poder da Automação com Maven
Dominar o **Maven** foi um divisor de águas. Entendi como o `pom.xml` atua como o cérebro do projeto, gerenciando o ciclo de vida da aplicação e garantindo que bibliotecas como o **Flyway** e o **Spring Data JPA** coexistissem sem conflitos de versão.

### 2. Sincronia entre Frontend e API (React Query)
A implementação do **React Query** ensinou-me a diferença entre "estado local" e "estado do servidor". Aprendi a lidar com:
* **Cache Inteligente**: Evitando requisições desnecessárias.
* **Mutations**: Sincronizando a interface instantaneamente após a exclusão ou adição de um item.

### 3. Deploy e Infraestrutura em Nuvem
Configurar o **Railway** e o **PostgreSQL** em nuvem mostrou-me a importância de separar o ambiente de desenvolvimento do de produção. O maior aprendizado aqui foi o uso de **Variáveis de Ambiente**, garantindo que as credenciais do banco nunca ficassem expostas no código-fonte.

---

## 🛠️ Desafios Superados durante o Desenvolvimento

| Desafio | Descrição da Solução |
| :--- | :--- |
| **CORS Policy** | Configuração de segurança no Spring Boot para permitir requisições seguras vindas da Vercel. |
| **Persistência de IDs** | Ajuste na entidade Java para lidar com a geração de IDs via `BIGSERIAL` no PostgreSQL. |
| **Portas Dinâmicas** | Adaptação do backend para ler a variável de ambiente `PORT` exigida pelo Railway. |
| **Layout Responsivo** | Criação de um Grid CSS que se adapta a diferentes telas e dispositivos. |

---

## ⚙️ Como Explorar o Código

Para quem deseja analisar a implementação técnica:

* **Backend**: Explore a pasta `src/main/java` para ver a organização das entidades, controllers e repositórios Spring Boot.
* **Frontend**: Veja os hooks customizados em `src/hooks` para entender a lógica de consumo de dados com Axios e React Query.
* **Banco de Dados**: Os scripts de migração do Flyway estão em `src/main/resources/db/migration`.

---

**Desenvolvido por Rafael Menezes de Santana como parte da jornada de aprendizado Fullstack e Backend.** 🚀
