import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { ConvertNumber } from "../../../functions/convertNumber";
// import { convertNumber } from "../../../functions/convertNumbers";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: 'linear',
        display: true,
        position: 'left',
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                if(priceType == 'prices'){
                  return '$' + value.toLocaleString();
                }else{
                  return '$' + ConvertNumber(value);
                }
              }
          }
        },
      crypto2: {
        type: 'linear',
        display: true,
        position: 'right',
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                if(priceType == 'prices'){
                  return '$' + value.toLocaleString();
                }else{
                  return '$' + ConvertNumber(value);
                }
              }
          }
        }
      }
    }
return(
<div className= 'chart'>
 <Line data={chartData} options={options} />
 </div>
)
}
export default LineChart