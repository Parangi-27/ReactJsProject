import React from 'react';
import styles from "./styles.module.css";
import Button from '../Button/button';
import { NavLink} from 'react-router-dom';
import { useState,useEffect } from "react";
import {animated,useSpring } from 'react-spring';
import axios from "axios";
import Select from 'react-select';
import Dropdown from '../Dropdown';
// import Drop from '../Drop';

const Credit = () => {

    const [Data, setData] = useState({amount:""});
	const [loading, setload] = useState(true);
	// const [display, setdisplay] = useState(true);
	const [error, setError] = useState("");
	const [post, setPost] = useState({
       g:[]
	});
	const [result,setvalue]=useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...Data, [input.name]: input.value });
	};
	const handleSubmit= async(e) =>{
		e.preventDefault();
		const {amount}=Data;

		const namec={result};
		const loginuser=localStorage.getItem("loginuser");
		const res= await fetch("/money",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
					amount,namec,loginuser
			})
		  });

	}
	const changevalue=(e)=>{
		setvalue(e.target.value);
		
	};
	
	useEffect(()=>{
		
		axios.get("http://localhost:8080/data")
		  .then(res=>{

		
			//const f=res.json();
				// setPost([...post,{[res.data.name]}]);
				// console.log(res.data);
				// console.log(post);
			 setPost({g:res.data})
				console.log(res.data);
				console.log(post);
		  },
		  error=>{console.log("error in fecting");})
		},[]);
		// 
	
  return (
    <div>
	<div className={styles.contmain}>

	<animated.form onSubmit={handleSubmit}>
	        <span className={styles.color}>amount</span>
         	<input
             	type="number"
				name="amount"
				onChange={handleChange}
				value={Data.amount}
				required
            	className={styles.input}
				min="1"
		    />		
			
			
          <select  value={result} onChange={changevalue} >
              <option value="chosse">Choose Name</option>

         {post.g.map((add,i) => (
             <option value={add.name} key={i} >{add.name}</option>
               ))
              } 

          </select>
		  <h1>{result}</h1> 
			 <Button name="credit" />
          </animated.form>
		   {/* {post.credit.map((add,i)=>(
			<li value={add.name} key={i}>{add.name} {add.amount}</li>
		   ))} */}
			 
			
           
</div>

    </div>
  )}


export default Credit