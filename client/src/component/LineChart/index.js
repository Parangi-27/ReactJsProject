import React from "react";
import { useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";
import "chart.js/auto"; // ADD THIS



function LineChart() {
  const ref = useRef();
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
