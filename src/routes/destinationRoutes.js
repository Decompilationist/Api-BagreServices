const express = require('express');
const router = express.Router();

const destinationController = require('../controllers/destinationController');

// Rota para listar todos os destinos
router.get('/', destinationController.getAllDestinations);

// Rota para obter um destino pelo ID
router.get('/:id', destinationController.getDestinationById);

// Rota para criar um novo destino
router.post('/', destinationController.createDestination);

module.exports = router;
