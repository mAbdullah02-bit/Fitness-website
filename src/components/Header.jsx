import React from 'react'
import { Link } from 'react-router-dom'
import { BiCart } from 'react-icons/bi'

function Header() {
  return (
    <header className="bg-transparent z-50 fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5 px-9">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="h-[70px] w-auto" />
        </Link>

        <nav className="flex space-x-6 text-white text-sm uppercase font-semibold px-5">
          <Link to="/home" className="transition hover:duration-300 hover:text-red-800">Home</Link>
          <Link to="/classes" className="transition hover:duration-300 hover:text-red-800">Classes</Link>
          <Link to="/bmi" className="transition hover:duration-300 hover:text-red-800">BMI Calc</Link>
          <Link to="/about" className="transition hover:duration-300 hover:text-red-800">About Us</Link>
          <Link to="/shop" className="transition hover:duration-300 hover:text-red-800">Shop</Link>
          <Link to="/cart" className="transition hover:duration-300 hover:text-red-800 text-xl">
            <BiCart />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
