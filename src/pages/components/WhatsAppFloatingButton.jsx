import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/919087893000"
      className="fixed bottom-14 right-10 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center transition-all duration-300 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="mr-2 text-xl" />
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppFloatingButton;
