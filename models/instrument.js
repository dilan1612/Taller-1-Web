const mongoose = require('mongoose');

// Corregir el destructuring para obtener Schema
const { Schema } = mongoose;

const schemaInstrument = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: [true, 'El valor es requerido'],
        validate: {
            validator: function (v) {
                return /\d+/.test(v);
            },
            message: props => `${props.value} is not valid!`
        }
    },
    shop: {
        type: Schema.Types.ObjectId, 
        ref: 'shop'
    }
});

// Corregir module.exports
module.exports = mongoose.model('instrument', schemaInstrument);
