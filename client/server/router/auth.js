const express =require('express');
const bcrypt=require('bcryptjs');

const User = require('../model/userschema');
const { useNavigate } = require('react-router-dom');
const router=express.Router();
//const jwt=require('jsonwebtoken');
//const navigate=useNavigate();

router.get('/', (req,res)=>{
    res.send(`hello world from the  router server`) 
    });

    router.post('/register', async (req,res)=>{
        console.log("register form node");
        const {name,email,password,confirmPassword,phoneNo}=req.body;
        // console.log(firstName);
        // console.log(lastName);
        // console.log(email);
        // console.log(password);
        // if(!firstName||!lastName || !email || !password)
        // {
        //     return res.status(422).json({error:"plz filled the properly"});

        // }
        try{
           const userexit=await User.findOne({email:email});
            if(userexit)
            {
                return res.status(422).json({error:"email is exits"});
            }
            else if(password!==confirmPassword)
            {
              
              return res.status(400).json({error:"password dont match"});
            }
            else{
                console.log("create user")
              
                const user =new User({name,email,password,phoneNo});
              //  hasing of password before save
                   await user.save();
                  return   res.status(402).json({message:"register sucessfully"});

            }
        
        }catch(err)
        {
            console.log(err);
        }


        // console.log(req.body);
        // res.json({message:req.body});


    })
    router.post('/login', async(req,res)=>
    {
        const {email,password}=req.body;
        let token;
        try{
        if(!email || !password)
        {
            return res.status(400).send({error:"plz filled th data"});
        }
        const userlogin=await User.findOne({email:email});
      console.log()
         if(userlogin)
         {
          //  const salt=await bcrypt.genSalt(10);
        //   const hash=await bcrypt.hash(password,salt)
             const ismatch = await bcrypt.compare(password,userlogin.password);

           
       //      localStorage.setItem("jwttokenlocal", token);
           //  console.log(token);
          //   console.log(localStorage.getItem("jwttokenlocal"));
            //  res.cookie("jwtoken",token,{
            //     expires:400000+ Date.now(),
            //     httpOnly:true
            //  })
          //   res.status(201).json(token);
          //  console.log(token)
            //console.log(ismatch)
            //console.log(hash)
          //  console.log(userlogin.password)
            if(!ismatch)
            {
                res.status(400).json({error:"invaild credientails"});

            }
            else
            {
              token=await userlogin.generateAuthToken();
                const obj={
                    "message":"user sucesfully",
                    "token":token
                }
                console.log(obj);
                res.status(201).json(obj);
              // navigate("/");
            }
         }
         else{
             res.status(400).send({error:"invailad crenteidatisl"});
         }}
         catch (err)
         {
            console.log(err);
         }

/// json web token generate
         // if  user sucessfully loged in
//  token = await userlogin.generateAuthToken();
// console.log(token);


   })

    module.exports=router;