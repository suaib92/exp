import React, { useState } from "react";

const Header = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: "Domestic Packers and Movers", path: "/services/domestic-packers-and-movers" },
    { label: "House Shifting", path: "/services/house-shifting" },
    { label: "Vehicle Shifting", path: "/services/vehicle-shifting" },
    { label: "Hire a Mini Truck", path: "/services/hire-a-mini-truck" },
    { label: "Storage Facility", path: "/services/storage-facility" },
    { label: "International Relocations", path: "/services/international-relocation" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">Logo</a>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 text-black relative`}
        >
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:underline cursor-pointer focus:outline-none text-lg font-medium text-gray-700"
              aria-expanded={visibleDropdown === "Services"}
            >
              Services
            </button>
            {/* Dropdown */}
            {visibleDropdown === "Services" && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded z-50 opacity-100 transition-all duration-300 ease-in-out"
                role="menu"
              >
                <ul className="text-left">
                  {servicesMenu.map((item, idx) => (
                    <li key={idx} role="menuitem">
                      <a
                        href={item.path}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 font-medium transition-all duration-150 ease-in-out"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="/blog" className="hover:underline text-lg font-medium text-gray-700">
            Blog
          </a>

          <a href="/about-us" className="hover:underline text-lg font-medium text-gray-700">
            About Us
          </a>
        </nav>

        {/* Get Prices Button */}
        <button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200">
          Get Prices
        </button>
      </div>

      {/* Banner */}
      <div className="bg-blue-500 text-center py-2 text-white font-semibold">
        We are happy to announce that Hybrid Shifting has acquired Pikkol.com
      </div>

      {/* Mobile Get Prices Button */}
      {isMobileMenuOpen && (
        <div className="block md:hidden text-center mt-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200">
            Get Prices
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
