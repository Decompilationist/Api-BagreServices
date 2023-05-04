require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookiepParser = require('cookie-parser');
const cors = require('cors');
const destinationsRouter = require('./destinations');
const usersRouter = require('./users');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Conexão com o banco de dados
db.connect();

// Rotas para os destinos
app.use('/api/destinations', destinationsRouter);

// Rotas para os usuários
app.use('/api/users', usersRouter);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



const { env: { PORT, MONGO_URL: url }, argv: [, , port = PORT || 3001], } = process;
app = express()