const express = require('express');
const router = express.Router();

const postUsers = require('./users/postUsers.js');
const getServices = require('./services/getServices');
const postServices = require('./services/postServices');



router.use(postUsers);
router.use(getServices);
router.use(postServices);

module.exports = router;