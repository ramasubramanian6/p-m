import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for staggered appearance of sections
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut', // Smooth easing
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
      ease: 'easeOut',
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
      ease: 'easeOut',
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
      ease: 'easeOut',
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
      ease: 'easeOut',
    },
  },
};

// Variant for staggering gallery items
const galleryContainerVariants = {
    animate: { transition: { staggerChildren: 0.1 } }, // Stagger delay between gallery items
};


const OfficeService = () => {
    const companyName = 'Your Corporate Movers'; // Replace with your actual company name

  return (
    <motion.div
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 bg-white rounded-xl shadow-2xl" // Enhanced container styling
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header Section */}
      <motion.header className="text-center mb-10 md:mb-14" variants={headingVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 tracking-tight mb-4"> {/* Stronger heading, darker blue */}
          Expert Commercial & Office Relocation
        </h1>
        <motion.p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto" variants={textVariants}> {/* Larger, darker text, centered and constrained width */}
          Minimize disruption and maximize efficiency with our specialized office moving services. We plan and execute every detail for a smooth transition.
        </motion.p>
      </motion.header>

      {/* Introduction/Description Section */}
      <motion.section className="mb-12 md:mb-16" variants={textVariants}>
           <p className="text-lg text-gray-800 leading-relaxed">
               Relocating your office is a critical process that demands meticulous planning and execution to ensure business continuity. At <span className="font-semibold text-blue-700">{companyName}</span>, we specialize in providing comprehensive office relocation services designed to minimize downtime and stress for your employees. Our experienced team handles everything from secure packing of sensitive documents and IT equipment to the careful transportation and setup of furniture, allowing you to focus on your core business operations.
           </p>
            <motion.ul className="list-disc list-inside mt-6 text-gray-700 leading-relaxed space-y-2" variants={containerVariants}> {/* Stagger list items */}
                <motion.li variants={listItemVariants}>Detailed pre-move planning and consultation.</motion.li>
                <motion.li variants={listItemVariants}>Specialized packing for electronics and fragile office equipment.</motion.li>
                <motion.li variants={listItemVariants}>Efficient labeling and inventory management.</motion.li>
                <motion.li variants={listItemVariants}>Safe transportation with a modern, secure fleet.</motion.li>
                <motion.li variants={listItemVariants}>Systematic unpacking and setup at your new location.</motion.li>
                <motion.li variants={listItemVariants}>Coordination with building management teams.</motion.li>
            </motion.ul>
      </motion.section>


      {/* Gallery Section */}
      <section className="mb-12 md:mb-16">
        <motion.h2 className="text-3xl font-semibold mb-6 text-gray-900" variants={headingVariants}> {/* Consistent heading style */}
          Our Work in Action
        </motion.h2>
        <motion.p className="text-gray-600 mb-8 italic" variants={textVariants}> {/* Styled as italic placeholder note */}
           (A selection of images showcasing our professional office moving services will be available soon.)
        </motion.p>

        {/* Gallery Grid */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" // Increased gap
            variants={galleryContainerVariants}
            initial="initial"
            animate="animate"
        >
            {/* Using placeholder divs with background instead of img tags directly */}
            {[...Array(6)].map((_, index) => ( // Increased placeholder count
                <motion.div
                    key={index}
                    className="bg-gray-100 aspect-video rounded-lg shadow-xl overflow-hidden relative border border-gray-200 flex items-center justify-center text-gray-400 text-sm" // Enhanced styling
                    variants={galleryItemVariants}
                >
                    Image Placeholder {index + 1}
                    {/* Replace with actual images later */}
                    {/* <img
                        src={`/path/to/office-move-image-${index + 1}.jpg`} // Use actual image paths
                        alt={`Office Relocation Example ${index + 1}`}
                        className="w-full h-full object-cover"
                    /> */}
                     {/* Optional overlay for text */}
                     {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                        Project Details
                     </div> */}
                </motion.div>
            ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12 md:mt-16">
        <motion.h3 className="text-3xl font-semibold text-blue-800 mb-6" variants={headingVariants}> {/* Consistent heading style */}
            Why Partner with <span className="font-bold">{companyName}</span>?
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Increased gap */}
          <motion.ul className="list-none space-y-5" variants={containerVariants}> {/* Increased space and stagger */}
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Proven Experience:</strong> Decades of successful commercial relocations.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Orange for planning */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Strategic Planning:</strong> Tailored plans to minimize business interruption.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Indigo for secure */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Secure Handling:</strong> Utmost care for your valuable assets and data.</span>
            </motion.li>
          </motion.ul>
          <motion.ul className="list-none space-y-5" variants={containerVariants}> {/* Increased space and stagger */}
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Red for efficiency */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Efficiency & Speed:</strong> Executing your move quickly and effectively.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Teal for comprehensive */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span><strong className="font-semibold text-gray-900">End-to-End Service:</strong> From packing and IT disconnect to setup and reconnect.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Purple for support */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0A9.95 9.95 0 0112 5.013C7.452 5.013 3.646 8.123 2.457 12c1.189 3.877 4.995 6.987 9.543 6.987 1.962 0 3.83-.604 5.395-1.65l3.536 3.536m-1.414-1.414L18.364 5.636m0 0L14.828 9.172m-3.536-3.536A9.95 9.95 0 0112 5.013C7.452 5.013 3.646 8.123 2.457 12c1.189 3.877 4.995 6.987 9.543 6.987 1.962 0 3.83-.604 5.395-1.65l3.536 3.536" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Dedicated Support:</strong> Responsive and helpful service throughout your move.</span>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section className="mt-16 text-center bg-blue-50 py-10 px-6 rounded-lg shadow-inner border border-blue-100" variants={textVariants}> {/* Light blue background, border */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
          Plan Your Office Move Today
        </h2>
        <motion.p className="text-lg text-gray-700 leading-relaxed mb-8" variants={textVariants}>
          Ready for a seamless and efficient office relocation? Contact <span className="font-semibold text-blue-700">{companyName}</span> to discuss your specific requirements and get a customized quote.
        </motion.p>
        {/* Replace with your actual contact link or button */}
         <motion.a href="/get-quote" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" variants={listItemVariants}> {/* Enhanced button styling */}
           Request a Commercial Moving Quote
         </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default OfficeService;