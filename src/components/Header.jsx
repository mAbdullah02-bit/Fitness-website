import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { useCartStore } from '../store/cart-store';
import { IoReorderThreeSharp } from "react-icons/io5";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        <Link to="/">
          <img
            src={scrolled ? "/images/logoblack.png" : "/images/logo.png"}
            alt="Logo"
            className="h-[70px] w-auto"
          />
        </Link>

        {/* Normal Navbar for md and larger screens */}
        <nav
          className={`hidden md:flex md:items-center md:space-x-6 p-2 md:p-0 text-sm uppercase sm:font-semibold px-3 transition-colors duration-300 ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          <Link
            to="/"
            className={`transition hover:duration-300 mx-4 my-2 md:my-0 ${
              scrolled ? 'text-black hover:text-red-800' : 'text-white hover:text-red-800'
            }`}
          >
            Home
          </Link>
          <Link
            to="/classes"
            className={`transition hover:duration-300 mx-4 my-2 md:my-0 ${
              scrolled ? 'text-black hover:text-red-800' : 'text-white hover:text-red-800'
            }`}
          >
            Classes
          </Link>
          <Link
            to="/bmi"
            className={`transition hover:duration-300 mx-4 my-2 md:my-0  ${
              scrolled ? 'text-black hover:text-red-800' : 'text-white hover:text-red-800'
            }`}
          >
            BMI Calc
          </Link>
          <Link
            to="/about"
            className={`transition hover:duration-300  mx-4 my-2 md:my-0 ${
              scrolled ? 'text-black hover:text-red-800' : 'text-white hover:text-red-800'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/shop"
            className={`transition hover:duration-300 mx-4 my-2 md:my-0 ${
              scrolled ? 'text-black hover:text-red-800' : 'text-white hover:text-red-800'
            }`}
          >
            Shop
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4 mx-3">
          {/* Toggle Menu Icon for smaller screens */}

          <Link
            to="/cart"
            className={`transition hover:duration-300 text-xl flex relative  mx-0 my-2 md:my-0 ${
              scrolled ? 'text-black hover:text-red-800' : 'text-white hover:text-red-800'
            }`}
          >
            <BiCart className="text-2xl" />
            {cart.length > 0 ? (
              <span className="absolute top-2/3 right-1/2 text-sm w-5 h-5 font-extralight bg-red-800 rounded-full text-center text-white hover:text-white">
                {cart.length}
              </span>
            ) : null}
          </Link>
            <IoReorderThreeSharp
              className={`md:hidden text-2xl cursor-pointer mx-4 my-2 md:my-0 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
              onClick={toggleMenu}
            />
        </div>

        {/* Dropdown Menu for small screens */}
        {isMenuOpen && (
          <nav
            className={`md:hidden flex space-y-2 bg-white p-4 absolute top-full left-0 w-full shadow-lg ${
              scrolled ? 'text-black' : 'text-black'
            }`}
          >
            <Link
              to="/"
              className="transition hover:duration-300 mx-4 my-2 md:my-0 hover:text-red-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/classes"
              className="transition hover:duration-300 mx-4 my-2 md:my-0 hover:text-red-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Classes
            </Link>
            <Link
              to="/bmi"
              className="transition hover:duration-300 mx-4 my-2 md:my-0 hover:text-red-800"
              onClick={() => setIsMenuOpen(false)}
            >
              BMI Calc
            </Link>
            <Link
              to="/about"
              className="transition hover:duration-300 mx-4 my-2 md:my-0 hover:text-red-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/shop"
              className="transition hover:duration-300 mx-4 my-2 md:my-0 hover:text-red-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
