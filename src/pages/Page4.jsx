import React from 'react'
import { TfiArrowTopRight } from "react-icons/tfi";
import workthird from '../images/workthird.png'
import Navbar from '../components/Navbar'
import framework1 from '../images/framework1.png'
import framework2 from '../images/framework2.png'
import framework3 from '../images/framework3.png'
import Footer from '../components/Footer';

const Page3 = () => {
  return (
    <>
      <Navbar />
      <div className="framework flex items-center justify-between flex-col bg-[#010101] px-14 py-20 animate-fadeIn">
        <div className="framework-top">
          <h1 className='text-white text-start text-[100px] pt-20 leading-[80px] xl:text-[350px] xl:leading-[260px] md:text-[200px] md:leading-[150px] md:pt-20 animate-slideDown'>
            CHERRY<br />PICKS<span className='text-5xl'>.</span>
          </h1>
        </div>
      </div>
      <div className="wrapper bg-[#010101] py-20 animate-fadeIn">
        <div className="wrapper w-full sm:w-auto animate-zoomIn">
          <img src={workthird} className="w-full md:mx-auto sm:w-[90%] px-8" alt="Work Third" />
        </div>
        <div className="wrapper flex items-center gap-8 flex-col px-10 py-14 animate-slideUp">
          <h1 className='text-white text-5xl uppercase'>
            The client's goal was to <br />create a brand identity that <br />would resonate with <br />environmentally conscious <br />consumers and help position.
          </h1>
          <h1 className='text-[#646467] text-2xl uppercase'>
            The client's goal was to create a brand identity that would <br />resonate with environmentally conscious consumers and <br />help position their business as a leader in sustainable <br />practices. Objectives included increasing brand awareness <br />and driving customer engagement.
          </h1>
        </div>
        <div className="wrapper mx-20 grid grid-rows-2 gap-8">
          <div className="wrapper-top animate-bounce">
            <img src={framework1} className="" alt="Framework 1" />
          </div>
          <div className="wrapper-bottom grid grid-cols-2 gap-8 animate-bounce">
            <img src={framework2} className="" alt="Framework 2" />
            <img src={framework3} className="" alt="Framework 3" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page3
