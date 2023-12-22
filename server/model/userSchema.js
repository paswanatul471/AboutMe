const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    phone:{
        type: 'Number',
        required: true
    },
    work:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    cpassword:{
        type: 'string',
        required: true
    },
})

const User = mongoose.model('USER', userScheme);
module.exports = User;