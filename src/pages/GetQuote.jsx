import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    fromState: "",
    fromCity: "",
    toState: "",
    toCity: "",
    moveType: "",
    date: "",
    contact: "",
    address: "",
    email: "",
    message: "",
  });

  const cities = {
    "Metro Cities": [
      "Chennai",
      "Bangalore",
      "Mumbai",
      "Delhi NCR",
      "Hyderabad",
      "Kolkata",
      "Pune",
      "Ahmedabad",
    ],
    "Tamil Nadu": [
      "Coimbatore",
      "Madurai",
      "Trichy",
      "Salem",
      "Tirunelveli",
      "Erode",
      "Vellore",
      "Thoothukudi",
    ],
    Maharashtra: [
      "Nagpur",
      "Nashik",
      "Aurangabad",
      "Solapur",
      "Amravati",
      "Jalgaon",
      "Kolhapur",
    ],
    MadhyaPradesh: [
      "Indore",
      "Bhopal",
      "Gwalior",
      "Jabalpur",
      "Ujjain",
      "Sagar",
    ],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer"],
    UttarPradesh: [
      "Lucknow",
      "Kanpur",
      "Varanasi",
      "Allahabad",
      "Agra",
      "Ghaziabad",
      "Meerut",
      "Aligarh",
    ],
    Uttarakhand: ["Dehradun", "Haridwar", "Rudrapur", "Haldwani"],
    AndhraPradesh: [
      "Vijayawada",
      "Visakhapatnam",
      "Guntur",
      "Tirupati",
      "Rajahmundry",
      "Kakinada",
    ],
    Telangana: ["Warangal", "Karimnagar", "Nizamabad", "Khammam"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Balasore"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
    WestBengal: ["Howrah", "Durgapur", "Asansol", "Siliguri", "Kharagpur"],
    HimachalPradesh: ["Shimla", "Manali", "Dharamshala", "Mandi"],
    DelhiNCR: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
    "Surrounding Cities of Agra": [
      "Firozabad",
      "Mathura",
      "Bharatpur",
      "Aligarh",
      "Etah",
      "Mainpuri",
      "Kasganj",
      "Hathras",
      "Etawah",
      "Haldwani",
      "Gwalior",
    ],
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs
      .sendForm(
        "service_5ptojte",
        "template_gg5lba9",
        e.target, // <-- This is wrong
        "VYrOW621xJ6XeKWX1"
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        alert("Quote request sent successfully!");
        e.target.reset(); // Clear the form
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 bg-white rounded-lg shadow-xl mt-15">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Get a Free Quote
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* From State */}
        <div>
          <label
            htmlFor="fromState"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            From State *
          </label>
          <select
            id="fromState"
            name="fromState"
            value={formData.fromState}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select State</option>
            {Object.keys(cities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* From City */}
        <div>
          <label
            htmlFor="fromCity"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            From City *
          </label>
          <select
            id="fromCity"
            name="fromCity"
            value={formData.fromCity}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select City</option>
            {(cities[formData.fromState] || []).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* To State */}
        <div>
          <label
            htmlFor="toState"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            To State *
          </label>
          <select
            id="toState"
            name="toState"
            value={formData.toState}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select State</option>
            {Object.keys(cities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* To City */}
        <div>
          <label
            htmlFor="toCity"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            To City *
          </label>
          <select
            id="toCity"
            name="toCity"
            value={formData.toCity}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select City</option>
            {(cities[formData.toState] || []).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Types of Move */}
        <div>
          <label
            htmlFor="moveType"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Types of Move *
          </label>
          <select
            id="moveType"
            name="moveType"
            value={formData.moveType}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type of Move</option>
            <option value="Household">Household</option>
            <option value="Office">Office</option>
            <option value="Vehicle">Vehicle</option>
          </select>
        </div>

        {/* Move Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Move Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label
            htmlFor="contact"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Contact Number *
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Address *
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="2"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetQuote;
