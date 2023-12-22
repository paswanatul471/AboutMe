const express = require('express');

const User = require('../model/userSchema');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send("THis is from router file");
});
router.post('/register',(req, res)=>{
    const {name, email,phone, work, password, cpassword} = req.body;
    if(!name ||!email || !phone || !work || !password || !cpassword )
    {
        return res.status(422).json({error: "nfasdm,"});
    }
    User.findOne({email: email})
    .then((userExists)=>{
        if(userExists) {
            return res.status(422).json({error: "Email already exists"});
        }
        const user = new User({name, email,phone, work, password, cpassword});
        user.save().then(()=>{
            res.status(201).json({message: "user successfully registered"})
            .catch((err)=> res.status(500).json({error: "Failed to register user"}))
        })
    }).catch((err)=> {console.log(err)})
   
});

module.exports = router;
