const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    drinks: [
        {
            drinkId: { type: String},
            quantity: { type: Number, default: 1 }
        }
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
