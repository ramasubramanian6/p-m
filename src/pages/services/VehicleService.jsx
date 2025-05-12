import React from "react";

const VehicleService = () => {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto rounded-lg shadow-lg mt-15">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Vehicle Transport Services</h1>
        <p className="text-lg text-gray-600">
          Whether you need to move your car or bike, we ensure safe and secure vehicle transport. 
          Our expert team handles all types of vehicles, ensuring no damage and timely delivery.
        </p>
      </div>

      {/* Gallery Section */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Gallery</h2>
      <p className="text-gray-600 mb-6">Images will be uploaded soon...</p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 h-64 rounded-lg shadow-md overflow-hidden relative">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Vehicle Transport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl">
            Image 1
          </div>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg shadow-md overflow-hidden relative">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Safe Vehicle Moving" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl">
            Image 2
          </div>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg shadow-md overflow-hidden relative">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Car Transport" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl">
            Image 3
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Vehicle Transport Services?</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-3">
          <li>Safe and secure transportation for your vehicle.</li>
          <li>Timely delivery with GPS tracking.</li>
          <li>Affordable pricing and no hidden charges.</li>
          <li>Expert handling for all types of vehicles, including cars, bikes, and more.</li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleService;
