import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";
import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import gif from "../loaderlogo.gif";
import girl from "./khatabook.png";
import Notification from "../Notification";
import axios from "axios";
import Select from "react-select";

const Form = (props) => {
  var x = localStorage.getItem("loginuser");
  x = JSON.parse(x);
  x = x.name;
  const [error, setError] = useState({
    error1: "",
    message: "",
  });
  const [Data, setData] = useState({ amount: "", date: "", description: "" });
  
  const [loading, setload] = useState(true);
  const [post, setPost] = useState({
    g: [],
  });
  const [result, setvalue] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...Data, [input.name]: input.value });
  };
  const handleTextarea = ({ currentTarget: textarea }) => {
    setData({ ...Data, [textarea.name]: textarea.value });
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
          date,
        }),
      },
      []
    );
  };
  const changevalue = (e) => {
    setvalue(e.target.value);
  };
  // const fetchcurruser = () => {
  //   return post.g.find((u) => u.name === x);
  // };

  
  useEffect(() => {
    const fetchdata= async()=>{
      try{
      const resu= await axios.get("http://localhost:8000/data");
  //    var index= resu.data.find(finduserlog);
  //  console.log(index);
  //   await delete resu.data[t];
  const people = resu.data.filter((item) => item.name !== x);
      // resu.data.removeByAttr(resu.data, 'name', x);
  //  console.log(filteredPeople);
      setPost({ g: people });
    //  console.log(post);
  
      }
      catch(error)
      {
        console.log(error);
      }
    }
     fetchdata();
        //const f=res.json();
        // setPost([...post,{[res.data.name]}]);
        // console.log(res.data);
        // console.log(post);

        // let s = fetchcurruser();
          // console.log(s);
  },[]);

  const styleprops = useSpring({
    from: {
      opacity: 0,
      transform: "translate(-4000px,-1000px)",
    },
    opacity: 1,
    transform: "translate(0,0)",
  });

  return (
    <>
      <animated.div style={styleprops} className={styles.box}>
            <h1 className={styles.textlogin}>
              {" "}
              &lt;Credit <span className={styles.st}>/</span>&gt;
            </h1>
        <div className={styles.signup_container}>
        <img src={girl} alt="img" width="600" height="900" className={styles.image}></img>
          <animated.form style={styleprops} onSubmit={handleSubmit}>
            <br/><br/>
            <div className={styles.inputBox}>
            <span>Amount</span>
              <input
                type="number"
                name="amount"
                onChange={handleChange}
                value={Data.amount}
                required
                className={styles.input}
                min="1"
              />
              <br /><br/>
              <span>Person </span><br/>
              <select
                value={result}
                onChange={changevalue}
                className={styles.option1}
              >
                <option value="choose" disabled>Choose Name</option>
                {post.g.map((add, i) => (
                   <option value={add.name} key={i}>
                    {add.name}
                  </option>
                ))}
              </select>
              <br /><br/>
              <span>Date</span><br/>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={Data.date}
                required
                className={styles.input}
              />
              <br/><br/>
              <span>Description</span><br/>
              <textarea
                type="description"
                name="description"
                onChange={handleChange}
                value={Data.description}
                rows="5"
                cols="30"
                max="1"
                required
                className={styles.input}
              />
              <br />
              {{ error } && (
                <div className={styles.error_msg}>{error.error1}</div>
              )}
              <div className={styles.last}>
                {/* <Link to="/login"> */}
                  <Button name="Credit" />
                {/* </Link> */}
              </div>
            </div>
          </animated.form>
        </div>
      </animated.div>
    </>
  );
};

export default Form;
