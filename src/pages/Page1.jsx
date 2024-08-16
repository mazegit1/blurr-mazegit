import React from 'react';
import Navbar from '../components/Navbar';
import heroimg from '../images/heroimg.png';
import logo from '../images/siteimg.png';
import workfirst from '../images/workfirst.png';
import worksecond from '../images/worksecond.png';
import workthird from '../images/workthird.png';
import workfourth from '../images/workfourth.png';
import art from '../images/art.png';
import Footer from '../components/Footer';
import { RiArrowDownDoubleFill } from "react-icons/ri";

const Page1 = () => {
  const scrollToContent = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-[200px] leading-[160px] font-bold sm:text-[150px] sm:leading-[100px] md:text-[350px] md:leading-[250px] mt-20 text-start animate-slideDown">
            BLU <br /> RR<span className="text-[25px]">.</span>
          </h1>
          <h2 className="text-xl md:text-base text-start sm:text-sm animate-slideDown">
            <span className="text-3xl min-w-[300px]:text-xl text-center font-semibold">
              DESIGN STUDIO BASED <br /> IN OSAKA — TOKYO
            </span>
          </h2>
          <button
            onClick={scrollToContent}
            className="mt-8 ease-in-out bg-transparent animate-slideDown  text-lg font-semibold transition-all duration-300"
          >
            <RiArrowDownDoubleFill className='text-white size-[100%] mr-20 hover:text-gray-400 transition-all ease-in-out duration-200 animate-bounce' />
          </button>
        </div>
      </div>
      
      {/* Other sections... */}
      <div className="hero2 bg-[#010101] flex px-4 sm:px-20 md:py-14 flex-col py-24 sm:py-56 justify-start">
        <h1 className="text-6xl md:text-[100px] md:leading-[100px] xl:text-[200px] xl:leading-[170px] xl:py-20 sm:text-[240px] leading-[4.5rem] sm:leading-[180px] font-bold text-white">
          PIXEL <br /> OBSESSION <br /><span className='text-[#646467]'>— SINCE
          </span>
        </h1>
        <div className="wrapper flex items-center gap-2 sm:gap-4">
          <h1 className="text-6xl md:text-[100px] md:leading-[100px] xl:text-[200px] xl:leading-[150px] xl:py-20 sm:text-[240px] leading-[4.5rem] sm:leading-[180px] font-bold text-[#646467]">
            1996
          </h1>
          <img src={logo} alt="" className="w-12 sm:w-auto animate-bounce md:w-24 xl:w-44" />
        </div>
      </div>

      <div className="works flex flex-col items-center px-4 sm:px-8 bg-[#010101]">
        <div className="works-title flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left xl:gap-[800px] animate-fadeIn">
          <h1 className="text-6xl sm:text-9xl font-bold text-white mb-4 sm:mb-0">
            WORKS
          </h1>
          <p className="text-2xl sm:text-4xl font-medium text-[#646467] sm:ml-8 animate-fadeIn">
            PHOTOGRAPHER BASED <br /> <span className="text-white">IN OSAKA — TOKYO</span>
          </p>
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
        </div>
      </div>

      <div id="content" className="links animate-slideDown pb-14 bg-[#010101] flex flex-col items-center gap-8 px-4 sm:px-8">
        <div className="links-top text-center animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white">
            PHOTOGRAPHER BASED <br />IN OSAKA — TOKYO
          </h1>
        </div>
        <div className="links-bottom flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-16 lg:gap-20 animate-fadeIn">
          <div className="links-right flex flex-col text-start gap-2 text-[#646467] text-4xl sm:text-5xl lg:text-6xl font-semibold">
            <div className="wrapper flex items-center gap-4 sm:gap-5">
              <img src={art} alt="" className="w-12 sm:w-16 lg:w-20 animate-bounce" />
              <a href="/" className="text-white md:text-[50px] xl:text-[100px] transition-all ease-in-out duration-200 text-4xl sm:text-6xl hover:scale-110">
                HOME
              </a>
            </div>
            <a href="/works" className="text-4xl md:text-[50px] xl:text-[100px] sm:text-6xl hover:text-white transition-all ease-in-out duration-200 hover:scale-110">
              WORKS
            </a>
            <a href="/framework" className="text-4xl md:text-[50px] xl:text-[100px] sm:text-6xl hover:text-white transition-all ease-in-out duration-200 hover:scale-110">
              FRAMEWORK
            </a>
            <a href="/cherry-picks" className="text-4xl md:text-[50px] xl:text-[100px] sm:text-6xl hover:text-white transition-all ease-in-out duration-200 hover:scale-110">
              CHERRY PICKS
            </a>
          </div>
          <div className="links-left flex flex-col text-start gap-2 text-[#646467] text-4xl sm:text-5xl lg:text-6xl font-semibold">
            <a href="/get-in-touch" className="text-4xl md:text-[50px] xl:text-[100px] sm:text-6xl hover:text-white transition-all ease-in-out duration-200 hover:scale-110">
              GET IN TOUCH
            </a>
            <a href="/blog" className="text-4xl md:text-[50px] xl:text-[100px] sm:text-6xl hover:text-white transition-all ease-in-out duration-200 hover:scale-110">
              BLOG.
            </a>
            <a href="/transforms" className="text-4xl md:text-[50px] xl:text-[100px] sm:text-6xl hover:text-white transition-all ease-in-out duration-200 hover:scale-110">
              TRANSFORMS
            </a>
            <a href="#" className="text-4xl md:text-[50px] xl:text-[100px] sm:text-6xl hover:text-white transition-all ease-in-out duration-200 hover:scale-110">
              CINEMA
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page1;
