import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginClick = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleSignUpClick = () => {
    navigate('/Register');
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative bg-transparent top-0 left-0 right-0 z-50 flex justify-between items-center h-24 px-4 lg:px-16">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold text-customGreen">
        <img
          src={logo}
          alt="logo"
          className="h-28 w-16 rounded-full object-cover mr-2"
        />
        <span className="ml-2">
          DZ<span className="text-black">-Teacher</span>
        </span>
      </div>

      {/* Links for larger screens */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-20 left-0 right-0 bg-white shadow-md p-4 space-y-4 md:space-y-0 md:flex md:space-x-2 md:static md:shadow-none`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-black hover:text-customGreen font-gilroy font-semibold hover:underline ${
                isActive ? 'text-customGreen' : ''
              } px-2`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacherslist"
            className={({ isActive }) =>
              `block text-black hover:text-customGreen font-gilroy font-semibold hover:underline ${
                isActive ? 'text-customGreen' : ''
              } px-2`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Teachers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-black hover:text-customGreen font-gilroy font-semibold hover:underline ${
                isActive ? 'text-customGreen' : ''
              } px-2`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              `block text-black hover:text-customGreen font-gilroy font-semibold hover:underline ${
                isActive ? 'text-customGreen' : ''
              } px-2`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
        {/* Buttons for smaller screens */}
        <li className="md:hidden">
          <button
            className="block text-black font-gilroy font-medium border border-black px-3 py-1  text-left  active:scale-[.98] active:duration-75 transition-all  ease-in-out hover:text-customGreen"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </li>
        <li className="md:hidden">
          <button
            className="block text-white bg-black font-gilroy font-medium  border border-black rounded px-3 py-1  text-left  active:scale-[.98] active:duration-75 transition-all  ease-in-out hover:shadow-3xl"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </li>
      </ul>

      {/* Buttons for larger screens */}
      <div className="hidden md:flex items-center space-x-2">
        <button
          className="text-black font-gilroy font-medium border border-black px-4 py-2 rounded hover:bg-white hover:text-customGreen transition duration-300"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="bg-black text-white font-gilroy font-medium px-4 py-2 rounded 
           active:scale-[.98] active:duration-75 transition-all  ease-in-out"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
      </div>

     
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black  focus:outline-none">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
