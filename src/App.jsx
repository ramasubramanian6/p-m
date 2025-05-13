import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import HouseholdService from "./pages/services/HouseholdService";
import OfficeService from "./pages/services/OfficeService";
import VehicleService from "./pages/services/VehicleService";
import GetQuote from "./pages/GetQuote";

// Import components
import Header from "./pages/Header";


const App = () => {
  return (
    <>
    
    <div>
      {/* Header that will be shown on all pages */}
      <Header />

  

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/household" element={<HouseholdService />} />
        <Route path="/office" element={<OfficeService />} />
        <Route path="/vehicle" element={<VehicleService />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
