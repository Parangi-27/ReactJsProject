import React from "react";
import { useState, useRef ,useEffect} from "react";
import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";
import "chart.js/auto"; // ADD THIS
import axios from "axios";


function LineChart() {
  
  const [line,setline]=useState();
  const ref = useRef();
const [value,setvalue]=useState([{
  g:[]
}])
const [res,setres]=useState();
var r=localStorage.getItem("loginuser");
  r= JSON.parse(r);
  r=r.name;
  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May","june","july","Aug","Spet","oct","Nov","Dec"],
    datasets: [
      {
        label: "Amount details for 2021 (M)",
        data: res,
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
        y: { 
          min: 0,
          max: 100000,
        }
      }
    }
  };

var result;
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

setvalue({ g: re });

result = value.g[0].graph.map(a => parseInt(a.camount));
  setres(result);
  setline(<Line ref={ref} className={styles.chart} data={data} />);
  }
 
  catch(error)
  {
    console.log(error);
  }
}
fetchdata()
  useEffect(() => {
     fetchdata();
  },[res]);


  return (
    <>

      <Line ref={ref} className={styles.chart} data={data} />
    
    </>
  );
}

export default LineChart;
