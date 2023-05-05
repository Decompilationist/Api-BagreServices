const express = require('express');
const { auth } = require('../../controllers/auth');
const { Services } = require('../../data/models');
const router = express.Router();

//buscar todos os serviços
router.get('/services', auth, async (req, res, next) => {
    try {
        const services = await Services.find().select('-__v');
        return res.json(services);
    } catch (error) {
        next(error)
    }
})

//buscar serviços por nome
router.get('/services/name/:name', auth, async (req, res, next) => {
    const { name } = req.params;

    try {
        const servicesFound = await Services.find({ name: { $regex: new RegExp(name, "i") } }).lean().select('-__v');

        if (servicesFound.length === 0) {
            return res.status(404).json(["Não há serviços com o nome informado."]);
        }

        return res.json(servicesFound);
    } catch (error) {
        next(error);
    }
});

// buscar por código 
router.get('/services/code/:code', auth, async (req, res, next) => {
    const { code } = req.params;

    try {
        const serviceFound = await Services.findOne({ code: code }).lean().select('-__v');

        if (!serviceFound) {
            return res.status(404).json(["Não há serviço com o código informado."]);
        }

        return res.json(serviceFound);
    } catch (error) {
        next(error);
    }
});

// buscar por especialidade
router.get('/services/specialty/:specialty', auth, async (req, res, next) => {
    const { specialty } = req.params;

    try {
        const servicesFound = await Services.find({ specialty: { $regex: new RegExp(specialty, "i") } }).lean().select('-__v');

        if (servicesFound.length === 0) {
            return res.status(404).json(["Não há serviços com a especialidade informada."]);
        }

        return res.json(servicesFound);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
