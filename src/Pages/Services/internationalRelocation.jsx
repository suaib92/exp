import React, { useState, useEffect } from "react";
import statesData from "../../JSONdata/states.json";
import reviews from '../../JSONdata/reviews.json';
import BrandJson from '../../JSONdata/brandLogo.json';
import faq from '../../JSONdata/faq.json';

const InternationalRelocation = () => {
  const [states, setStates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    setStates(statesData);
  }, []);

  const reviewsPerPage = 3;

  const visibleReview = reviews[currentIndex];

  // Calculate the reviews to display
  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + reviewsPerPage
  );

  // Function to move to the next set of reviews
  const nextSlide = () => {
    if (currentIndex + reviewsPerPage >= reviews.length) {
      setCurrentIndex(0); // Restart from the beginning
    } else {
      setCurrentIndex(currentIndex + reviewsPerPage);
    }
  };

  // Auto-change reviews every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex - reviewsPerPage >= 0) {
      setCurrentIndex(currentIndex - reviewsPerPage);
    }
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic, e.g., send data to a backend
    console.log('Form submitted:', {
      selectedState,
      fullName,
      email,
      phoneNumber,
    });
  };

  // Find the selected state object from the states array
  const selectedStateObject = states.find(
    (state) => state.value === selectedState
  );

  return (
    <div>
      <section className="pt-20 pb-20 mt-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 px-4 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                International Packers and Movers
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Redefining relocation services
              </p>
              <img
                src="https://www.pikkol.com/static/432de711c03f6a124620e58ccedab0f4/0e039/Component_4_1_resized.webp"
                alt="Packers and Movers"
                className="mt-6 w-full max-w-650px mx-auto"
              />
            </div>
            <div className="md:w-5/12 px-4">
              <h4 className="text-2xl font-semibold mb-4">
                Find out how much your moving will cost you
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="inputFullName"
                    className="block text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="inputFullName"
                    className="w-full px-4 py-2 mt-2 border rounded-lg"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="inputEmail" className="block text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="w-full px-4 py-2 mt-2 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="inputPhoneNumber"
                    className="block text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="inputPhoneNumber"
                    className="w-full px-4 py-2 mt-2 border rounded-lg"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold"
                >
                  Calculate your moving cost
                </button>
                <small className="text-center block mt-4 text-gray-600">
                  Trusted by 100k+ happy customers.
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* //happy custumer section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="/home.svg"
              alt="Homes Moved"
              className="w-20 h-20 mx-auto"
            />
            <p className="text-xl font-bold">1,00,000+</p>
            <p className="text-gray-600">Homes Moved</p>
          </div>
          <div className="text-center">
            <img
              src="/happy.svg"
              alt="Happy Customers"
              className="w-20 h-20 mx-auto"
            />
            <p className="text-xl font-bold">98.3%</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <img
              src="/users.svg"
              alt="Corporate Clients"
              className="w-20 h-20 mx-auto"
            />
            <p className="text-xl font-bold">260+</p>
            <p className="text-gray-600">Corporate Clients</p>
          </div>
          <div className="text-center">
            <img
              src="/warehouse.svg"
              alt="Warehouses"
              className="w-20 h-20 mx-auto"
            />
            <p className="text-xl font-bold">60+</p>
            <p className="text-gray-600">Warehouses</p>
          </div>
        </div>
      </section>

      {/* //Best packers and movers services section */}

      <section className="py-12 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 z-10">
            <img
              src="/psk.jpg"
              alt="Shifting Process"
              className="w-96 h-96 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-snug">
              International packers and movers at lowest prices
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Planning an overseas move? Hire Pikkol. We are the world’s premier
              international moving company, and we can help you move to any
              corner of the globe seamlessly with our international relocation
              services. We have moved thousands of people – families,
              executives, CEOs, and other professionals with fuss-free packing,
              transporting, storing, and unpacking. We are backed by a team of
              professionals who ensure that your goods reach their destination
              with the utmost care and safety.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-16">
          {/* Heading Section */}
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl font-bold mb-6">
              Pikkol International Packers & Movers Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Pre-move services</p>
          </div>

          {/* Pre-Move Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10">
            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">Home Search</h3>
              <p className="text-gray-700 leading-relaxed">
                Locating a nice home in the most appropriate location i.e.,
                close to the workplace, schools, and not too far from the CBD
                are primary concerns for someone moving. We understand this and
                help expats or NRIs find homes with convenience and ease of
                access.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                Immigration Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide visa and immigration assistance, ensuring compliance
                with local requirements. This includes work permits, re-entry
                permits, notarization, and other documentation for effortless
                mobility.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                Virtual Consultation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our move consultant can address your requirements via video
                call, ensuring your move is tailored to your special needs.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                In-House Consultation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our move consultant will personally meet with you to address
                your requirements and queries, making your move stress-free.
              </p>
            </div>
          </div>

          {/* Additional Pre-Move Service */}
          <div className="mt-8 px-6 md:px-10">
            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                Preview & Orientation Tip
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Customized programs to introduce clients to their new city,
                including visits to schools, residential areas, and
                entertainment hubs, ensuring a smooth transition with minimal
                stress.
              </p>
            </div>
          </div>

          {/* During Transit */}
          <p className="mt-16 text-xl font-semibold text-center">
            During Transit
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-6 md:px-10">
            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">Home Protection</h3>
              <p className="text-gray-700 leading-relaxed">
                Cost-effective solutions to insure your vacant or rented home
                against loss during your overseas move.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                Personal Property Protection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborations with partners to ensure your belongings are
                insured.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">Transit Protection</h3>
              <p className="text-gray-700 leading-relaxed">
                Offering peace of mind with our transit protection services
                during international moves.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                Transport Methods & Storage
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Flexible storage and transport solutions tailored to your
                requirements.
              </p>
            </div>
          </div>

          {/* At Destination */}
          <p className="mt-16 text-xl font-semibold text-center">
            At Destination
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-6 md:px-10">
            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">Home Protection</h3>
              <p className="text-gray-700 leading-relaxed">
                Ensuring your home is secure and insured while abroad.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                Personal Property Protection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Insurance options for your belongings through our trusted
                partners.
              </p>
            </div>
          </div>

          {/* Intercultural Training */}
          <div className="mt-8 px-6 md:px-10">
            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-4">
                Intercultural Training
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Helping you navigate cultural differences with training provided
                by our experienced partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Pikkol international packers and movers unique selling points
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pikkol International Packers and Movers is one of the leading
              moving companies. We provide door-to-door and customized
              professional packing & moving services from any destination in
              India. We promise to offer the best packing-moving services since
              we have experienced team members to cater to all your needs. Here
              are some of the advantages we offer, making us a preferred choice
              for selecting packers and movers for an international move.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Instant Customizable Quotes.
              <br />
              Dedicated Move Manager
              <br />
              Trained and Professional Teams
              <br />
              Pre-move and Post-move Services
              <br />
              Damage & Transit Care Packages
              <br />
              Post-move Customer Delight Team
              <br />
              Highest Quality Packing Materials
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:pl-12">
            <img
              src="/paks.webp"
              alt="Shifting Process"
              className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

{/* // Pikkol Customer Reviews sections */}

<section>
        <div className='bg-gray-50 py-12 px-6'>
          <div className='max-w-6xl mx-auto text-center relative'>
            <h2 className='text-4xl font-extrabold text-gray-800 mb-12'>
              Pikkol Customer Reviews
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out transform'>
              {visibleReviews.map((review, index) => (
                <div
                  key={index}
                  className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'
                >
                  <div className='flex justify-center mb-6'>
                    {Array.from({ length: review.stars }).map(
                      (_, starIndex) => (
                        <span
                          key={starIndex}
                          className='text-yellow-400 text-3xl'
                          aria-label={`Star ${starIndex + 1}`}
                        >
                          ★
                        </span>
                      )
                    )}
                  </div>
                  <p className='text-sm text-gray-500 mb-3 italic'>
                    {review.route}
                  </p>
                  <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                    {review.name}
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    {review.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Icons */}
            <div className='absolute top-1/2 left-0 transform -translate-y-1/2 px-6'>
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex - reviewsPerPage >= 0
                      ? currentIndex - reviewsPerPage
                      : reviews.length - reviewsPerPage
                  )
                }
                className='text-4xl text-gray-600 hover:text-gray-800 focus:outline-none transition-all duration-300 ease-in-out'
                aria-label='Previous'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-10 h-10'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
            </div>

            <div className='absolute top-1/2 right-0 transform -translate-y-1/2 px-6'>
              <button
                onClick={nextSlide}
                className='text-4xl text-gray-600 hover:text-gray-800 focus:outline-none transition-all duration-300 ease-in-out'
                aria-label='Next'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-10 h-10'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* //berand section */}

      <section className=' relative min-h-screen w-full overflow-hidden py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div
            className='absolute left-0 top-0 h-[30vw] w-[50vw] -translate-x-1/4 -translate-y-1/4 bg-[#3498db]'
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
          <h2 className='text-4xl font-semibold text-center mb-6'>
            We are trusted by many
          </h2>
          <p className='text-center text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-12'>
            With our mission to make every relocation a happy experience,
            coupled with our company-wide institutionalized best practices,
            Pikkol has emerged as a preferred choice for your domestic
            relocation requirements.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
            {BrandJson.companies.map((brand, index) => (
              <div key={index} className='flex items-center justify-center'>
                <img
                  src={brand['image-url']}
                  alt={brand.description}
                  width={100}
                  height={50}
                  className='max-w-full h-auto'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //q&&A section */}

      <section>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
          <h1 className='text-3xl font-bold text-center mb-8'>
          Frequently asked questions about international packers and movers
          </h1>
          <div className='space-y-4'>
            {faq.map((faq, index) => (
              <div key={index} className='border-b border-gray-200'>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full text-left flex justify-between items-center py-4 px-6 hover:bg-gray-100 focus:outline-none transition-all duration-300'
                >
                  <span className='text-lg font-medium text-gray-800'>
                    {faq.question}
                  </span>
                  <span className='text-2xl text-gray-600'>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className='p-4 text-gray-700 bg-gray-50 rounded-b-lg transition-all duration-300 ease-in-out'>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default InternationalRelocation;
