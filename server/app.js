const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req,res)=>{
    res.send("hello world!");
})
app.get('/about', (req,res)=>{
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

