import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import HouseholdService from "./pages/services/HouseholdService";
import OfficeService from "./pages/services/OfficeService";
import VehicleService from "./pages/services/VehicleService";
import GetQuote from "./pages/GetQuote";
import AboutUs from "./pages/components/AboutUs";
import dotenv from "dotenv"

// Import components
import Header from "./pages/Header";
import WhatsAppFloatingButton from "./pages/components/WhatsAppFloatingButton";


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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <WhatsAppFloatingButton />
    </div>
    </>
  );
};

export default App;
