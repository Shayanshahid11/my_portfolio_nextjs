import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner5.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "25%"}}>
      <Navbar/>
      <div className='container grid ig:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p data-aos="zoom-in-up">I'm</p>
                <p data-aos="zoom-in-up">Shayan</p>
                <p data-aos="zoom-in-up">Khan</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
