import React from "react";
import { useState, useRef ,useEffect} from "react";
import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";
import "chart.js/auto"; // ADD THIS
import axios from "axios";


function LineChart() {
  const ref = useRef();
const [value,setvalue]=useState([{
  g:[]
}])
var r=localStorage.getItem("loginuser");
  r= JSON.parse(r);
  r=r.name;

  useEffect(() => {
 var time
    const fetchdata= async()=>{
      try{
        const resu = await fetch("/graph", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            r
          }),
        });
      //  const res = await resu.json();
  const re = await resu.json();
   time = setInterval(()=>{
    setvalue({ g: re });
}, 1000);

  console.log(value.g[0].graph[0]);
  var creditamount=[value.g[0].graph[0].camount,value.g[0].graph[1].camount,value.g[0].graph[2].camount,value.g[0].graph[3].camount,value.g[0].graph[4].camount,value.g[0].graph[5].camount,value.g[0].graph[6].camount,value.g[0].graph[7].camount,value.g[0].graph[8].camount,value.g[0].graph[9].camount,value.g[0].graph[10].camount,value.g[0].graph[11].camount];
  console.log(creditamount);
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
          return () => {
           clearInterval(time)
          };
         
        });
// console.log(value.g[0].graph[0].camount)
//var creditamount=[value.g[0].graph[0].camount,value.g[0].graph[0].camount];
 //console.log(creditamount);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        borderColor: ['blue'],
        backgroundColor: ['black'],
        pointBackgroundColor: ['red'],
        pointBorderColor: ['violet']
      },
    ],
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      }
    }
};
  
  return (
    <>
      <Line ref={ref} data={data} />
    </>
  );
}

export default LineChart;
