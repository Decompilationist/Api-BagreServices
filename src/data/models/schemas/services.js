const { Schema } = require('mongoose');

const services = new Schema({
  code: {
    type: Number,
    min: 0,
    validate: {
        validator: function (value) {
            return Number.isInteger(value);
        }
    }
},
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true,
    enum: ['encanador', 'eletricista', 'jardineiro', 'marceneiro', 'pedreiro']
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    required: true
  }
});

module.exports = services;
