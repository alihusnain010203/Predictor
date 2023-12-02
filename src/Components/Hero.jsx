import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarChart } from "@mui/x-charts";
import DataTable from "./Table";
import Predictor from "./Predictor/Predictor";
const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update the inner width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);
    console.log(windowWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]); 
  return (
    <div className="hero flex flex-col p-5">
      <div className="top flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Welcome</h1>
          <span className="text-gray-500">Happy to see you</span>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            style={{ width: "70px", height: "70px" }}
            alt=""
          />
        </div>
      </div>
        
      <div className="center m-3 flex gap-6 justify-around flex-col">
        <div className="cards flex flex-wrap gap-5 justify-around m-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
        <Predictor/>
        </div>
        <div className="charts">
          <div className="flex flex-col md:flex-row gap-5 justify-evenly items-center p-4 shadow-lg shadow-gray-500 bg-purple-300 rounded-lg">
            <div className="circularProgress flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl text-gray-700">Progress</h1>
            <CircularProgressbar  className="w-35 md:w-50 " value={70} text={"70%"} />
            <button className="btn rounded-lg bg-gray-400 text-purple-700 font-bold p-4">View Details</button>
            </div>
            <div className="Graph">
            <BarChart 
  xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
  series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
  width={windowWidth>800?windowWidth/2:300}
  height={500}
/>
            </div>
          </div>
        </div>
      </div>

<div className="bottom mt-4">
 <h1 className="text-xl text-gray-500 ">History</h1>
<DataTable/>
</div>
    </div>
  );
};

export default Hero;
