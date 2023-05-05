const express = require("express");
const { Services } = require('../../data/models');
const validate = require('../../controllers/validate');
const { auth } = require('../../controllers/auth');
const router = express.Router();

router.put('/services/:code', auth, async (req, res, next) => {
  const code = parseInt(req.params.code);
  const { name, specialty, description, price, currency } = req.body;

  try {
    validate.argumentsValidate([
      { keyName: 'code', value: code, type: 'number', notEmpty: true },
      { keyName: 'name', value: name, type: 'string', notEmpty: true },
      { keyName: 'specialty', value: specialty, type: 'string', notEmpty: true },
      { keyName: 'description', value: description, type: 'string', notEmpty: false },
      { keyName: 'price', value: price, type: 'number', notEmpty: true },
      { keyName: 'currency', value: currency, type: 'string', notEmpty: true }
    ]);

    const existingService = await Services.findOne({ code });
    if (!existingService) {
      throw new Error('Service not found');
    }

    const updatedService = await Services.updateOne(
      { code },
      { name, specialty, description, price, currency }
    );

    return res.json(updatedService);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
