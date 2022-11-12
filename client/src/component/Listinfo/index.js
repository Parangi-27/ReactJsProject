import React from 'react'
import DraggableList from '../list/DraggableList';
import Card from '../card/Card';
import { listData } from '../assets/listData';
import gif from '../loaderlogo.gif';
import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import Navbar from '../Navbar';
import axios from "axios";
const Listinfo = () => {
    const [loading, setload] = useState(true);
    const [creditpeople, setcredit] = useState({
      g: [],
    });
    
    const [debitpeople, setdedit] = useState({
        g: [],
      });
    var x = localStorage.getItem("loginuser");
    x = JSON.parse(x);
    x = x.name;
    const fetchcurruser = (z) => {
        return z.find((u) => u.name === x);}
    useEffect(() => {
        const fetchdata= async()=>{
          try{
          const resu= await axios.get("http://localhost:8000/data");
      //    var index= resu.data.find(finduserlog);
      //  console.log(index);
      //   await delete resu.data[t];
     // const people = resu.data.filter((item) => item.name !== x);
          // resu.data.removeByAttr(resu.data, 'name', x);
      //  console.log(filteredPeople);

      let s = fetchcurruser(resu.data);
      // console.log(s);
      setcredit({ g: s.credit });
      setdedit({ g: s.dedit }); 
    //  console.log(creditpeople.g);     
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
      useEffect(() => {
        setTimeout(() => {
          setload(false);
        }, 4000);
      }, []);
  return (
    <div>
     {loading ? (
        <center><img src={gif} alt="load"></img></center>
      ) : (<>
    <Navbar/>
   
  <DraggableList
                data={creditpeople.g}
                renderItemContent={(item) => LessonCard(item)}
            />
    
            </>)}
    </div>
  )
}
const LessonCard = item => <Card item={item}/>

export default Listinfo