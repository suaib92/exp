import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#dbe3f7] text-[#1d305b] py-10'>
      <div className='container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
        {/* Know More Section */}
        <div>
          <h3 className='font-bold text-lg mb-4'>Know More</h3>
          <ul className='space-y-2'>
            {[
              'Blog',
              'About Us',
              'Contact Us',
              'Packaging and Moving Trends',
              'Offers',
              'Payment Policy',
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className='no-underline hover:underline'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className='font-bold text-lg mb-4'>Services</h3>
          <ul className='space-y-2'>
            {[
              'Domestic Packers and Movers',
              'House Shifting',
              'Vehicle Shifting',
              'Hire a Truck',
              'Storage Facility',
              'International Relocation',
            ].map((service, index) => (
              <li key={index}>
                <a
                  href={`#${service.toLowerCase().replace(/ /g, '-')}`}
                  className='no-underline hover:underline'
                >
                  {service}
                </a>
              </li>
            ))}
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
            {['facebook-f', 'twitter', 'youtube'].map((icon, index) => (
              <a
                key={index}
                href={`#${icon}`}
                className='text-[#1d305b] hover:text-[#2c447b]'
                aria-label={icon}
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
          <a href="contact-us">
          <button className='bg-[#1d305b] text-white px-4 py-2 rounded mt-4 w-full sm:w-auto'>
            Get Prices
          </button>
          </a>
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
