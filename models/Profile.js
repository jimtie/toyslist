const mongoose = require('mongoose');
const Toy = require('./Toy');
const Schema = mongoose.Schema;

//Profile Schema//
const ProfileSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, 'Email is required. Please enter a valid email address'],
        unique: true,
        },
    phone: String,
    zipcode: Number,
    pic: String,
    toys: [Toy.schema],
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Toy'
    }]
});

//Profile Model//
const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;