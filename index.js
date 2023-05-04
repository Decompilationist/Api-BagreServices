const express = require('express');
const package = require('./package.json');
const routes = require('./routes');
const mongoose = require('mongoose');
const config = require('./config');
const server = require('./server');

// Conexão com o banco de dados
mongoose.connect(config.mongodb.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
    // Iniciar o servidor
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`Servidor iniciado na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });
