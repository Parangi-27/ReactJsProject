const mongoose = require("mongoose");
const bcrpty = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },

  graph:[
    {
      name: {
        type: String,
        
      },
      camount: {
        type: Number,
  
      },
      damount: {
        type: Number,
  
      },
    }
  ],
  credit: [
    {
      name: {
        type: String,
       
      },
      amount: {
        type: Number,
    
      },
      description: {
        type: String,
      },
      date: {
        type: Date,
      },
      month: {
        type: Number,
      },
      
    },
  ],
  debit: [
    {
      name: {
        type: String,
 
      },
      amount: {
        type: Number,
      
      },
      description: {
        type: String,
      },
      date: {
        type: Date,
      },
      month: {
        type: Number,
      },
    },
  ],

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userschema.pre("save", async function (next) {
  console.log("enter schema");

  if (this.isModified("password")) {
    console.log("save password function in");
    const salt = await bcrpty.genSalt(10);
    const hash = await bcrpty.hash(this.password, salt);
    this.password = hash;
  }
  next();
});
userschema.methods.generateAuthToken = async function () {
  try {
    let tokentha = jwt.sign({ _id: this._id }, process.env.KEY);
    this.tokens = this.tokens.concat({ token: tokentha });
    await this.save();
    return tokentha;
  } catch (err) {
    console.log(err);
  }
};

userschema.methods.enterAmountCredit = async function (
  amountq,
  namec,
  d,
  description,
  date,
  month
) {
 
  try {
    this.credit = this.credit.concat({
      name: namec.result,
      amount: amountq,
      description: description,
      date: date,
      month: month,
    });
  
  const arr=["jan","feb","mar","april","may","june","july","aug","spet","oct","nov","dec"];
var s=parseInt(this.graph[month-1].camount);
 s+=parseInt(amountq);
 const g= await User.updateOne({name:d.name, "graph.name":arr[month-1]},{"graph.$.camount":s});
const q = await User.findOne({ name: namec.result });
    q.debit = q.debit.concat({
      name: d.name,
      amount: amountq,
      description: description,
      date: date,
      month: month,
    });
    var p=parseInt(q.graph[month-1].damount);
    p+=parseInt(amountq);
    const gf= await User.updateOne({name:q.name, "graph.name":arr[month-1]},{"graph.$.damount":p});
    await q.save();
    await this.save();
    return "success";
  
  } catch (err) {
    console.log(err);
  }
};
const User = mongoose.model("creditentr", userschema);
module.exports = User;
