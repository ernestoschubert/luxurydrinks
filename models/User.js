const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    userImg: { type: String },
    role: { type: String, default: 'visitor' },
    favorite: [{
        drinkId: { type: mongoose.Types.ObjectId, ref: 'drink' }
    }],
    buyed: [{
        drinkId: { type: mongoose.Types.ObjectId, ref: 'drink' }
    }],
    google: { type: Boolean, default: false }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
