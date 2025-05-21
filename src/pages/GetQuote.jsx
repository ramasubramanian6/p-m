import React, { useState } from "react";
import emailjs from "emailjs-com";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    fromState: "",
    fromCity: "",
    toState: "",
    toCity: "",
    moveType: "",
    date: "",
    contact: "", // Renamed to phone in label only
  });

  const cities = {
    TamilNadu: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Trichy",
      "Salem",
      "Tirunelveli",
      "Erode",
      "Vellore",
      "Thoothukudi",
    ],
    Karnataka: ["Bangalore"],
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Aurangabad",
      "Solapur",
      "Amravati",
      "Jalgaon",
      "Kolhapur",
    ],
    DelhiNCR: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
    Telangana: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam"],
    WestBengal: [
      "Kolkata",
      "Howrah",
      "Durgapur",
      "Asansol",
      "Siliguri",
      "Kharagpur",
    ],
    Gujarat: ["Ahmedabad"],
    MadhyaPradesh: [
      "Indore",
      "Bhopal",
      "Gwalior",
      "Jabalpur",
      "Ujjain",
      "Sagar",
    ],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Bharatpur",
    ],
    UttarPradesh: [
      "Lucknow",
      "Kanpur",
      "Varanasi",
      "Allahabad",
      "Agra",
      "Ghaziabad",
      "Meerut",
      "Aligarh",
      "Firozabad",
      "Mathura",
      "Etah",
      "Mainpuri",
      "Kasganj",
      "Hathras",
      "Etawah",
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
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Balasore"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
    HimachalPradesh: ["Shimla", "Manali", "Dharamshala", "Mandi"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_SERVICEID1;
    const templateID = import.meta.env.VITE_TEMPLATEID1;
    const userID = import.meta.env.VITE_USERID1;

     emailjs
      .sendForm(
        serviceID,
        templateID,
        e.target,
        userID
      )
      .then((result) => {
        alert("Quote request sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-8">
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
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="contact"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </div>
    </div>
  );
};

export default GetQuote;
