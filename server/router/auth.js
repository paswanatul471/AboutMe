const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../model/userSchema');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send("THis is from router file");
});
router.post('/register', async(req, res)=>{
    const {name, email,phone, work, password, cpassword} = req.body;
    if(!name ||!email || !phone || !work || !password || !cpassword )
    {
        return res.status(422).json({error: "Please fill every required field"});
    }
    try {

        const userExists = await User.findOne({email: email})
        if(userExists) {
            return res.status(422).json({error: "Email already exists"});
        }else if(password != cpassword)
        {
            return res.status(422).json({error:  "Password are not matching"})
        }
        const user = new User({name, email,phone, work, password, cpassword});
        await user.save();
        res.status(201).json({message: "user registered successfully"});

        
    } catch (err) {
        console.log(err);
    }
    
    
   
});


// signin route 

router.post('/signin', async(req, res)=>{

    try {
        
        const {email, password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({err:"Pease fill the data"});
        }
        const userLogin = await User.findOne({email: email});
        
        

        if(userLogin)
        {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if(!isMatch)
            {
                res.status(400).json({err:" Invalid credentials. Please try again."});
            }
            else{

                res.json({message: 'User logged in successfully'});
            }
        }
        else{
            res.status(400).json({err:" Invalid credentials. Please try again."});
        }
    

        
        
    } catch (error) {
        
    }


});

module.exports = router;
