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
  const [loguser, setLoguser] = useState({
    h: [],
  });
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
  const fetchcurruser = () => {
    return post.g.find((u) => u.name === x);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/data").then(
      (res) => {
        <Notification success={false} text="hello" error={false} promise />;

        //const f=res.json();
        // setPost([...post,{[res.data.name]}]);
        // console.log(res.data);
        // console.log(post);
        setPost({ g: res.data });
        let s = fetchcurruser();
        // console.log(s);
        setLoguser({ h: s.credit });
        // console.log(res.data);
        //  console.log(loguser);
        //	console.log(res.description);
        // console.log(res.amount);
        // console.log(post);
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  });

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
        <img src={girl} alt="img" className={styles.image}></img>
          <animated.form style={styleprops} onSubmit={handleSubmit}>
            <br/><br/>
            <span>Amount</span>
            <div className={styles.inputBox}>
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
                <option value="choose">Choose Name</option>
                {post.g.map((add, i) => (
                  <option value={add.name} key={i}>
                    {add.name}
                  </option>
                ))}
              </select>
              <br /><br/>
              <span>Date</span>
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
                <Link to="/login">
                  <Button name="Credit" />
                </Link>
              </div>
            </div>
          </animated.form>
        </div>
      </animated.div>
    </>
  );
};

export default Form;