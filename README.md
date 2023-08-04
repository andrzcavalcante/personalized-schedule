# SchedulesUp - Agenda de contatos

## Introdução

Neste repositório está toda estrutura da aplicação *SchedulesUp* do FrontEnd ao BackEnd. A proposta da aplicação é tornar mais fácil o armazenamento dos contatos, 
sempre presando os pilares da segurança da informação: confidencialidade, integridade e disponibilidade.
Abaixo estará toda organização e explicação do funcionamento da API(SchedulesUp) e detalhes de uso do FrontEnd. 

## Passos para rodar a aplicaçâo

#### BackEnd

- Crie o clone do repositório na sua máquina.
- No código, use o terminal para entrar na pasta do back:
   -  **cd back/**.
   -  Faça a instalação de todas as dependências:
        -  **npm install** ou **yarn install**.
        -  Configure o arquivo ***.env*** use o **env.exemplo** como base.
   - Após, use os seguintes comandos:
        - Transpilando o código para JavaScript: **npm run build** ou **yarn run**.
        - Executando as migrações a partir do arquivo transpilado: npm run typeorm migration:run -- -d dist/data-source.js .
        - **npm run start**


#### FrontEnd

- Crie o clone do repositório na sua máquina.
- No código, use o terminal para entrar na pasta do front:
   -  **cd front/**.
   -  Faça a instalação de todas as dependências:
        -  **npm install** ou **yarn install**
- Por fim, use o comando ***npm run dev*** ou ***yarn dev*** para startar a aplicação. 


## BackEnd

## Endpoints da aplicação

| Método | Endpoint    | Responsabilidade       |
| ------ | ----------- | ---------------------- |
| POST   | /users      | Criar os usuários       |
| GET    | /users      | Listar todos os usuários|
| PATCH  | /users/:id  | Atualizar usuário por id |
| DELETE | /users/:id  | Deletar usuários por id   |

| Método | Endpoint    | Responsabilidade       |
| ------ | ----------- | ---------------------- |
| POST   | /contacts      | Criar os contatos       |
| GET    | /contacts      | Listar todos os contatos|
| PATCH  | /contacts/:id  | Atualizar contato por id |
| DELETE | /contacts/:id  | Deletar contato por id   |


## Regras da aplicação

### GET /users

-   A rota **GET /users**, listar todos os dados do usuário logado.
-   Obs: Apenas o usuário dono da conta tem acesso a esses dados.

### Post /users 

-  A rota **Post /users**, cria um novo usuário.
-  Deve receber os seguintes dados de forma obrigatória:
    -  Nome completo, Email, Telefone e Senha.
-  A senha da usuário é "hashada" no momento da criação.
-  Obs: O email de cadastro é único, sendo assim, só podendo ser utilizado uma vez por conta. 

### Update /users/:userId 

-  A rota **Update /users/:userId**, atualiza todos os dados do usuário.
-  O usuário não pode alterar seu email.
-  Obs: Apenas o usuário dono da conta tem acesso a esses dados.


### Delete /users/:userId  

-  A rota **Delete /users/:userId**, deleta a conta do usuário.
-  Obs: Apenas o usuário dono da conta tem acesso a esses dados.

## Regras da aplicação

### GET /contacts

-   A rota **GET /contacts**, listar todos os dados dos contatos cadastrados.

### Post /contacts 

-  A rota **Post /users**, cria um novo contato.
-  Deve receber os seguintes dados de forma obrigatória:
    -  Nome completo, Email e Telefone.

### Update /contacts/:userId 

-  A rota **Update /contacts/:contactId**, atualiza todos os dados do contato.
-  Obs: Apenas o usuário dono da conta tem acesso a esses dados.


### Delete /contacts/:userId  

-  A rota **Delete /contacts/:contactId**, deleta o contato.
-  Obs: Apenas o usuário dono da conta tem acesso a esses dados.

