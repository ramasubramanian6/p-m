import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
 import logo from '../assets/ads/Group 12.png'; // Adjust path as per your project structure

const headerVariants = {
  initial: { y: -100 },
  animate: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const navVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const linkVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-[#d9d9d9a4] text-white shadow-xl fixed w-full z-50 top-0"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo Image */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
          <img src={logo} alt="Move My Stuffs Logo" className="h-15 w-auto object-contain" />
          <span className='text-2xl font-bold '><span className='text-[#571b1bb0]'>M</span>O<span className='text-[#571b1bb0]'>VE</span>MY <span className='text-[#571b1bb0]'>ST</span>U<span className='text-[#571b1bb0]'>FFS</span></span>
           
        </Link>

        {/* Menu Toggler for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <motion.nav
          className="hidden lg:flex space-x-8"
          variants={navVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link to="/" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Home</Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link to="/household" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Household Shifting</Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link to="/vehicle" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Vehicle Transport</Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link to="/office" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Office Relocation</Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link to="/about-us" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">About Us</Link>
          </motion.div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden absolute top-full left-0 w-full bg-blue-700 py-4 shadow-md"
            >
              <nav className="flex flex-col items-center space-y-6">
                <Link to="/" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/household" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Household Shifting</Link>
                <Link to="/vehicle" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Vehicle Transport</Link>
                <Link to="/office" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Office Relocation</Link>
                <Link to="/about-us" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>About Us</Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
