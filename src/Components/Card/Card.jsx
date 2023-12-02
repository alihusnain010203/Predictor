import React from "react";
import { ArrowRight, ArrowUpward } from "@mui/icons-material";
const Card = () => {
  return (
    <div className="item w-80 bg-white shadow-lg shadow-gray-500 rounded-xl  hover:bg-purple-200 hover:scale-110 transition-all ease-in-out delay-75">

      <div className="card-body p-2 flex flex-col gap-5">
        <div className="flex justify-between">
        <h2 className="card-title text-2xl font-bold">Card title!</h2>
        <div className="flex gap-2 text-green-700">
          +40%
         <ArrowUpward color="red" className="text-blue-500"/> 
        </div>
        
        </div>
        <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi assumenda cupiditate consectetur?</p>
        <div className=" flex justify-between">
          <button className="btn btn-primary rounded-lg text-xl bg-gray-400 p-2 font-bold text-purple-600">Total <ArrowRight/></button>
          <p className="text-3xl text-green-700">99 $</p>
        </div>
      </div>

    </div>
  );
};

export default Card;
