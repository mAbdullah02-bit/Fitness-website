import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { useCartStore } from '../store/cart-store';
function Header() {
  const [scrolled, setScrolled] = useState(false);
const cart=useCartStore((state)=>state.cart)
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-lg ' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2 px-9 ">
        <Link to="/">
          <img
            src={scrolled?"/images/logoblack.png"   :"/images/logo.png"}
            alt="Logo"
            className={`h-[70px] w-auto  `}
          />
        </Link>

        <nav
          className={`flex space-x-6 text-sm uppercase font-semibold px-5 transition-colors duration-300 ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          <Link
            to="/"
            className={`transition hover:duration-300 ${
              scrolled ? 'hover:text-red-800' : 'hover:text-red-800'
            }`}
          >
            Home
          </Link>
          <Link
            to="/classes"
            className={`transition hover:duration-300 ${
              scrolled ? 'hover:text-red-800' : 'hover:text-red-800'
            }`}
          >
            Classes
          </Link>
          <Link
            to="/bmi"
            className={`transition hover:duration-300 ${
              scrolled ? 'hover:text-red-800' : 'hover:text-red-800'
            }`}
          >
            BMI Calc
          </Link>
          <Link
            to="/about"
            className={`transition hover:duration-300 ${
              scrolled ? 'hover:text-red-800' : 'hover:text-red-800'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/shop"
            className={`transition hover:duration-300 ${
              scrolled ? 'hover:text-red-800' : 'hover:text-red-800'
            }`}
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className={`transition hover:duration-300 text-xl flex ${
              scrolled ? 'hover:text-red-800' : 'hover:text-red-800'
            }`}
          >
            <BiCart className='text-2xl' /> 
          <p className='text-[0.8rem] px-1 py-0 font-extralight bg-red-800  rounded-full text-center text-white hover:text-white'>{cart.length}</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
