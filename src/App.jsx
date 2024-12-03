import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // For routing
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import AboutUs from "./Pages/AboutUs";
import HireAMiniTruck from "./Pages/Services/hireAminiTruck"; // Updated import name
import HouseShifting from "./Pages/Services/houseShifting";
import InternationalRelocation from "./Pages/Services/internationalRelocation";
import PackersAndMovers from "./Pages/Services/packersAndMovers";
import StorageFacility from "./Pages/Services/storageFacility";
import VehicleShifting from "./Pages/Services/vehicleShifting";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Ensures the layout spans the entire viewport height */}
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Service Pages */}
            <Route path="/services/hire-a-mini-truck" element={<HireAMiniTruck />} />
            <Route path="/services/house-shifting" element={<HouseShifting />} />
            <Route path="/services/international-relocation" element={<InternationalRelocation />} />
            <Route path="/services/domestic-packers-and-movers" element={<PackersAndMovers />} />
            <Route path="/services/storage-facility" element={<StorageFacility />} />
            <Route path="/services/vehicle-shifting" element={<VehicleShifting />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
