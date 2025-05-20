import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import v1  from "../../assets/vehicle/v1.jpg"
import v2  from "../../assets/vehicle/v2.jpg"
import v3  from "../../assets/vehicle/v3.jpg"
import v4  from "../../assets/vehicle/v4.jpg"
import v5  from "../../assets/vehicle/v5.jpg"
import v6  from "../../assets/vehicle/v6.jpg"


// Animation variants for staggered appearance of sections
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut", // Smooth easing
      delayChildren: 0.4, // Delay before children start animating
      staggerChildren: 0.15, // Stagger the animation of direct children
    },
  },
};

// Variant for main headings
const headingVariants = {
  initial: { opacity: 0, y: -15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Variant for subheadings and paragraphs
const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2, // Small delay after parent element animation
    },
  },
};

// Variant for list items
const listItemVariants = {
  initial: { opacity: 0, x: -10 }, // Slide in slightly from the left
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Variant for gallery items with a subtle fade and scale
const galleryItemVariants = {
  initial: { opacity: 0, scale: 0.98 }, // Slightly less aggressive initial state
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Variant for staggering gallery items
const galleryContainerVariants = {
  animate: { transition: { staggerChildren: 0.1 } }, // Stagger delay between gallery items
};

const VehicleService = () => {

  const vech=[v6,v2,v3,v4,v5,v1];

  const companyName = "Your Trusted Transporters"; // Replace with your actual company name

  return (
    <motion.div
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 bg-white rounded-xl shadow-2xl" // Enhanced container styling
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header Section */}
      <motion.header
        className="text-center mb-10 md:mb-14"
        variants={headingVariants}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800 tracking-tight mb-4">
          {" "}
          {/* Stronger heading, using teal */}
          Reliable Vehicle Transport Solutions
        </h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          variants={textVariants}
        >
          {" "}
          {/* Larger, darker text, centered and constrained width */}
          Safe, secure, and timely transport for your car, bike, or other
          vehicles.
        </motion.p>
      </motion.header>

      {/* Introduction/Description Section */}
      <motion.section className="mb-12 md:mb-16" variants={textVariants}>
        <p className="text-lg text-gray-800 leading-relaxed">
          Transporting a vehicle requires specialized knowledge and equipment to
          ensure its safety. At{" "}
          <span className="font-semibold text-teal-700">{companyName}</span>, we
          provide expert vehicle transport services for all types of vehicles,
          from cars and motorcycles to ATVs and more. Our team follows stringent
          safety protocols and uses state-of-the-art carriers to guarantee your
          vehicle arrives at its destination in the same condition it was picked
          up. We offer both open and enclosed transport options to meet your
          specific needs and preferences.
        </p>
        <motion.ul
          className="list-disc list-inside mt-6 text-gray-700 leading-relaxed space-y-2"
          variants={containerVariants}
        >
          {" "}
          {/* Stagger list items */}
          <motion.li variants={listItemVariants}>
            Secure handling and loading by trained professionals.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Choice of open or enclosed transport options.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Real-time tracking for peace of mind.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Comprehensive inspection before and after transport.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Flexible pickup and delivery schedules.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Competitive pricing with transparent quotes.
          </motion.li>
        </motion.ul>
      </motion.section>

      {/* Gallery Section */}
      <section className="mb-12 md:mb-16">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-gray-900"
          variants={headingVariants}
        >
          {" "}
          {/* Consistent heading style */}
          Vehicles We've Transported
        </motion.h2>
        <motion.p className="text-gray-600 mb-8 italic" variants={textVariants}>
          {" "}
          {/* Styled as italic placeholder note */}
          (A gallery showcasing our vehicle transport capabilities will be
          uploaded soon.)
        </motion.p>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" // Increased gap
          variants={galleryContainerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Using placeholder divs with background instead of img tags directly */}
          {[...Array(6)].map(
            (
              _,
              index // Increased placeholder count
            ) => (
              <motion.div
                key={index}
                className="bg-gray-100 aspect-video rounded-lg shadow-xl overflow-hidden relative border border-gray-200 flex items-center justify-center text-gray-400 text-sm" // Enhanced styling
                variants={galleryItemVariants}
              >
                <img src={vech[index]} ></img>
              </motion.div>
            )
          )}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12 md:mt-16">
        <motion.h3
          className="text-3xl font-semibold text-teal-800 mb-6"
          variants={headingVariants}
        >
          {" "}
          {/* Consistent heading style */}
          Why Choose <span className="font-bold">{companyName}</span>?
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          {/* Increased gap */}
          <motion.ul
            className="list-none space-y-5"
            variants={containerVariants}
          >
            {" "}
            {/* Increased space and stagger */}
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong className="font-semibold text-gray-900">
                  Experienced Handlers:
                </strong>{" "}
                Our team is trained specifically in secure vehicle handling.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg
                className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                {/* Yellow for tracking */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.738A48.02 48.02 0 013 16V6c0-1.074.164-2.117.471-3.102M13 16l9.283 4.642a1 1 0 001.717-.951L19 12l2.283-4.642a1 1 0 00-1.717-.951L13 8m-6 8h.01M5 20h.01"
                />
              </svg>
              <span>
                <strong className="font-semibold text-gray-900">
                  Real-Time Visibility:
                </strong>{" "}
                Track your vehicle's journey from pickup to delivery.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg
                className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                {/* Blue for options */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 7v2m0 4h.01M7 16h.01M17 16h.01M17 18h.01"
                />
              </svg>
              <span>
                <strong className="font-semibold text-gray-900">
                  Flexible Transport:
                </strong>{" "}
                Choose the best method for your vehicle (open or enclosed).
              </span>
            </motion.li>
          </motion.ul>
          <motion.ul
            className="list-none space-y-5"
            variants={containerVariants}
          >
            {" "}
            {/* Increased space and stagger */}
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg
                className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                {/* Purple for safety */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.279a8.958 8.958 0 013.468-.844H21a2 2 0 012 2v1c0 .476-.105.928-.304 1.344l-1.396 2.982c-.837 1.79-3.225 3.599-5.014 3.599H8.214c-1.79 0-3.197-1.81-4.033-3.599l-1.396-2.982A12.02 12.02 0 013.244 12H3a2 2 0 01-2-2V9c0-.476.105-.928.304-1.344zm7.023-2.272L8.214 4h-1.42c-1.79 0-3.197 1.81-4.033 3.599l-1.396 2.982A12.02 12.02 0 013.244 12H3a2 2 0 012-2v1c0 .476-.105.928-.304 1.344L6.094 16.5c.837 1.79 3.225 3.599 5.014 3.599H16.786c1.79 0 3.197-1.81 4.033-3.599l1.396-2.982A12.02 12.02 0 0120.756 12H21a2 2 0 012-2v-1c0-.476-.105-.928-.304-1.344zm-.734-3.599H16.786c-1.79 0-3.197 1.81-4.033 3.599l-1.396 2.982a12.02 12.02 0 01-1.023 2.179h-.002c-.476-.21-.928-.446-1.344-.705l-1.396-2.982c-.837-1.79-3.225-3.599-5.014-3.599z"
                />
              </svg>
              <span>
                <strong className="font-semibold text-gray-900">
                  Damage-Free Commitment:
                </strong>{" "}
                Your vehicle's safety is our absolute priority.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg
                className="w-6 h-6 text-red-500 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                {/* Red for punctuality */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong className="font-semibold text-gray-900">
                  Punctual Delivery:
                </strong>{" "}
                We strive for timely and reliable delivery of your vehicle.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg
                className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                {/* Pink for value */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 9.5h1.5m-1.5 3H12m-7 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>
                <strong className="font-semibold text-gray-900">
                  Transparent Pricing:
                </strong>{" "}
                Clear and competitive quotes with no surprises.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="mt-16 text-center bg-teal-50 py-10 px-6 rounded-lg shadow-inner border border-teal-100"
        variants={textVariants}
      >
        {" "}
        {/* Light teal background, border */}
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-800 mb-4">
          Transport Your Vehicle with Confidence
        </h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          variants={textVariants}
        >
          Ready to transport your vehicle safely and securely? Contact{" "}
          <span className="font-semibold text-teal-700">{companyName}</span>{" "}
          today for a free, no-obligation quote.
        </motion.p>
        {/* Replace with your actual contact link or button */}
        <motion.div variants={listItemVariants}>
          <Link
            to="/get-quote"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Get a Free Vehicle Transport Quote
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default VehicleService;
