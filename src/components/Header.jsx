import React, { useState } from "react";

const Header = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear any pending timeout
    }
    setVisibleDropdown(menuName);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setVisibleDropdown(null); // Hide the dropdown after delay
    }, 300); // 300ms delay
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
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Logo</a>
          
        </div>

        {/* Contact */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center">0000000000</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-4 text-black relative flex items-center">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:underline cursor-pointer focus:outline-none"
              aria-expanded={visibleDropdown === "Services"}
            >
              Services
            </button>
            {/* Dropdown */}
            {visibleDropdown === "Services" && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded z-50"
                role="menu"
              >
                <ul className="text-left">
                  {servicesMenu.map((item, idx) => (
                    <li key={idx} role="menuitem">
                      <a
                        href={item.path}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="/blog" className="hover:underline">
            Blog
          </a>

          <a href="/about-us" className="hover:underline">
            About Us
          </a>
        </nav>

        {/* Get Prices Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Get Prices
        </button>
      </div>

      {/* Banner */}
      <div className="bg-blue-400 text-center py-2 text-white">
        We are happy to announce that Hybrid Shifting has acquired Pikkol.com
      </div>
    </header>
  );
};

export default Header;
