const mongoose = require('mongoose');


const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log("not found",);
})
const middleware = (req,res,next)=>{

    console.log("This a middleware function");
    next();
    
}