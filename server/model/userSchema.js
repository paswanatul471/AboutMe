const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    tokens:[
        {
            token:{
                type: String,
                required: true
            
            }
        }
    ]
})


userScheme.pre('save', async function(next){
    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);

    }
    next();

})
// generating token

userScheme.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }

}

const User = mongoose.model('USER', userScheme);
module.exports = User;