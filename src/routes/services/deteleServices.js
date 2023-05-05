const express = require("express");
const { Services } = require('../../data/models');
const validate = require('../../controllers/validate');
const { auth } = require('../../controllers/auth');
const router = express.Router();

router.delete('/services/:code', auth, async (req, res, next) => {
    const { code } = req.params;

    try {
        validate.argumentsValidate([
            { keyName: 'code', value: code, type: 'number', notEmpty: true },
        ]);

        const result = await Services.deleteOne({ code });
        if (result.deletedCount === 1) {
            return res.json({ message: 'Service deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;
