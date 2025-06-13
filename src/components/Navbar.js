
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="bg-[#0a0f1c] py-4 px-4 text-white shadow-md">
  <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
    <h1 className="font-bold text-lg">Nahom's Portfolio</h1>
    <ul className="hidden md:flex  space-x-6">
      <li><a href="#about">About</a></li>
      <li><a href="#tech">Tech</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
        {/* Hamburger for mobile */}
  <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden focus:outline-none"
  aria-label="Toggle menu"
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center text-lg">
          <li><a href="#about" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#Tech" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Tech</a></li>
          <li><a href="#projects" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
