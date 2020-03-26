const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* 

Métodos HTTP

GET: Buscar/Listar uma informação do backend
POST: Criar uma informação do backend
PUT: Alterar uam informação do backend
DELETE: Deletar uam informação do backend

Tipos de Parâmetro

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros/Paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para alterar ou criar recursos

SQL: MySQL,  SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc

*/

app.listen(3333);