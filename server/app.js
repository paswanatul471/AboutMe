const dotenv = require('dotenv');
const express = require('express');


const app = express();
dotenv.config({path: './.env'})

require('./db/conn')

app.use(express.json());

// const User = require('./model/userSchema')

app.use(require('./router/auth'));

const PORT = process.env.PORT;


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


app.listen(PORT, ()=>{
    console.log(`The apps is listening on ${PORT}`);
})

