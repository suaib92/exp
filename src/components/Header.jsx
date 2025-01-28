import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Logo from '../assets/logo-removebg.png';

const Header = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = () => {
    window.location.href = '/contact-us'; // This will redirect the user to the 'contact-us' page
  };

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
    <header className='bg-[#f7ddc8] sticky top-0 shadow-md z-50'>
      <div className='container mx-auto flex justify-between items-center py-2 px-4'>
        {/* Logo */}
        <div className='text-xl font-bold text-[#1d305b]'>
          <a className='no-underline' href='/'>
            <img src={Logo} alt='Pikkol Team' className='h-12 w-auto' />
          </a>
        </div>

        {/* Contact */}
        <div className='hidden lg:flex items-center space-x-4'>
          <span className='flex items-center text-sm text-[#1d305b]'>
            <FaPhoneAlt className='mr-1' /> 000-000-0000
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='lg:hidden text-[#1d305b]'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle mobile menu'
        >
          <svg
            className='w-5 h-5'
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
        <nav className='hidden lg:flex space-x-6 text-sm text-[#1d305b] relative'>
          <div
            className='relative'
            onMouseEnter={() => handleMouseEnter('Services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className='hover:underline cursor-pointer focus:outline-none font-medium text-gray-700'
              aria-expanded={visibleDropdown === 'Services'}
            >
              Services
            </button>
            {visibleDropdown === 'Services' && (
              <div
                className='absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded z-50'
                role='menu'
              >
                <ul className='text-left'>
                  {servicesMenu.map((item, idx) => (
                    <li key={idx} role='menuitem'>
                      <a
                        href={item.path}
                        className='block px-3 py-1 hover:bg-gray-100 text-sm text-[#1d305b] font-medium'
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href='/blog' className='no-underline hover:underline font-medium'>
            Blog
          </a>
          <a
            href='/about-us'
            className='no-underline hover:underline font-medium'
          >
            About Us
          </a>

          <button className='bg-[#da8b3c] text-white px-4 py-1 rounded hover:bg-orange-400 focus:outline-none'>
            Get Prices
          </button>
        </nav>
      </div>

      {/* Banner */}
      <div className='bg-[#da8b3c] text-center py-1 text-white font-medium text-sm'>
        We are happy to announce that Hybrid Shifting has acquired Pikkol.com
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white shadow-md p-4'>
          <button
            className='block w-full text-left py-1 text-[#1d305b] font-medium'
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
                    className='block px-4 py-1 hover:bg-gray-100 text-sm text-[#1d305b] font-medium'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a
            href='/blog'
            className='block py-1 text-[#1d305b] hover:bg-gray-100'
          >
            Blog
          </a>
          <a
            href='/about-us'
            className='block py-1 text-[#1d305b] hover:bg-gray-100'
          >
            About Us
          </a>

          <button
            onClick={handleNavigate}
            className='bg-[#da8b3c] text-white w-full py-1 rounded hover:bg-orange-400'
          >
            Get Prices
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
