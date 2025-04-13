import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 py-4 z-50 shadow-md rounded-b-3xl">

      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-arizonia">Aditya Sonawane</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          <li className="hover:text-yellow-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-300">
            <a href="#contact">Contact us</a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-4 text-lg font-semibold md:hidden">
          <li className="hover:text-yellow-300">
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="hover:text-yellow-300">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="hover:text-yellow-300">
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="hover:text-yellow-300">
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact us</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
