import React, { useState, useRef } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
// Assuming these imports are correctly configured for your project
import office from "../assets/office/office.webp"
import vehicle from "../assets/car-removebg-preview.png";
import household from "../assets/packers-and-movers-lucknow-removebg-preview.png";
// Assuming yeartag is used elsewhere or will be integrated
// import yeartag from "../assets/10year.png";
// Assuming Highlights component is styled internally
import Highlights from "./Highlights";
import home_img from "../assets/family-moving-into-new-home.jpg"
// Assuming GetQuote component exists and is styled separately (as done previously)
// import GetQuote from "./GetQuote"; // Uncomment if you render the GetQuote form directly here

// Variants for staggered sections on scroll/view
const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
        },
    },
};

// Variants for individual elements within sections
const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

// Variants for the quote form modal
const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } },
};

const Home = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Show quote form modal after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuoteModal(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden font-sans text-gray-800 bg-gray-50"> {/* Clean light gray background */}
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-visible">
        <img
          src={home_img }
          alt="Move My Stuffs Hero"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50 saturate-150" // Image filter for overlay effect
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-10">
          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          >
            Move My Stuffs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="text-lg md:text-2xl max-w-3xl mb-8 drop-shadow-md"
          >
            Your Trusted Packers & Movers – Government, GST, and I.B.A. Approved
          </motion.p>

          <motion.a
            href="https://wa.me/919087893000"
            className="inline-flex items-center bg-green-500 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-green-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="mr-3 text-2xl" /> Chat on WhatsApp
          </motion.a>
        </div>
      </section>

      {/* Quote Form Modal */}
      <AnimatePresence>
      {showQuoteModal && (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative"
            >
                {/* Close Button */}
                <button
                    onClick={() => setShowQuoteModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl transition-colors duration-200"
                    aria-label="Close modal"
                >
                    ×
                </button>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get a Free Quote</h2>
                <p className="text-gray-700 mb-6">
                    Fill out the form below to get a quick quote for your moving needs.
                </p>
                {/* You would place your <GetQuote /> component here */}
                {/* <GetQuote /> */}
               


                <div className="text-center mt-6">
                    <Link to="/get-quote" className="text-blue-600 hover:underline font-semibold">
                        Go to Full Quote Page
                    </Link>
                </div>
            </motion.div>
        </motion.div>
      )}
      </AnimatePresence>


      {/* Highlights (Assuming styled internally) */}
      {/* Clean white background with shadow and overlap */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-lg mt-[-2rem] relative z-10"> {/* Adjusted negative margin-top */}
        <Highlights />
      </section>


      {/* Services Preview */}
      <motion.section
        className="py-16 md:py-24 px-6 bg-blue-700 text-white text-center" // Solid professional blue
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
            variants={itemVariants}
        >
            Our Comprehensive Services
        </motion.h2>
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={sectionVariants}
        >
          {[
            {
              title: "Household Shifting",
              img: household,
              link: "/household",
            },
            {
              title: "Office Relocation",
              img: office,
              link: "/office",
            },
            {
              title: "Vehicle Transport",
              img: vehicle,
              link: "/vehicle",
            },
          ].map((service, index) => (
            <motion.div variants={itemVariants} key={index}>
                <Link to={service.link} className="block h-full">
                  <div className="bg-white text-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center h-full transition-transform transform hover:scale-103 hover:shadow-2xl duration-300 ease-in-out">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full max-h-40 object-contain rounded-md mb-6"
                    />
                    <h3 className="text-xl font-semibold mt-auto">{service.title}</h3>
                  </div>
                </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Info & CTA */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-br from-blue-800 to-blue-950 text-white text-center" // Dark blue gradient
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
        >
          Ready for a Hassle-Free Move?
        </motion.h2>
        <motion.p
            className="mb-8 text-lg md:text-xl max-w-2xl mx-auto"
            variants={itemVariants}
        >
            Experience a seamless and stress-free relocation process with our expert team. Contact us today for a free consultation and personalized quote!
        </motion.p>
        <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 text-lg"
            variants={sectionVariants}
        >
          <motion.p className="flex items-center gap-3" variants={itemVariants}>
            <FaPhoneAlt className="text-xl text-blue-300" /> Sales & Marketing: <span className="font-semibold">+91 9087893000</span>
          </motion.p>
          <motion.p className="flex items-center gap-3" variants={itemVariants}>
            <FaPhoneAlt className="text-xl text-blue-300" /> Help Line: <span className="font-semibold">+91 7253055609</span>
          </motion.p>
        </motion.div>
        <motion.a
          href="/get-quote"
          className="inline-block bg-white text-blue-900 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
        >
          Get Free Quote
        </motion.a>
      </motion.section>

      {/* Footer / Address & Social */}
      <motion.footer
        className="bg-gray-900 text-white py-12 px-6 text-center" // Dark gray
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <h4 className="text-2xl font-semibold mb-3 text-gray-200">Registered Address</h4>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            No 3A, Mettu Kalazni Street, Adambakkam, Chennai - 600088
          </p>
        </motion.div>

        <motion.div
            className="flex justify-center gap-8 text-3xl mb-8"
            variants={sectionVariants}
        >
          <motion.a
            href="https://www.instagram.com/move_mystuffs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-200 transform hover:-translate-y-1"
            aria-label="Instagram"
            variants={itemVariants}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100076636426701"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-200 transform hover:-translate-y-1"
            aria-label="Facebook"
            variants={itemVariants}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@movemystuffs" // Double check this URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700 transition-colors duration-200 transform hover:-translate-y-1"
            aria-label="YouTube"
            variants={itemVariants}
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="https://www.google.com/maps/place/MoveMyStuffs/@12.9792478,80.194448" // Double check this URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200 transform hover:-translate-y-1"
            aria-label="Google Map"
            variants={itemVariants}
          >
            <FaMapMarkerAlt />
          </motion.a>
        </motion.div>

        <motion.p className="text-center text-sm text-gray-400" variants={itemVariants}>
          © 2025 Move My Stuffs. All Rights Reserved.
        </motion.p>
      </motion.footer>
    </div>
  );
};

export default Home;