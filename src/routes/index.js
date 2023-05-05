const express = require('express');
const router = express.Router();

const postUsers = require('./users/postUsers.js');
const getServices = require('./services/getServices');
const postServices = require('./services/postServices');
const deleteServices = require('./services/deteleServices.js');



router.use(postUsers);
router.use(getServices);
router.use(postServices);
router.use(deleteServices);

module.exports = router;