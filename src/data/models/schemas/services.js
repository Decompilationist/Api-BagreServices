const { Schema } = require('mongoose');

const services = new Schema({  
    code: {
        type: Number,
        required: true,
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
    description: {
        type: String
    },
    price: {
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    }

})

module.exports = services;