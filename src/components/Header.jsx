import React, { useState } from 'react';

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

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-black">xyz</span>
        </div>

        {/* Contact */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center">0000000000</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-4 text-black relative flex items-center">
          {[
            {
              name: 'Services',
              items: [
                'Domestic Packers and Movers',
                'House Shifting',
                'Vehicle Shifting',
                'Hire a Mini Truck',
                'Storage Facility',
                'International Relocations',
              ],
            },
            {
              name: 'Blog',
              items: ['Tips for Moving', 'Storage Tips', 'FAQs'],
            },
          ].map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:underline cursor-pointer focus:outline-none">
                {menu.name}
              </button>
              {/* Dropdown */}
              {visibleDropdown === menu.name && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded z-50">
                  <ul className="text-left">
                    {menu.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <a href="#about" className="hover:underline">
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
