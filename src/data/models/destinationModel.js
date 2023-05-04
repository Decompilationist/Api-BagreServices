const Destination = require('../models/destination');

// Controlador para listar todos os destinos
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter destinos' });
  }
};

// Controlador para obter um destino pelo ID
exports.getDestinationById = async (req, res) => {
  try {
    const { id } = req.params;
    const destination = await Destination.findById(id);
    if (!destination) {
      return res.status(404).json({ error: 'Destino não encontrado' });
    }
    res.json(destination);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter destino' });
  }
};

// Controlador para criar um novo destino
exports.createDestination = async (req, res) => {
  try {
    const { name, price, transportation, photos, description } = req.body;

    const newDestination = new Destination({
      name,
      price,
      transportation,
      photos,
      description,
    });

    const savedDestination = await newDestination.save();
    res.status(201).json(savedDestination);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar destino' });
  }
};
