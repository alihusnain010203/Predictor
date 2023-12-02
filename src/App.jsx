import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/footer'
const App = () => {
  return (
    <div className='App bg-gray-200'>
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
  )
}

export default App