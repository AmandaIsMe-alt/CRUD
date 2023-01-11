CRUD (TypeORM + PostgreSQL)

Serviço de back-end responsável por gerenciar um CRUD de usuário utilizando TypeORM.

Endpoints:

POST    /users         Criação de usuário

GET     /users         Lista todos os usuários

PATCH   /users/<id>    Atualiza os dados do usuário
  
DELETE	/users/<id>    Realiza um soft delete no usuário
  
POST    /login         Gera o token de autenticação
