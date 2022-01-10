const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    drinks: [
        {
            drinkId: { type: String},
            quantity: { type: Number, default: 1 }
        }
    ]
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
