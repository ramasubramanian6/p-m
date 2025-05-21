import { motion } from "framer-motion";
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

// Animation variants
const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactSection() {
  return (
    <div>
      {/* Contact Info & CTA */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-br from-blue-800 to-blue-950 text-white text-center"
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
            <FaPhoneAlt className="text-xl text-blue-300" />
            Sales & Marketing: <span className="font-semibold text-3xl">+91 9087893000</span>
          </motion.p>
          <motion.p className="flex items-center gap-3" variants={itemVariants}>
            <FaPhoneAlt className="text-xl text-blue-300" />
            Help Line: <span className="font-semibold text-3xl">+91 7253055609</span>
          </motion.p>
        </motion.div>

        <motion.a
          href="/get-quote"
          className="inline-block bg-white text-blue-900 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Free Quote
        </motion.a>
      </motion.section>

      {/* Footer / Address & Social */}
      <motion.footer
        className="bg-gray-900 text-white py-12 px-6 text-center"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <h4 className="text-2xl font-semibold mb-3 text-gray-200">
            Registered Address
          </h4>
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
            href="https://www.youtube.com/@movemystuffs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700 transition-colors duration-200 transform hover:-translate-y-1"
            aria-label="YouTube"
            variants={itemVariants}
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="https://www.google.com/maps/place/MoveMyStuffs/@12.9792478,80.194448"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200 transform hover:-translate-y-1"
            aria-label="Google Map"
            variants={itemVariants}
          >
            <FaMapMarkerAlt />
          </motion.a>
        </motion.div>

        <motion.p
          className="text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          © 2025 Move My Stuffs. All Rights Reserved.
        </motion.p>
      </motion.footer>
    </div>
  );
}
