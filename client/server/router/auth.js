const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/userschema");
const {
  useNavigate
} = require("react-router-dom");
const router = express.Router();
// const {parse, stringify} = require('flatted/cjs');
//const jwt=require('jsonwebtoken');
//const navigate=useNavigate();

router.get("/", (req, res) => {
  res.send(`hello world from the  router server`);
});

router.post("/register", async (req, res) => {
  console.log("register form node");
  const {
    name,
    email,
    password,
    confirmPassword,
    phoneNo
  } = req.body;
  try {
    const userexit = await User.findOne({
      email: email
    });
    const username = await User.findOne({
      name: name
    });
    if (userexit && username) {
      return res.status(422).json({
        error: "email & name is exits"
      });
    } else if (password !== confirmPassword) {
      return res.status(400).json({
        error: "password dont match"
      });
    } else {
      console.log("create user");
      const graph = [{
          name: "jan",
          camount: 0,
          damount: 0,
        },
        {
          name: "feb",
          camount: 0,
          damount: 0,
        }, {
          name: "mar",
          camount: 0,
          damount: 0,
        }, {
          name: "april",
          camount: 0,
          damount: 0,
        }, {
          name: "may",
          camount: 0,
          damount: 0,
        }, {
          name: "june",
          camount: 0,
          damount: 0,
        }, {
          name: "july",
          camount: 0,
          damount: 0,
        }, {
          name: "aug",
          camount: 0,
          damount: 0,
        }, {
          name: "spet",
          camount: 0,
          damount: 0,
        }, {
          name: "oct",
          camount: 0,
          damount: 0,
        }, {
          name: "nov",
          camount: 0,
          damount: 0,
        }, {
          name: "dec",
          camount: 0,
          damount: 0,
        },
      ]
      const user = new User({
        name,
        email,
        password,
        phoneNo,
        graph
      });
      //  hasing of password before save
      await user.save();
      return res.status(402).json({
        message: "register sucessfully"
      });
    }
  } catch (err) {
    console.log(err);
  }

  // console.log(req.body);
  // res.json({message:req.body});
});
router.post("/login", async (req, res) => {
  const {
    email,
    password
  } = req.body;
  let token;
  try {
    const userlogin = await User.findOne({
      email: email
    });
    // console.log()
    if (userlogin) {
      //  const salt=await bcrypt.genSalt(10);
      //   const hash=await bcrypt.hash(password,salt)
      const ismatch = await bcrypt.compare(password, userlogin.password);

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
      if (!ismatch) {
        res.status(400).json({
          error: "invaild credientails"
        });
      } else {
        console.log("genrate");
        token = await userlogin.generateAuthToken();
        const obj = {
          message: "user sucesfully",
          token: token,
          loginuser: userlogin,
        };
        //  console.log(obj);
        res.status(201).json(obj);
        // navigate("/");
      }
    } else {
      res.status(400).send({
        error: "invailad crenteidatisl"
      });
    }
  } catch (err) {
    console.log(err);
  }

  /// json web token generate
  // if  user sucessfully loged in
  //  token = await userlogin.generateAuthToken();
  // console.log(token);
});

router.post("/graph",async(req,res)=>{
  const ri= req.body.r;
   const y= await User.find({name:ri});

   res.status(201).json(y);

});
router.get("/data", async (req, res) => {
  const objectdata = await User.find({});
  // console.log(objectdata);

  //  console.log(objk);
  //return objectdata;
  res.status(201).json(objectdata);
});
router.post("/money", async (req, res) => {
  var {
    amount,
    namec,
    loginuser,
    description,
    date
  } = req.body;
  loginuser = JSON.parse(loginuser);
  const r = loginuser.email;
  console.log("hello now:---");
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  //console.log(r);
  // console.log(description);
  const d = await User.findOne({
    email: r
  });
  // const a = await User.findOne({
  //   name: namec.result
  // });
  // console.log(amount);
  // console.log(namec);
  // console.log(loginuser);
  //console.log(d);
  const user = await d.enterAmountCredit(
    amount,
    namec,
    d,
    description,
    newDate,
    month
  );

  // const nodemailer = require("nodemailer");

  // const transporter = nodemailer.createTransport({
  //   service: "hotmail",
  //   auth: {
  //     user: "reactmp@outlook.com",
  //     pass: "react#mp52",
  //   },
  // });
  // const subject = "app name";
  // const textbody = `Dear {}`;
  // const options = {
  //   from: "reactmp@outlook.com",
  //   to: a.email,
  //   subject: {},
  //   text: `It's absoulety working!!!`,
  // };

  // transporter.sendMail(options, function (err, info) {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("Sent: " + info.response);
  // });
});
module.exports = router;