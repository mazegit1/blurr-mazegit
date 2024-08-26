import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import touchimg from '../images/touchimg.png'

const GetInTouch = () => {
  return (
    <>
      <Navbar />
      <div className="title px-20 py-28 bg-[#010101] animate-fadeIn">
        <h1 className='text-white text-[100px] leading-[80px] md:text-[180px] md:leading-[140px] font-medium text-start xl:text-[300px] xl:leading-[250px]'>
          GET IN <br />TOUCH.
        </h1>
      </div>
      <div className="img flex items-center justify-center bg-[#010101] animate-zoomIn">
        <img src={touchimg} className='bg-[#010101] w-[90%] md:w-[80%] xl:w-[90%] py-8' alt="Touch" />
      </div>
      <Footer />
    </>
  )
}

export default GetInTouch
