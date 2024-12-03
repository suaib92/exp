import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Know More Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Know More</h3>
          <ul className="space-y-2">
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#trends" className="hover:underline">Packaging and Moving Trends</a></li>
            <li><a href="#offers" className="hover:underline">Offers</a></li>
            <li><a href="#policy" className="hover:underline">Payment Policy</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#domestic" className="hover:underline">Domestic Packers and Movers</a></li>
            <li><a href="#house" className="hover:underline">House Shifting</a></li>
            <li><a href="#vehicle" className="hover:underline">Vehicle Shifting</a></li>
            <li><a href="#truck" className="hover:underline">Hire a Truck</a></li>
            <li><a href="#storage" className="hover:underline">Storage Facility</a></li>
            <li><a href="#relocation" className="hover:underline">International Relocation</a></li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Need help?</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:contact@pikkol.com" className="hover:underline">contact@pikkol.com</a></li>
            <li>Call us: +91 80 88 11 00 11</li>
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#facebook" className="text-white hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter" className="text-white hover:text-blue-300"><i className="fab fa-twitter"></i></a>
            <a href="#youtube" className="text-white hover:text-red-500"><i className="fab fa-youtube"></i></a>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Get Prices</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-gray-400 text-sm text-center py-4 mt-6">
        <div className="flex justify-between items-center px-6">
          <p>🌍 Global / English</p>
          <p>Terms and Conditions | Privacy Policy</p>
          <p>© All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
