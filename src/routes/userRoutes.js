const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/register', userController.createUser);

// Rota para autenticar um usuário
router.post('/login', userController.authenticateUser);

module.exports = router;
