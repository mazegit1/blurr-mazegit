import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import workfirst from '../images/workfirst.png';
import worksecond from '../images/worksecond.png';
import workthird from '../images/workthird.png';
import workfourth from '../images/workfourth.png';
import workfifth from '../images/workfifth.png';
import worksixth from '../images/worksixth.png';
import workseven from '../images/workseven.png';

const images = [
  workfirst, worksecond, workthird, workfourth, workfifth, worksixth, workseven
];

const Works = () => {
  return (
    <>
      <Header />
      <div className="works bg-[#010101] px-5 sm:px-10 md:px-20 pb-20">
        <div className="works-header">
          <h1 className='text-white text-7xl sm:text-[250px] md:text-[200px] lg:text-[300px] xl:text-[400px] font-semibold text-center py-14'>
            WORKS
          </h1>
        </div>

        <div className="works-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-12">
          {images.map((image, index) => (
            <div key={index} className="work w-full sm:w-[90%] mx-auto animate-zoomIn">
              <img src={image} alt={`work ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
