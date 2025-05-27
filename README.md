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

- **Frontend:** Angular 19 (em desenvolvimento)
- **Backend:** .NET 6 / C# (em desenvolvimento) 
  - Iniciado como aplicação console para extração e separação de holerites
  - Em transição para API REST
- **Outras ferramentas:**
  - Git e GitHub
  - Bibliotecas .NET para processamento de PDF

## 📦 Estrutura atual do projeto

### Frontend

O frontend está sendo desenvolvido como um protótipo funcional e utiliza **dados mockados** para simular o comportamento da aplicação.

- [x] Interface de carregamento de holerites
- [x] Visualização básica dos dados extraídos
- [ ] Integração com o backend (em andamento)

### Backend

O backend já é capaz de:

- [x] Extrair nomes dos funcionários a partir de arquivos PDF
- [x] Separar holerites individualmente com base no nome
- [x] Relacionar holerites aos respectivos funcionários
- [x] Armazenar dados em banco de dados

> O backend será expandido no próximo ciclo do PEX para incluir funcionalidades adicionais.

## 🧪 Como testar o protótipo

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielvieiralopes/holerite-app.git
Acesse a pasta do projeto e abra o index.html (ou a aplicação Angular, se já configurada).

Os dados exibidos atualmente são mockados apenas para fins de demonstração visual.

🚧 Próximos passos
Finalizar a API REST com .NET para servir os dados extraídos

Conectar o frontend à API via HTTP

Implementar:

Autenticação de usuário

Gerenciamento de perfis

Painel de administração

Geração de relatórios

📌 Observações
Este projeto foi idealizado e está sendo desenvolvido no contexto acadêmico e prático do Programa de Extensão (PEX) da Faculdade Descomplica.

A proposta é aplicar conceitos reais de desenvolvimento web, boas práticas de engenharia de software e colaboração com empresas reais.

👨‍💻 Autor
Desenvolvido por Daniel Vieira Lopes
Faculdade Descomplica – Ciência da Computação
Projeto PEX – 2025
