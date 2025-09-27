const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userschema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, trim: true, lowercase: true, validate: [validator.isEmail, "Please provide a valid email"]},
    password: {type: String, required: true}
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

// hashing the password before saving in db
userschema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model('User', userschema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}