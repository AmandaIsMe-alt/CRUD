# CRUD PostgreSQL

Esta aplicação tem a função de desenvolver um CRUD de usuário, criando algumas regras de acesso apenas para usuários administradores.

 Tecnologias utilizadas:

 - Typescript
 - TypeORM
 - Express

 ## **Devs**

 > - [Amanda R. Costa](https://www.linkedin.com/in/amanda-fullstack/)

---

## Iniciando:

Para iniciar a aplicação basta seguir o scrip abaixo:

Após clonar o respositório, abra um terminal e digite o comando abaixo:
### `yarn` ou `yarn install`

Além disso, é preciso ter o PostgreSQL baixado, nele crie um banco de dados e crie um arquivo .env e o preencha de acordo com o exemplo.

<br>

## Modo de usar pelo insomnia:
---

## **Usuário**

## 1. Criar conta

- POST /users

Request:
Preencha as informações o mais correto possível, já que esse usuário teste provavelmente já existe e nção podem ser cadastrados usuários com o mesmo email.
```json
{
	"name": "teste",
	"email": "teste@teste.com",
	"password": "123456",
	"isAdm": true
	
}
```

Response:
```json
{
	"uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2021-11-18T01:23:52.910Z",
    "updatedOn": "2021-11-21T07:44:21.520Z",
    "name": "teste",
    "email": "teste@teste.com",
    "isAdm": true
}
```

---

## 2. Login

- POST /login
- A response dessa requisição é o token.

Request:

```json
{
  "email": "teste@teste.com",
  "password": "123456"
}
```
---

## 3. Listar usuário

- GET /users
- Auth: Bearer Token
- Corpo da requisição é vazio.
- É uma requisição para listar todos os usuários, a resposta será apenas o usuário cadastrado anteriormente.

---

## 4. Listar usuário específico

- GET /users/profile
- Corpo da requisição é vazio.
- Author: Bearer Token

---

## 5. Atualizar usuário

- PATCH /users/:id
- É possível atualizar tanto um quanto todos os dados de um usuário.
- Auth: Bearer Token
- O campo isAdm NÃO pode ser atualizado
- Apenas administradores podem atualizar qualquer usuário

Request:

```json
{
  "name": "TesteAtt"
}
```

Response:

```json
{
    "uuid": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2021-11-18T01:23:52.910Z",
    "updatedOn": "2021-11-21T07:44:21.520Z",
    "name": "testeAtt",
    "email": "teste@teste.com",
    "isAdm": true
}

```
---

## 6. Deletar usuário

- DELETE /users/:id
- Auth: Bearer Token
- Corpo da requisição é vazio.
- Para verificar se o usuário foi mesmo excluido basta tentar fazer login novamente, você receberá uma informação de erro.

---
<br>
