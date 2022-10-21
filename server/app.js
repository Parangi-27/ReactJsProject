const dotenv=require("dotenv");
const mongoose =require('mongoose');
var cors = require('cors')


const express=require('express');
const app=express();
dotenv.config({path :'./config.env'});
require('./db/conn')
app.use(express.json())
//const User=require('./model/userschema');
app.use(cors());

app.use(require('./router/auth'));


const port =process.env.port;

/// middleware
const middleware=(req,res,next)=>
{
    console.log(`hello my middle ware`);
    next();
}


app.get('/', (req,res)=>{
res.send(`hello world from the app.js server`) 
});
app.get('/signup',middleware,(req,res)=>{
    res.send(`hello world from the server`) 
    });
app.listen(port,()=>{
console.log(`server is running on ${port} port`);
})
console.log("moanan")