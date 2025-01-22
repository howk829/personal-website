import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Navbar Container */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500 transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition duration-200">About</Link>
          <Link to="/projects" className="hover:text-blue-500 transition duration-200">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500 transition duration-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-gray-800 text-white py-3 px-6 space-y-2"
        >
          <Link
            to="/"
            className="block hover:text-blue-500 transition duration-200"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-500 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block hover:text-blue-500 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block hover:text-blue-500 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
