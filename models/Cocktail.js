const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
    cocktailName: {type: String, require: true},
    description: {type: String, require: true},
    cocktailImg: {type: String, require: true},
    flour: {type: String},
    difficulty: {type: String},
    serve: {type: String},
    ingredients: [{type: String, require: true}],
    howToMake: [{type: String, require: true}],
    drinkId: { type: mongoose.Types.ObjectId, ref: 'drink' }
});

const Cocktail = mongoose.model('cocktail', cocktailSchema);

module.exports = Cocktail;
