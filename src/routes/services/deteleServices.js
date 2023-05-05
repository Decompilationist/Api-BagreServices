const express = require("express");
const { Services } = require('../../data/models');
const validate = require('../../controllers/validate');
const { auth } = require('../../controllers/auth');
const router = express.Router();

router.delete('/services/:code', auth, async (req, res, next) => {
    const code = parseInt(req.params.code);

    try {
        validate.argumentsValidate([
            { keyName: 'code', value: code, type: 'number', notEmpty: true }
        ]);

        const service = await Services.findOne({ code });

        if (!service) {
            const error = new Error(`O serviço com o código ${code} não existe`);
            error.statusCode = 404;
            throw error;
        }

        const serviceDeleted = await Services.deleteOne({ code });
        return res.json(serviceDeleted);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
