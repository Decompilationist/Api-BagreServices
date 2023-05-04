const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');

// Conexão com o banco de dados
mongoose.connect(config.mongodb.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });

// Configurações do Express
app.use(express.json());

// Rotas
const destinationRoutes = require('./routes/destinationRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/destinations', destinationRoutes);
app.use('/api/users', userRoutes);

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
