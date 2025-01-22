import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          {/* <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li> */}
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-800 text-center space-y-4 p-4">
          <li><Link to="/" className="hover:text-blue-400" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400" onClick={toggleMenu}>Projects</Link></li>
          {/* <li><Link to="/blog" className="hover:text-blue-400" onClick={toggleMenu}>Blog</Link></li> */}
          <li><Link to="/contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;