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

  credit: [
    {
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
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
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
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

/// we are hasing pw
userschema.pre("save", async function (next) {
  console.log("enter schema");

  if (this.isModified("password")) {
    console.log("save password function in");
    const salt = await bcrpty.genSalt(10);
    const hash = await bcrpty.hash(this.password, salt);
    this.password = hash;
    //  this.password=bcrpty.hash(this.password,10);
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
  // console.log(amountq)
  // console.log(namec);
  //d is for loginuser
  try {
    //result is dropdown element
    this.credit = this.credit.concat({
      name: namec.result,
      amount: amountq,
      description: description,
      date: date,
      month: month,
    });
    const q = await User.findOne({ name: namec.result });
    console.log(q);
    console.log(description);
    q.debit = q.debit.concat({
      name: d.name,
      amount: amountq,
      description: description,
      date: date,
      month: month,
    });
    await q.save();
    await this.save();
    return "success";
    console.log(this);
  } catch (err) {
    console.log(err);
  }
};
const User = mongoose.model("creditentr", userschema);
module.exports = User;
