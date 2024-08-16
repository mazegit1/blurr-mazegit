import React from 'react'
import Header from '../components/Navbar'
import workfirst from '../images/workfirst.png';
import worksecond from '../images/worksecond.png';
import workthird from '../images/workthird.png';
import workfourth from '../images/workfourth.png';
import workfifth from '../images/workfifth.png';
import worksixth from '../images/worksixth.png';
import workseven from '../images/workseven.png';
import Footer from '../components/Footer';
const Page2 = () => {
  return (
    <>
    <Header/>
    <div className="works bg-[#010101] px-20 pb-20">
    <div className="works-header">
  <h1 className='text-white text-[80px] pt-14 text-center font-semibold sm:text-[250px] md:text-[200px] md:pt-14 lg:text-[300px] xl:text-[400px]'>
    WORKS
  </h1>
</div>

<div className="works-cards flex flex-col items-center gap-8 sm:gap-12 justify-center py-12 sm:py-20 w-full">
          <div className="work w-full sm:w-auto">
            <img src={workfirst} className="w-full sm:w-[90%] mx-auto animate-zoomIn" />
          </div>
          <div className="work w-full sm:w-auto">
            <img src={worksecond} className="w-full sm:w-[90%] mx-auto animate-zoomIn" />
          </div>
          <div className="work w-full sm:w-auto">
            <img src={workthird} className="w-full sm:w-[90%] mx-auto animate-zoomIn" />
          </div>
          <div className="work w-full sm:w-auto">
            <img src={workfourth} className="w-full sm:w-[90%] mx-auto animate-zoomIn" />
          </div>
          <div className="work w-full sm:w-auto">
            <img src={workfifth} className="w-full sm:w-[90%] mx-auto animate-zoomIn" />
          </div>
          <div className="work w-full sm:w-auto">
            <img src={worksixth} className="w-full sm:w-[90%] mx-auto animate-zoomIn" />
          </div>
          <div className="work w-full sm:w-auto">
            <img src={workseven} className="w-full sm:w-[90%] mx-auto animate-zoomIn" />
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page2
