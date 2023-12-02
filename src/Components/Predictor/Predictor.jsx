import React, { useState } from 'react'

const Predictor = () => {
    const [value,setValue]=useState({
        temprature:null,
        Humitidy:null
    })

const [Prediction,setPrediction]=useState(null)

    const predictor = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div className="predictor flex flex-col">
   <div className="top flex flex-wrap justify-around gap-2">
    <input className='outline-none w-1/3 p-2 rounded-lg border-2 border-gray-300'  type="text" name="temprature" id="" placeholder='Enter temprature' onChange={predictor} /><input className=' w-1/3 outline-none p-2 rounded-lg border border-gray-300'  type="text" name="Humitidy" id="" placeholder='Enter Humitidy' onChange={predictor} />
   </div>
   <div className="bottom flex flex-col justify-center items-center">
    <h1 className=' outline-none p-2 rounded-lg border border-gray-300' type="text" value={Prediction} >
        Answer is <span>{Prediction}</span>
        </h1>

    <button className='w-20 bg-purple-300 rounded-lg hover:scale-110 transition-all ease-in-out delay-75 p-2'>Predict</button>
   </div>
    </div>
  )
}

export default Predictor