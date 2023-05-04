const express = require('express');
const router = express.Router();

const postUsers = require('./users/postUsers.js');

router.use(postUsers)


module.exports = router;