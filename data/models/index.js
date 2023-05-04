const mongoose = require('mongoose');

const users = require('./schemas/users');

const model = mongoose.model.bind(mongoose);

module.exports = {
    Users: model('Users', users)
};