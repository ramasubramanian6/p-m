import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "./ContactSection";

const AboutUs = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", note: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.note) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setMessage("");



const serviceID = import.meta.env.VITE_SERVICEID;
const templateID = import.meta.env.VITE_TEMPLATEID;
const userID = import.meta.env.VITE_USERID;

   

    const templateParams = {
      from_name: formData.name,
      phone_number: formData.phone,
      message: formData.note,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      () => {
        setLoading(false);
        setMessage("Thank you! We'll call you soon.");
        setFormData({ name: "", phone: "", note: "" });
      },
      (error) => {
        setLoading(false);
        setMessage("Oops! Something went wrong, please try again.");
        console.error("EmailJS Error:", error);
      }
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.6 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const commonPhoneNumbers = (
    <p className="text-gray-700 mt-2 text-sm flex flex-wrap gap-3 items-center justify-center md:justify-start">
      <span className="font-semibold">Contact:</span>
      <a href="tel:+919087893000" className="text-blue-600 font-medium hover:underline">
        📞 +91 90878 93000
      </a>
      <a href="tel:+917253055609" className="text-blue-600 font-medium hover:underline">
        📞 +91 72530 55609
      </a>
    </p>
  );

  return (
    <>
      <div className="bg-gradient-to-tr from-indigo-50 via-purple-100 to-pink-50 min-h-screen font-poppins">
        <motion.div
          className="max-w-6xl mx-auto p-6 pt-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 drop-shadow-lg tracking-wide"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>

          <motion.section
            className="mb-16 bg-white rounded-3xl shadow-lg p-10 md:p-16 border border-purple-200"
            variants={containerVariants}
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-700 tracking-wide text-center">
              Our Mission & Vision
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg text-center">
              At <span className="font-bold text-purple-600">Move My Stuffs Packers & Movers</span>, our mission is to deliver
              seamless, trustworthy, and efficient moving services that give you peace of mind. We
              envision a world where every relocation is smooth and stress-free — with care at the
              heart of everything we do.
            </p>
          </motion.section>

          <motion.section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12" variants={containerVariants}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2m12 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9m12 0H5" />
                </svg>
                Head Office - Chennai
              </h3>
              <p className="text-gray-700 mb-3">No 3 A, Mettu Kalazni Street, Adambakkam, Chennai 600088</p>
              {commonPhoneNumbers}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center md:text-left">
                Branches & Network Cities
              </h3>
              {[
                {
                  city: "Bangalore",
                  address: "No 63/201, 2nd Cross, JC Road Kalasipalyam New Extension, Bengaluru - 560002",
                },
                {
                  city: "Coimbatore",
                  address: "Sridevi Nagar, Giri Nagar, Saibaba Colony, K K Pudur, Coimbatore, Tamil Nadu 641025",
                },
                {
                  city: "Hyderabad",
                  address: "H No. 8/7 95/3, Old Bowenpally, Balaji Secundrabad, Hyderabad, Telangana, 500011",
                },
                {
                  city: "Delhi NCR",
                  address: "Dabua Colony near Durga Mandir, Faridabad",
                },
                {
                  city: "Agra",
                  address: "Kaulakha Crossing Ukharra Road, Rajpur Chungi, Agra",
                },
              ].map(({ city, address }) => (
                <div
                  key={city}
                  className="mb-6 border-l-4 border-purple-300 pl-4 hover:border-purple-500 transition"
                >
                  <h4 className="text-lg font-semibold text-purple-700 mb-1">{city}</h4>
                  <p className="text-gray-700 mb-1">{address}</p>
                  {commonPhoneNumbers}
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Modal for Request Call Form */}
        <AnimatePresence>
          {showModal && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                variants={modalBackdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => setShowModal(false)}
              />
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 px-4"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 relative border border-purple-100">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h2 className="text-3xl font-bold mb-8 text-center text-purple-700 tracking-wide">
                    Request a Call Back
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block mb-3 font-semibold text-gray-700 text-lg">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full border border-gray-300 rounded-2xl px-5 py-3 bg-purple-50 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:bg-white transition text-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-3 font-semibold text-gray-700 text-lg">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full border border-gray-300 rounded-2xl px-5 py-3 bg-purple-50 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:bg-white transition text-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="note" className="block mb-3 font-semibold text-gray-700 text-lg">
                        Message / Note
                      </label>
                      <textarea
                        name="note"
                        id="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        rows={3}
                        className="w-full border border-gray-300 rounded-2xl px-5 py-3 bg-purple-50 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:bg-white transition text-lg resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:from-pink-600 hover:to-purple-700 transition duration-300 disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Get Call Back"}
                    </motion.button>
                  </form>
                  {message && (
                    <p
                      className={`mt-6 text-center font-semibold text-lg ${
                        message.includes("Thank") ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </div>
              </motion.div>
              
            </>
          )}
        </AnimatePresence>
        <ContactSection/>
      </div>
    </>
  );
};

export default AboutUs;
