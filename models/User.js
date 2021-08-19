const mongoose = require('mongoose');
// import bcrypt
const bcrypt = require('bcrypt');


UserSchema = new mongoose.Schema({

    email:{
        type: String,
        required: [true, 'user must include email'],
    },
    password: {
        type: String,
        required: [true, 'must include password']
    },
    passwordConfirm: {
        type: String,
        required:[true, 'muct conform password']
    }

},
{
    timestamps:true,
})


const User = mongoose.model('User', UserSchema);