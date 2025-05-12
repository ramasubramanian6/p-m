
import React from "react";

const HouseholdService = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Household Shifting Services</h1>
      <p className="mb-6 text-gray-700">
        Our Household Shifting service ensures a smooth and safe relocation of your valuable home items. 
        With years of experience and skilled staff, we offer the most secure packing and moving experience.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
      <p className="text-gray-500 mb-4">Images will be uploaded soon...</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Placeholder image boxes */}
        <div className="bg-gray-100 h-40 rounded shadow" />
        <div className="bg-gray-100 h-40 rounded shadow" />
        <div className="bg-gray-100 h-40 rounded shadow" />
      </div>
    </div>
  );
};

export default HouseholdService;
