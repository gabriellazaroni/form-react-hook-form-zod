# SignUp Page

Este projeto é uma página de cadastro. Usei React, `react-hook-form` para gerenciar o formulário, além de `zod` para validação de dados. O backend simulado é fornecido pelo `json-server`.

## Tecnologias Utilizadas

- React
- react-hook-form
- zod
- json-server
- styled-components
- react-modal
- axios

## Estrutura do Projeto

- `SignUpPage`: Componente principal que contém o formulário de cadastro.
- `CustomInput`: Componente de input personalizado usado no formulário.
- `CustomModal`: Componente de modal personalizado.
- `CustomToast`: Componente de notificação para exibir mensagens de erro ou sucesso.

## Funcionalidades

2. **Envio de Dados**:

   - Se os dados forem válidos, uma requisição é feita para criar o usuário no `json-server`.
   - Se o e-mail já estiver em uso, uma mensagem de erro é exibida.
   - Se o cadastro for bem-sucedido, um modal de sucesso é exibido.

## Como Executar o Projeto

- npx json-server server.json
- npm run dev

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado
