import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B0B0F]/90 backdrop-blur-md text-white px-6 py-4 z-50 border-b border-gray-800">

      <div className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Logo */}
        <div className="text-2xl font-bold">
          Aditya<span className="text-orange-500">.BS</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-300">

          <li>
            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-orange-500 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-orange-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-orange-500 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
        <ul className="flex flex-col items-center mt-6 space-y-5 text-lg font-medium md:hidden text-gray-300">

          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          </li>

          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          </li>

          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          </li>

          <li>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          </li>

          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </li>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;