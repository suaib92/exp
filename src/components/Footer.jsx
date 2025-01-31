import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#dbe3f7]  text-[#1d305b] py-10'>
      <div className='container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {/* Know More Section */}
        <div>
          <h3 className='font-bold text-lg mb-4'>Know More</h3>
          <ul className='space-y-2'>
            <li>
              <a href='/blog' className='no-underline hover:underline'>
                Blog
              </a>
            </li>
            <li>
              <a href='/about-us' className='no-underline hover:underline'>
                About Us
              </a>
            </li>
            <li>
              <a href='#contact' className='no-underline hover:underline'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='#trends' className='no-underline hover:underline'>
                Packaging and Moving Trends
              </a>
            </li>
            <li>
              <a href='#offers' className='no-underline hover:underline'>
                Offers
              </a>
            </li>
            <li>
              <a href='#policy' className='no-underline hover:underline'>
                Payment Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className='font-bold text-lg mb-4'>Services</h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='/services/domestic-packers-and-movers'
                className='no-underline hover:underline'
              >
                Domestic Packers and Movers
              </a>
            </li>
            <li>
              <a
                href='/services/house-shifting'
                className='no-underline hover:underline'
              >
                House Shifting
              </a>
            </li>
            <li>
              <a
                href='/services/vehicle-shifting'
                className='no-underline hover:underline'
              >
                Vehicle Shifting
              </a>
            </li>
            <li>
              <a
                href='/services/hire-a-mini-truck'
                className='no-underline hover:underline'
              >
                Hire a Truck
              </a>
            </li>
            <li>
              <a
                href='/services/storage-facility'
                className='no-underline hover:underline'
              >
                Storage Facility
              </a>
            </li>
            <li>
              <a
                href='/services/international-relocation'
                className='no-underline hover:underline'
              >
                International Relocation
              </a>
            </li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div>
          <h3 className='font-bold text-lg mb-4'>Need help?</h3>
          <ul className='space-y-2'>
            <li>
              Email:{' '}
              <a
                href='mailto:contact@pikkol.com'
                className='no-underline hover:underline'
              >
                contact@pikkol.com
              </a>
            </li>
            <li>Call us: +91 80 88 11 00 11</li>
          </ul>
          <div className='flex items-center space-x-4 mt-4'>
            <a
              href='#facebook'
              className='text-white hover:text-blue-500'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
            <a
              href='#twitter'
              className='text-white hover:text-[#2c447b] '
              aria-label='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              href='#youtube'
              className='text-white hover:text-[#2c447b] '
              aria-label='YouTube'
            >
              <i className='fab fa-youtube'></i>
            </a>
          </div>
          <button className='bg-[#1d305b] text-white px-4 py-2 rounded mt-4 w-full sm:w-auto'>
            Get Prices
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='bg-[#1d305b] text-white text-sm text-center py-4 mt-6'>
        <div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 px-6'>
          <p>🌍 Global / English</p>
          <p>Terms and Conditions | Privacy Policy</p>
          <p>© All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
