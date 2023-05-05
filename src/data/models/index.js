const mongoose = require('mongoose');

const services = require('./schemas/services')
const users = require('./schemas/users');

const model = mongoose.model.bind(mongoose);

module.exports = {
    Services: model('Services', services),
    Users: model('Users', users)
};