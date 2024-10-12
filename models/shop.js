const mongoose = require('mongoose');

// Corregir el destructuring a Schema en lugar de schema
const { Schema } = mongoose;

const schemaShop = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    instruments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'instrument'
        }
    ]
});

module.exports = mongoose.model('shop', schemaShop);
