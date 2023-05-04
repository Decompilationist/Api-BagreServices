// users.js

const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar se o usuário já existe no banco de dados
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Usuário já existe' });
    }

    // Criptografar a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Salvar o usuário no banco de dados
    await newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});

// Rota para fazer login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar se a senha está correta
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Autenticação bem-sucedida, retornar uma mensagem ou token de autenticação
    res.json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

module.exports = router;
