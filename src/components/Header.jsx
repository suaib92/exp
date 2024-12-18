import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

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
    {
      label: 'Domestic Packers and Movers',
      path: '/services/domestic-packers-and-movers',
    },
    { label: 'House Shifting', path: '/services/house-shifting' },
    { label: 'Vehicle Shifting', path: '/services/vehicle-shifting' },
    { label: 'Hire a Mini Truck', path: '/services/hire-a-mini-truck' },
    { label: 'Storage Facility', path: '/services/storage-facility' },
    {
      label: 'International Relocations',
      path: '/services/international-relocation',
    },
  ];

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex flex-wrap justify-between items-center py-4 px-6'>
        {/* Logo */}
        <div className='text-2xl font-bold text-gray-800'>
          <a className='no-underline' href='/'>
            Logo
          </a>
        </div>

        {/* Contact */}
        <div className='hidden lg:flex items-center space-x-4'>
          <span className='flex items-center text-gray-700'>
            <FaPhoneAlt className='mr-2' /> 000-000-0000
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='lg:hidden text-gray-700'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle mobile menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav className='hidden lg:flex space-x-8 text-black relative'>
          <div
            className='relative'
            onMouseEnter={() => handleMouseEnter('Services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className='hover:underline cursor-pointer focus:outline-none text-lg font-medium text-gray-700'
              aria-expanded={visibleDropdown === 'Services'}
            >
              Services
            </button>
            {/* Dropdown */}
            {visibleDropdown === 'Services' && (
              <div
                className='absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded z-50 opacity-100 transition-all duration-300 ease-in-out'
                role='menu'
              >
                <ul className='text-left'>
                  {servicesMenu.map((item, idx) => (
                    <li key={idx} role='menuitem'>
                      <a
                        href={item.path}
                        className='block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 font-medium transition-all duration-150 ease-in-out'
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a
            href='/blog'
            className=' no-underline first-letter:hover:underline text-lg font-medium text-gray-700'
          >
            Blog
          </a>
          <a
            href='/about-us'
            className=' no-underline hover:underline text-lg font-medium text-gray-700'
          >
            About Us
          </a>

          <button className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200'>
            Get Prices
          </button>
        </nav>
      </div>

      {/* Banner */}
      <div className='bg-blue-500 text-center py-2 text-white font-semibold'>
        We are happy to announce that Hybrid Shifting has acquired Pikkol.com
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white shadow-md p-4'>
          <button
            className='block w-full text-left py-2 text-gray-700 font-medium'
            onClick={() => setVisibleDropdown('Services')}
          >
            Services
          </button>
          {visibleDropdown === 'Services' && (
            <ul className='mt-2'>
              {servicesMenu.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className='block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 font-medium'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a
            href='/blog'
            className='block py-2 text-gray-700 hover:bg-gray-100'
          >
            Blog
          </a>
          <a
            href='/about-us'
            className='block py-2 text-gray-800 hover:bg-gray-100'
          >
            About Us
          </a>
          <button className='bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600'>
            Get Prices
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
