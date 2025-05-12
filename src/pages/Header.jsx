import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Keep react-icons for toggler
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

// Variants for the header bar entry
const headerVariants = {
  initial: { y: -100 }, // Start off-screen above
  animate: { y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Slide down smoothly
};

// Variants for desktop navigation links stagger
const navVariants = {
    initial: { opacity: 0 }, // Initial state for the container (doesn't animate itself)
    animate: {
        opacity: 1, // Final state for the container (doesn't animate itself)
        transition: {
            staggerChildren: 0.1 // Stagger links within the container
        }
    }
};

// Variants for individual navigation links
const linkVariants = {
    initial: { y: -20, opacity: 0 }, // Start slightly up and hidden
    animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }, // Slide down and fade in
    hover: { scale: 1.05, transition: { duration: 0.2 } }, // Scale up slightly on hover
    tap: { scale: 0.95 }, // Scale down slightly on tap
};

// Variants for mobile dropdown menu
const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 }, // Start hidden and slightly up
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }, // Slide down and fade in
    exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } }, // Slide up and fade out on exit
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Apply header entry animation
    <motion.header
        className="bg-blue-800 text-white shadow-xl fixed w-full z-50 top-0" // Darker, professional blue, stronger shadow
        variants={headerVariants}
        initial="initial"
        animate="animate"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity duration-200"> {/* Adjusted size, added tracking, subtle hover */}
            Move My Stuffs
        </Link>

        {/* Menu Toggler for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" // Focus ring for accessibility
                aria-label="Toggle mobile menu" // Accessibility label
            >
                {/* Animate icon change (requires AnimatePresence if mounting/unmounting, but simple transition on color/size is easier) */}
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />} {/* Adjusted icon size slightly */}
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <motion.nav
            className="hidden lg:flex space-x-8"
            variants={navVariants} // Apply stagger variants
            initial="initial"
            animate="animate"
        >
             {/* Apply item variants to each link */}
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap"><Link to="/" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Home</Link></motion.div> {/* Adjusted text size, weight, hover color */}
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap"><Link to="/household" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Household Shifting</Link></motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap"><Link to="/vehicle" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Vehicle Transport</Link></motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap"><Link to="/office" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Office Relocation</Link></motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap"><Link to="/get-quote" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">Contact Us</Link></motion.div> {/* Changed "Contact Us" to "Get Quote" route */}
        </motion.nav>

        {/* Mobile Dropdown Menu (Animated with AnimatePresence) */}
        {/* Use AnimatePresence to animate presence/exit */}
        <AnimatePresence>
        {menuOpen && (
            <motion.div
                key="mobile-menu" // Key is required for AnimatePresence
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit" // Animate on exit
                className="lg:hidden absolute top-full left-0 w-full bg-blue-700 py-4 shadow-md" // Position below header, darker blue, subtle shadow
            >
            <nav className="flex flex-col items-center space-y-6"> {/* Increased space */}
              {/* You can also apply itemVariants here if you want staggering on open */}
              <Link to="/" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Home</Link> {/* Added onClick to close menu */}
              <Link to="/household" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Household Shifting</Link>
              <Link to="/vehicle" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Vehicle Transport</Link>
              <Link to="/office" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Office Relocation</Link>
              <Link to="/get-quote" className="text-lg font-medium text-white hover:text-blue-200 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Contact Us</Link> {/* Changed route name */}
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;