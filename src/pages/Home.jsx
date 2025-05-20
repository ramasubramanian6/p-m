import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Highlights from "./Highlights";
import office from "../assets/office/office.webp";
import vehicle from "../assets/car-removebg-preview.png";
import household from "../assets/packers-and-movers-lucknow-removebg-preview.png";
import home_img from "../assets/family-moving-into-new-home.jpg";
import packing from "../assets/icons/Logistics-bro.png";
import loading from "../assets/icons/Logistics-amico.png";
import storage from "../assets/icons/Fitting piece-bro.png";
import ContactSection from "./components/ContactSection";
import office_img from "../assets/vehicle/v3.jpg";
import vehicle_img from "../assets/vehicle/v2.jpg"; // optional

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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const heroImages = [ home_img];

const Home = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuoteModal(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-visible">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[currentImageIndex]}
            src={heroImages[currentImageIndex]}
            alt="Move My Stuffs Hero"
            className="absolute inset-0 w-full h-full object-cover filter brightness-60 saturate-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

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
           <motion.div
                className="text-center mt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <motion.p
                  className="text-gray-50 text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Prefer to talk to our team directly?
                </motion.p>

                <motion.a
                  href="tel:+919087893000"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhoneAlt className="text-xl" />
                  Call Us Now
                </motion.a>
              </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
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
              <div className="text-center mt-6">
                <Link to="/get-quote" className="text-blue-600 hover:underline font-semibold">
                  Go to Full Quote Page
                </Link>
              </div>

              {/* ✅ Call to Action */}
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-lg mt-[-2rem] relative z-10">
        <Highlights />
      </section>

      {/* Services Section */}
      <motion.section
        className="py-20 md:py-28 px-6 bg-blue-700 text-white text-center"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight" variants={itemVariants}>
          Our Comprehensive Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={sectionVariants}
        >
          {[
            { title: "Household Shifting", img: household, link: "/household" },
            { title: "Office Relocation", img: office, link: "/office" },
            { title: "Vehicle Transport", img: vehicle, link: "/vehicle" },
            { title: "Ware House", img: packing, link: "/packing-unpacking" },
            { title: "Loading & Unloading", img: loading, link: "/loading-unloading" },
            { title: "Transportation", img: storage, link: "/storage" },
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

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
