const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json());
app.use(routes)



app.listen(3333)










// comments
//
//
// Métodos HTTP:
// GET: Buscar uma informação no backend
// POST: Criar uma informação no backend
// PUT: Alterar uma informação no backend
// DELETE: Deletar uma informação no backend

//Tipos de parametros
//
//Query params: parametros nomeados enviados na rota após "?" (filtros, paginação)
//Route params: parametros utilizados para identificar recursos
//Request body: corpo da requisição, usado para criar ou alterar recursos


//Bando de Dados

//SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
//NoSQL: MongoDB, CouchDB, etc

//driver: select * from users
//query Builder: table('usuarios').select('*').where()