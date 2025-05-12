import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import office from "../assets/office/office.webp"
import vehicle from "../assets/car-removebg-preview.png";
import household from "../assets/packers-and-movers-lucknow-removebg-preview.png";
import yeartag from "../assets/10year.png"; 
import Highlights from "./Highlights";

const Home = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  // Show quote form after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuoteForm(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <div className="w-full font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1604147706284-ef290433ab29"
            alt="Move My Stuffs Hero"
            className="w-full h-[75vh] object-cover brightness-75"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Move My Stuffs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-2xl max-w-2xl"
            >
              Your Trusted Packers & Movers – Government, GST, and I.B.A
              Approved
            </motion.p>

            <motion.a
              href="https://wa.me/919087893000"
              className="mt-6 inline-flex items-center bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 animate-pulse"
              initial={{ scale: 0.9 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaWhatsapp className="mr-2" /> Chat on WhatsApp
            </motion.a>
          </div>
        </section>

        {/* Quote Form Modal */}
        {showQuoteForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
            >
              <h2 className="text-2xl font-semibold mb-4">Get Free Quote</h2>

              <button
                onClick={() => setShowQuoteForm(false)}
                className="mt-4 text-sm text-red-500 hover:underline"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>

      {/* Highlights */}

      <Highlights />

      {/* Services Preview */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
            <Link to={service.link} key={index}>
              <div className="bg-red-800 text-white font-bold rounded-lg shadow-lg p-4 hover:shadow-xl transition cursor-pointer">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Info & CTA */}
      <section className="bg-blue-600 text-white py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready for a Hassle-Free Move?
        </h2>
        <p className="mb-4">Contact our team today for a free quote!</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> Sales & Marketing: +91 9087893000
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> Help Line: +91 7253055609
          </p>
        </div>
        <a
          href="/get-quote"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100"
        >
          Get Free Quote
        </a>
      </section>

      {/* Footer / Address & Social */}
      <footer className="bg-gray-900 text-white py-8 px-4 ">
        <div className="text-center mb-6">
          <h4 className="text-xl font-semibold mb-2">Registered Address</h4>
          <p className="text-sm">
            No 3A, Mettu Kalazni Street, Adambakkam, Chennai - 600088
          </p>
        </div>

        <div className="flex justify-center gap-6 text-xl mb-4">
          <a
            href="https://www.instagram.com/move_mystuffs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100076636426701"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@movemystuffs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.google.com/maps/place/MoveMyStuffs/@12.9792478,80.194448"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            aria-label="Google Map"
          >
            <FaMapMarkerAlt />
          </a>
        </div>

        <p className="text-center text-xs text-gray-400">
          &copy; 2025 Move My Stuffs. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
