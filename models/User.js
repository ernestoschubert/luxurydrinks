const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    userImg: { type: String },
    role: { type: String, default: 'member' },
    favorite: [{
        drinkId: { type: mongoose.Types.ObjectId, ref: 'drink' }
    }],
    buyed: [{
        drinkId: { type: mongoose.Types.ObjectId, ref: 'drink' },
        quantity: {type: Number}
    }],
    google: { type: Boolean, default: false }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
