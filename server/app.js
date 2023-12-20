const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

dotenv.config({path: './.env'})

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
// middleware();

app.get('/', (req,res)=>{
    res.send("hello world!");
})
app.get('/about',middleware, (req,res)=>{
    res.send("about Page");
})

app.get('/contact', (req,res)=>{
    res.send("contact page");
})

app.get('/signin', (req,res)=>{
    res.send("signin page");
})

app.get('/signup', (req,res)=>{
    res.send("signup page");
})


app.listen(port, ()=>{
    console.log(`The apps is listening on ${port}`);
})

