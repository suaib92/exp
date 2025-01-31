import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/logo-removebg.png";

const Header = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menuName) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setVisibleDropdown(menuName);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setVisibleDropdown(null);
    }, 300);
    setTimeoutId(id);
  };

  const servicesMenu = [
    { label: "Residential Relocation", path: "/services/house-shifting" },
    {
      label: "Office Relocation ",
      path: "/services/domestic-packers-and-movers",
    },
    {
      label: "Commercial Logistics ",
      path: "/services/international-relocation",
    },
    {
      label: "Packing and Unpacking Services ",
      path: "/services/storage-facility",
    },
    { label: "Vehicle Transport ", path: "/services/vehicle-shifting" },
    { label: "Hire a Mini Truck", path: "/services/hire-a-mini-truck" },
  ];

  return (
    <header className="bg-white sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center  px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-[#1d305b]">
          <a className="no-underline" href="/">
            <img src={Logo} alt="Pikkol Team" className="h-20 w-auto" />
          </a>
        </div>

        {/* Contact */}
        <div className="hidden lg:flex items-center space-x-4">
          <span className="flex items-center text-sm text-[#1d305b]">
            <FaPhoneAlt className="mr-1" /> 000-000-0000
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#1d305b]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-3 space-x-6 text-sm text-[#1d305b]">

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:underline cursor-pointer text-lg focus:outline-none font-medium text-gray-700"
              aria-expanded={visibleDropdown === "Services"}
            >
              Services
            </button>
            {visibleDropdown === "Services" && (
             <div
             className="absolute  mt-2 w-56 bg-white shadow-md border border-gray-200 rounded-lg z-50"
             role="menu"
           >
             <ul className="text-left">
               {servicesMenu.map((item, idx) => (
                 <li key={idx} role="menuitem">
                   <a
                     href={item.path}
                     className="block px-4 py-2 transition-all duration-200 text-sm font-semibold text-[#1d305b] hover:bg-[#ff7f11] hover:text-white rounded-md"
                   >
                     {item.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
           
            )}
          </div>

          <a href="/blog" className="no-underline  text-gray-700 text-lg hover:underline font-medium">
            Blog
          </a>
          <a
            href="/about-us"
            className="no-underline text-lg hover:underline  text-gray-700 font-medium"
          >
            About Us
          </a>

          <a href="contact-us">
            <button className="bg-[#da8b3c] text-white px-6 py-2 rounded hover:bg-orange-400 focus:outline-none">
              Get Prices
            </button>
          </a>
        </nav>
      </div>

      {/* Banner */}
      <div className="bg-[#1d305b] text-center py-1 text-white font-medium text-sm">
        We are happy to announce that Hybrid Shifting has acquired
        YatiRelocation.com
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <button
            className="block w-full text-left py-1 text-[#1d305b] font-medium"
            onClick={() => setVisibleDropdown("Services")}
          >
            Services
          </button>
          {visibleDropdown === "Services" && (
            <ul className="mt-2">
              {servicesMenu.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="block px-4 py-1 no-underline hover:bg-gray-100 text-sm text-[#1d305b] font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a
            href="/blog"
            className="block py-1 text-[#1d305b] hover:bg-gray-100"
          >
            Blog
          </a>
          <a
            href="/about-us"
            className="block py-1 text-[#1d305b] hover:bg-gray-100"
          >
            About Us
          </a>
          
          <a href="contact-us">
           <button
            class="bg-[#da8b3c] text-white w-full py-1 rounded hover:bg-orange-400"
            onclick="window.location.href='/contact-us';"
          >
            Get Prices
          </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
