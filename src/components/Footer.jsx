import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer border-t border-t-[#646467] bg-[#010101] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      <div className="footer-left p-4 md:p-14">
        <a href="/">
          <h1 className='text-4xl md:text-9xl font-bold leading-[55px] md:leading-[95px] text-white'>
            BLU <br />RR<span className='text-2xl md:text-3xl'>.</span>
          </h1>
        </a>
      </div>
      <div className="wrapper border-t md:border-l border-[#646467] grid grid-rows-2">
        <div className="footer-top border-b border-[#646467] p-4 md:p-14">
          <h1 className='text-white text-3xl md:text-5xl font-semibold text-end'>
            HELLO@ <br /> BLURR.IO
          </h1>
        </div>
        <div className="footer-bottom flex flex-col md:gap-8 md:flex-row items-center justify-between px-4 md:px-14 py-6">
          <div className="left flex items-center gap-4">
            <a href="https://www.instagram.com/xelil_ovw/">
              <FaInstagram className='text-[#646467] hover:text-white hover:scale-110 transition-all ease-in-out duration-200 w-[40px] md:w-[50px] h-[40px] md:h-[50px]' />
            </a>
            <a href="https://github.com/mazegit1">
              <IoLogoGithub className='text-[#646467] hover:text-white hover:scale-110 transition-all ease-in-out duration-200 w-[40px] md:w-[50px] h-[40px] md:h-[50px]' />
            </a>
            <a href="https://www.linkedin.com/in/huseyn-xalil-7022262bb/">
              <FaLinkedinIn className='text-[#646467] hover:text-white hover:scale-110 transition-all ease-in-out duration-200 w-[40px] md:w-[50px] h-[40px] md:h-[50px]' />
            </a>
          </div>
          <div className="right mt-4 md:mt-0">
            <h1 className='text-[#646467] text-lg md:text-2xl font-bold'>
              Made By Mazegit | © 2024
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
