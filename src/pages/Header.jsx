// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-red-700 text-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">Move My Stuffs</Link>

        {/* Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="text-xl hover:text-gray-200">Home</Link>
          <Link to="/household" className="text-xl hover:text-gray-200">Household Shifting</Link>
          <Link to="/vehicle" className="text-xl hover:text-gray-200">Vehicle Transport</Link>
          <Link to="/office" className="text-xl hover:text-gray-200">Office Relocation</Link>
          <Link to="/get-quote" className="text-xl hover:text-gray-200">Contact Us</Link>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-600 py-4">
            <nav className="flex flex-col items-center space-y-4">
              <Link to="/" className="text-xl text-white">Home</Link>
              <Link to="/household" className="text-xl text-white">Household Shifting</Link>
              <Link to="/vehicle" className="text-xl text-white">Vehicle Transport</Link>
              <Link to="/office" className="text-xl text-white">Office Relocation</Link>
              <Link to="/get-quote" className="text-xl text-white">Contact Us</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
