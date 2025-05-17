import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // Show modal after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    const serviceID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
    const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
    const userID = "YOUR_USER_ID"; // Replace with your EmailJS user ID

    const templateParams = {
      from_name: formData.name,
      phone_number: formData.phone,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        () => {
          setLoading(false);
          setMessage("Thank you! We'll call you soon.");
          setFormData({ name: "", phone: "" });
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
    visible: { opacity: 0.5 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
    <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-blue-200




 ">

      <motion.div
        className="max-w-5xl mx-auto p-6 pt-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl font-bold mb-8 text-center text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        {/* Head Office */}
        <motion.section
          className="mb-10 bg-white shadow-md rounded-lg p-6 border border-gray-200"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Head Office</h2>
           <h3 className="font-semibold text-lg text-blue-700">Chennai</h3>
          <p className="text-gray-700 leading-relaxed">
            No 3 A, Mettu Kalazni Street, Adambakkam, Chennai 600088
          </p>
          <p className="text-gray-700 mt-1">
            Contact No:{" "}
            <a href="tel:+919087893000" className="text-blue-600 hover:underline">
              +91 90878 93000
            </a>
            ,{" "}
            <a href="tel:+917253055609" className="text-blue-600 hover:underline">
              +91 72530 55609
            </a>
          </p>
        </motion.section>

        {/* Branches */}
        <motion.section
          className="mb-10 bg-white shadow-md rounded-lg p-6 border border-gray-200"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Branches & Network Cities
          </h2>

          {[

            {
              city: "Bangalore",
              address:
                "No 63/201, 2nd Cross, JC Road Kalasipalyam New Extension, Bengaluru - 560002",
            },
            {
              city: "Coimbatore",
              address:
                "Sridevi Nagar, Giri Nagar, Saibaba Colony, K K Pudur, Coimbatore, Tamil Nadu 641025",
            },
            {
              city: "Hyderabad",
              address:
                "H No. 8/7 95/3, Old Bowenpally, Balaji Secundrabad, Hyderabad, Telangana, 500011",
            },
            { city: "Delhi NCR", address: "Dabua Colony near Durga Mandir, Faridabad" },
            { city: "Agra", address: "Kaulakha Crossing Ukharra Road, Rajpur Chungi, Agra" },
          ].map(({ city, address }) => (
            <div key={city} className="mb-5">
              <h3 className="font-semibold text-lg text-blue-700">{city}</h3>
              <p className="text-gray-700">{address}</p>
            </div>
          ))}
        </motion.section>
      </motion.div>

      {/* Modal for Request Call Form */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={modalBackdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                  Request a Call
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Get Call"}
                  </motion.button>
                </form>
                {message && (
                  <p className="mt-4 text-center text-red-600 font-semibold">{message}</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default AboutUs;
