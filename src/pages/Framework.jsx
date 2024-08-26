import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mainimg from '../images/mainimg.png'

const Framework = () => {
  return (
    <>
      <Navbar />
      <div className="main flex items-center xl:gap-20 md:gap-2 bg-[#010101] py-20 px-8 animate-fadeIn">
        <div className="main-title animate-slideDown">
          <h1 className='text-white md:text-[150px] md:leading-[120px] font-semibold text-[80px] xl:text-[250px] xl:leading-[200px] leading-[65px]'>
            BEYOND <br /> THE — <br /> FRAME.
          </h1>
          <p className='uppercase xl:text-3xl text-[#646467] text-xl'>
            The client's goal was to create a brand identity that would <br /> resonate with environmentally conscious consumers and <br /> help position their business as a leader.
          </p>
        </div>
        <div className="wrapper animate-zoomIn">
          <img src={mainimg} className='xl:w-[90%] md:w-[200%] xl:block md:block hidden top-0 left-0' alt="Main" />
        </div>
      </div>
      <div className="wrapper bg-[#010101] py-14 px-14 animate-fadeIn">
        <h1 className='text-[#646467] text-4xl'>
          PHOTOGRAPHER BASED IN <br />OSAKA — TOKIO
        </h1>
      </div>
      <Footer />
    </>
  )
}

export default Framework
