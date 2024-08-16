import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import card5 from '../images/card5.png'
import card6 from '../images/card6.png'
import card7 from '../images/card7.png'
import card8 from '../images/card8.png'
import card9 from '../images/card9.png'
import card10 from '../images/card10.png'
import card11 from '../images/card11.png'
import card12 from '../images/card12.png'

const Page6 = () => {
  return (
    <>
      <Navbar />
      <div className="blog py-24 px-4 md:px-8 lg:px-14 bg-[#010101]">
        <div className="blog-title animate-fadeIn">
          <h1 className='text-white text-9xl xl:text-[250px] xl:leading-[200px] md:text-9xl py-6 lg:text-[100px] leading-tight md:leading-[80px] lg:leading-[100px] font-semibold text-start'>
            BLOG<span className='text-2xl md:text-4xl lg:text-5xl'>.</span>
          </h1>
        </div>
        <div className="blog-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-4 lg:px-8">
          {[card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12].map((card, index) => (
            <div key={index} className="blog-card rounded-xl overflow-hidden border border-[#646467] p-4 animate-zoomIn">
              <img src={card} className='w-full rounded-t-xl' alt={`Card ${index + 1}`} />
              <h1 className='text-white text-xl md:text-2xl lg:text-3xl uppercase mt-4'>The Power of Visual <br /> Identity: How Branding <br /> Transforms Businesses</h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page6
