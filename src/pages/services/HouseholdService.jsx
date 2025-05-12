import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

// Animation variants for the main container
const containerVariants = {
  initial: { opacity: 0, y: 30 }, // Start lower for a more noticeable slide-up
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9, // Longer duration for smoother entry
      ease: 'easeOut',
      when: "beforeChildren", // Animate container before children
      staggerChildren: 0.15, // Stagger children animation
    },
  },
};

// Variant for main headings with a subtle bounce/scale
const headingVariants = {
  initial: { opacity: 0, y: -20, scale: 0.95 }, // Start higher and slightly smaller
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7, // Longer duration
      ease: 'easeOut',
    },
  },
};

// Variant for subheadings and paragraphs with a gentle fade-in
const textVariants = {
  initial: { opacity: 0, y: 20 }, // Start lower
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7, // Longer duration
      ease: 'easeOut',
      delay: 0.2, // Delay after parent/heading animation
    },
  },
};

// Variant for list items with a subtle slide and fade
const listItemVariants = {
  initial: { opacity: 0, x: -20 }, // Slide in from the left
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6, // Longer duration
      ease: 'easeOut',
    },
  },
};


// Variant for gallery items with a more pronounced scale and fade
const imageBoxVariants = {
  initial: { opacity: 0, scale: 0.9 }, // More pronounced initial scale
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6, // Longer duration
      ease: 'easeOut',
    },
  },
};

const galleryVariants = {
    animate: { transition: { staggerChildren: 0.1 } }, // Faster stagger for gallery items
};


const HouseholdService = () => {
  const companyName = 'Your Trusted Movers'; // Replace with your actual company name

  return (
    <motion.div
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28 bg-white rounded-3xl shadow-4xl border border-gray-200" // Increased padding/margin, rounder corners, stronger shadow, subtle border
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.header className="text-center mb-12 md:mb-16" variants={headingVariants}>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"> {/* Larger, bolder heading */}
          Comprehensive Household Moving Services
        </h1>
        <motion.p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto" variants={textVariants}> {/* Centered and constrained width */}
          Your smooth and secure household relocation starts here.
        </motion.p>
      </motion.header>

      <section className="mb-16 md:mb-20"> {/* Increased bottom margin */}
        <motion.p className="text-lg text-gray-800 leading-relaxed" variants={textVariants}>
          Relocating your household is a significant event, and at <span className="font-bold text-indigo-800">{companyName}</span>, we understand the importance of a seamless transition. Our team of experienced professionals is dedicated to providing exceptional service, ensuring the safety and security of your belongings from start to finish. We utilize industry-best practices and high-quality packing materials to guarantee peace of mind throughout your move.
        </motion.p>
        <motion.ul className="list-disc list-inside mt-8 text-gray-700 leading-relaxed space-y-3" variants={containerVariants}> {/* Increased top margin and space */}
            <motion.li variants={listItemVariants}>Personalized relocation plans designed to meet your specific needs.</motion.li>
            <motion.li variants={listItemVariants}>Expert packing and crating services for all items, including fragile and valuable possessions.</motion.li>
            <motion.li variants={listItemVariants}>Reliable transportation with our well-maintained and secure fleet.</motion.li>
            <motion.li variants={listItemVariants}>Efficient and careful loading and unloading procedures.</motion.li>
            <motion.li variants={listItemVariants}>Optional unpacking and setup services to help you quickly settle into your new home.</motion.li>
            <motion.li variants={listItemVariants}>Dedicated customer support and transparent communication throughout your move.</motion.li>
        </motion.ul>
      </section>

      <section className="mb-16 md:mb-20"> {/* Increased bottom margin */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8" // Larger heading, more margin
          variants={headingVariants}
        >
          Our Recent Moves
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" // Consistent gap
          variants={galleryVariants}
          initial="initial"
          animate="animate"
        >
          {/* Placeholder image boxes */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 aspect-video rounded-xl shadow-xl overflow-hidden border border-gray-200 flex items-center justify-center text-gray-400 text-sm italic" // Rounder corners, stronger shadow
              variants={imageBoxVariants}
            >
                 Image Placeholder {index + 1}
                {/* Add actual image here when available */}
                {/* <img src="/path/to/image.jpg" alt="Household shifting service" className="object-cover w-full h-full" /> */}
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="mt-10 text-center text-md text-gray-600 italic" // More top margin, centered and italicized
          variants={textVariants}
        >
          (Showcasing examples of our professional household moving services.)
        </motion.p>
      </section>

      <section className="mt-16 md:mt-20"> {/* Increased top margin */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-indigo-800 mb-8" // Larger heading, more margin
          variants={headingVariants}
        >
          Why Choose <span className="font-bold">{companyName}</span>?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Increased gap */}
          <motion.ul className="list-none space-y-6" variants={containerVariants}> {/* Increased space and stagger */}
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-7 h-7 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Larger icon, darker green */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Experienced Professionals:</strong> Our team comprises highly trained and seasoned moving experts dedicated to excellence.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Larger icon, darker blue */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Utmost Care & Security:</strong> We treat your possessions with the highest level of care and ensure their security throughout the move.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-7 h-7 text-purple-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Larger icon, darker purple */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5m14-6v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9m14 6h4m-2-2h4m-6-2h4" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Efficient & Timely Service:</strong> We pride ourselves on providing prompt and well-organized moving solutions.</span>
            </motion.li>
          </motion.ul>
          <motion.ul className="list-none space-y-6" variants={containerVariants}> {/* Increased space and stagger */}
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-7 h-7 text-teal-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Larger icon, darker teal */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Comprehensive Solutions:</strong> We offer a full range of services, from meticulous packing to careful unpacking.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-7 h-7 text-yellow-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Larger icon, darker yellow */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Client Satisfaction:</strong> Your peace of mind and complete satisfaction are our ultimate goals.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-7 h-7 text-red-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Larger icon, darker red */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Stress-Free Experience:</strong> We manage the complexities of your move, allowing you to focus on settling in.</span>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      <motion.section className="mt-20 text-center bg-indigo-50 py-12 px-6 rounded-xl shadow-inner border border-indigo-100" variants={textVariants}> {/* Increased top margin, light indigo background, rounder corners, border */}
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-6"> {/* Enhanced heading size and weight, darker indigo */}
          Ready for a Seamless Relocation?
        </h2>
        <motion.p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto" variants={textVariants}> {/* Larger text, more margin-bottom, constrained width */}
          Let <span className="font-bold text-indigo-700">{companyName}</span> handle the heavy lifting. Contact us today to discuss your household moving needs and receive a personalized, no-obligation quote.
        </motion.p>
      <motion.div variants={listItemVariants}>
          <Link
            to="/get-quote"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Request a Commercial Moving Quote
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default HouseholdService;