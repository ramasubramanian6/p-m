import React from "react";

const OfficeService = () => {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto rounded-lg shadow-lg mt-15 ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Office Relocation Services</h1>
        <p className="text-lg text-gray-600">
          We understand that moving your office requires careful planning. Our office relocation service 
          ensures minimal downtime with seamless and secure packing and transportation of office equipment.
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
            alt="Office Relocation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl">
            Image 1
          </div>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg shadow-md overflow-hidden relative">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Packing Office Items" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl">
            Image 2
          </div>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg shadow-md overflow-hidden relative">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Office Furniture Moving" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-xl">
            Image 3
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Office Relocation Services?</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-3">
          <li>Minimal downtime and disruption.</li>
          <li>Secure packing and transportation of office furniture and equipment.</li>
          <li>Flexible timing and tailored solutions for your business.</li>
          <li>Efficient handling of sensitive data and documents.</li>
        </ul>
      </div>
    </div>
  );
};

export default OfficeService;
