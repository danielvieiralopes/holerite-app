# Holerite App

Este projeto faz parte do Programa de Extensão (PEX) da Faculdade Descomplica, com o objetivo de desenvolver uma aplicação web para gerenciamento de holerites de funcionários.

## 🧾 Objetivo

Desenvolver um sistema que permita:

- Carregar e processar arquivos PDF contendo holerites;
- Identificar e extrair dados dos funcionários a partir do conteúdo dos PDFs;
- Relacionar os holerites aos respectivos funcionários;
- Exibir as informações extraídas em uma interface amigável.

> A proposta é oferecer uma solução automatizada para organizar e gerenciar documentos de folha de pagamento para a empresa parceira do projeto de extensão.

## ⚙️ Tecnologias utilizadas

- **Frontend:** Angular 19 
- **Backend:** .NET 8.0 / C# 
- **Banco de Dados:** SQL Server
- **Outras ferramentas:**
  - Git e GitHub
  - Bibliotecas .NET para processamento de PDF

##  Funcionalidades Implementadas

 - Upload de arquivos PDF contendo holerites;
 - 
 - Extração de dados dos funcionários a partir dos PDFs;
 - 
 - Relacionamento dos holerites aos respectivos funcionários;
 - 
 - Exibição das informações extraídas em uma interface web;
 - 
 - Integração com backend para armazenamento e recuperação dos dados;
 - 
 - Implantação na infraestrutura de intranet da empresa.

> O backend será expandido no próximo ciclo do PEX para incluir funcionalidades adicionais.

## Próximos Passos
 - Implementar funcionalidade de "Esqueci a Senha", gerenciada exclusivamente por administradores;
 - 
 - Melhorar a segurança e autenticação dos usuários;
 - 
 - Otimizar a extração de dados dos PDFs para suportar diferentes formatos;
 - 
 - Adicionar testes automatizados para garantir a estabilidade do sistema;
 - 
 - Melhorar a documentação e o guia de instalação para facilitar a contribuição de outros desenvolvedores.

## 🧪 Como testar a aplicação 

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielvieiralopes/holerite-app.git
  ```
  ```bash
   git clone https://github.com/danielvieiralopes/holeriteAPI
  ```

  ### Rodando o Projeto

  Siga o passo a passo para executar a API e o frontend Angular:

  #### Pré-requisitos
  - .NET 8.0 SDK instalado.
  - Node.js (versão 14 ou superior) e Angular CLI instalados.
  - SQL Server configurado (se aplicável).

  #### API (.NET)
  1. Abra um terminal e navegue até a pasta raiz do projeto.
  2. Entre na pasta do backend (exemplo: `cd holerite-app/backend`).
  3. Restaure os pacotes:
    ```bash
    dotnet restore
    ```
  4. Compile o projeto:
    ```bash
    dotnet build
    ```
  5. Execute a aplicação:
    ```bash
    dotnet run
    ```
  6. A API ficará disponível em `https://localhost:5258` (ou conforme configurado).

  #### Frontend (Angular)
  1. Em outro terminal, navegue até o diretório do frontend (exemplo: `cd holerite-app/frontend`).
  2. Instale as dependências:
    ```bash
    npm install
    ```
  3. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
  4. A aplicação Angular estará acessível em `http://localhost:4200`.

  #### Observações
  - Certifique-se de que a API está ativa antes de iniciar o frontend para que as chamadas HTTP sejam bem-sucedidas.
  - Confirme as configurações de CORS e a URL da API no projeto Angular para garantir a comunicação correta.



👨‍💻 Autor
Desenvolvido por Daniel Vieira Lopes
Faculdade Descomplica – Ciência da Computação
Projeto PEX – 2025
