import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import axios from "axios";
import Select from "react-select";
import Dropdown from "../Dropdown";
// import Drop from '../Drop';

const Credit = () => {
  var x = localStorage.getItem("loginuser");
  x = JSON.parse(x);
  x = x.name;
  var y = x._id;

  //added date and description
  const [Data, setData] = useState({ amount: "", date: "",  description: ""});
  const [loguser, setLoguser] = useState({
    h: [],
  });
  const [loading, setload] = useState(true);
  // const [display, setdisplay] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({
    g: [],
  });
  const [result, setvalue] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...Data, [input.name]: input.value });
  };
  const handleTextarea = ({currentTarget: textarea}) => {
	setData({...Data, [textarea.name] : textarea.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { amount, description, date } = Data;

    const namec = { result };
    const loginuser = localStorage.getItem("loginuser");
    const res = await fetch(
      "/money",
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          namec,
          loginuser,
		      description,
          date
        }),
      },
      []
    );
  };
  const changevalue = (e) => {
    setvalue(e.target.value);
  };
  const fetchcurruser = () => {
    return post.g.find((u) => u._id === y);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/data").then(
      (res) => {
        //const f=res.json();
        // setPost([...post,{[res.data.name]}]);
        // console.log(res.data);
        // console.log(post);
        setPost({ g: res.data });
        let s = fetchcurruser();
        // console.log(s);
        setLoguser({ h: s });
        // console.log(res.data);
		console.log(res.description);
		// console.log(res.amount);
        // console.log(post);
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  },[]);
  //

  return (
    <div>
      <div className={styles.contmain}>
        <animated.form onSubmit={handleSubmit}>
          <span className={styles.color}>Amount</span>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            value={Data.amount}
            required
            className={styles.input}
            min="1"
          />
		  <br />
		  <span className={styles.color}>Person: </span>
          <select value={result} onChange={changevalue}>
            <option value="choose">Choose Name</option>

            {post.g.map((add, i) => (
              <option value={add.name} key={i}>
                {add.name}
              </option>
            ))}
          </select>
		  <br />
		  <span className={styles.color}>Description</span>
          <textarea
            type="text"
            name="description"
            onChange={handleTextarea}
            value={Data.description}
            required
            rows="4"
			      cols="25"
            min="1"
          />
		  <br />
		  <span className={styles.color}>Date</span>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={Data.date}
            required
          />
          <h1>{result}</h1>
          <Button name="Credit" />
        </animated.form>
       
        {/* 
		 {loguser.h.credit.map((add,i)=>(
			<div>
			<li value={add.name} key={i}>{add.name}</li>
			<li value={add.amount} key={i}>{add.amount}</li>
			</div>
		   ))}   */}
      </div>
    </div>
  );
};

export default Credit;
