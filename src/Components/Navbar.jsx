import React from 'react'
const Navbar = () => {
  return (
    <div className="navbar bg-purple-300">
       <div className="conatiner flex justify-between items-center p-3 ">
        <h1 className='text-xl font-bold'>Disease Predictor</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"  style={{width:"50px",height:"50px"}} alt="" />
       </div>
    </div>
  )
}

export default Navbar