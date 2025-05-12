import React from 'react';
import { Award, ShieldCheck, Globe } from 'lucide-react'; // Import icons

const HighlightCard = ({ title, description, image }) => (
  <div className="bg-blue-50 p-6 rounded-xl shadow-md flex flex-col items-center gap-4 bg-gradient-to-br from-white to-blue-200">
    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
      {image}
    </div>
    <p className="text-lg font-semibold text-center">{title}</p>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Highlights = () => {
  return (
    <section className="py-10 px-6 bg-gray-300 text-center rounded-2xl">
      <h2
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text"
        style={{
          backgroundImage: 'linear-gradient(to right, #2563eb, #16a34a)',
        }}
      >
        Why Choose Move My Stuffs?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HighlightCard
          title="10+ Years Experience"
          description="Reliable service with a proven track record."
          image={<Award className="w-8 h-8 text-blue-500" />}
        />
        <HighlightCard
          title="GST Registered & I.B.A Approved"
          description="Certified and trusted by industry standards."
          image={<ShieldCheck className="w-8 h-8 text-green-500" />}
        />
        <HighlightCard
          title="Pan India Network"
          description="Extensive reach with 10 branches across India."
          image={<Globe className="w-8 h-8 text-purple-500" />}
        />
      </div>
    </section>
  );
};

export default Highlights;
