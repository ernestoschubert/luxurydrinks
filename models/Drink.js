const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    abv:  {type: Number, require: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    description: {type: String, require: true},
});

const Drink = mongoose.model('drink', drinkSchema);

module.exports = Drink;
