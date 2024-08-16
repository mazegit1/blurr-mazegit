import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuicon from '../images/menuicon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#010101] bg-opacity-70 fixed z-30 top-0 px-14 sm:px-6 transition-all ease-in-out duration-300 w-full text-white py-4">
    <div className="transition-all sm:px-6 ease-in-out duration-300 container mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link to="/" className="text-5xl font-bold">BLURR</Link>
      </h1>
      <button 
        className="flex items-center justify-center w-8 h-8" 
        onClick={toggleMenu}
      >
        <img src={menuicon} alt="Menu" className="scale-[300%]" />
      </button>
    </div>
    <nav className={`absolute top-full right-0 w-fit px-32 py-6 bg-[#010101] bg-opacity-60 transition-all ease-in-out duration-300 ${
      isMenuOpen ? 'block animate-slideDown' : 'hidden animate-slideUp'
    }`}>
      <ul className="flex flex-col items-center space-y-4 py-2">
        <li>
          <Link 
            to="/" 
            className="hover:scale-110 block px-4 py-1 transition-all ease-in-out duration-200 text-2xl font-semibold hover:border-b text-gray-400 hover:text-white hover:border-b-white" 
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/works" 
            className="hover:scale-110 block px-4 py-1 transition-all ease-in-out duration-200 text-2xl font-semibold hover:border-b text-gray-400 hover:text-white hover:border-b-white" 
            onClick={() => setIsMenuOpen(false)}
          >
            WORKS
          </Link>
        </li>
        <li>
          <Link 
            to="/framework" 
            className="hover:scale-110 block px-4 py-1 transition-all ease-in-out duration-200 text-2xl font-semibold hover:border-b text-gray-400 hover:text-white hover:border-b-white" 
            onClick={() => setIsMenuOpen(false)}
          >
            FRAMEWORK
          </Link>
        </li>
        <li>
          <Link 
            to="/cherry-picks" 
            className="hover:scale-110 block px-4 py-1 transition-all ease-in-out duration-200 text-2xl font-semibold hover:border-b text-gray-400 hover:text-white hover:border-b-white" 
            onClick={() => setIsMenuOpen(false)}
          >
            CHERRY PICKS
          </Link>
        </li>
        <li>
          <Link 
            to="/get-in-touch" 
            className="hover:scale-110 block px-4 py-1 transition-all ease-in-out duration-200 text-2xl font-semibold hover:border-b text-gray-400 hover:text-white hover:border-b-white" 
            onClick={() => setIsMenuOpen(false)}
          >
            GET IN TOUCH
          </Link>
        </li>
        <li>
          <Link 
            to="/blog"   
            className="hover:scale-110 block px-4 py-1 transition-all ease-in-out duration-200 text-2xl font-semibold hover:border-b text-gray-400 hover:text-white hover:border-b-white" 
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG.
          </Link>
        </li>
        <li>
          <Link 
            to="/transforms"  
            className="hover:scale-110 block px-4 py-1 transition-all ease-in-out duration-200 text-2xl font-semibold hover:border-b text-gray-400 hover:text-white hover:border-b-white" 
            onClick={() => setIsMenuOpen(false)}
          >
            TRANSFORMS
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  
  );
};

export default Navbar;
