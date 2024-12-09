const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    name: {
        type: Schema.Types.String,
        required: true
    },

    phonenumber: {
        type: Schema.Types.Number
    },
    dateofbirth: {
        type: Schema.Types.Date,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);