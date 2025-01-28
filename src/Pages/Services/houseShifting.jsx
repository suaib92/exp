import React, { useState, useEffect } from 'react';
import statesData from '../../JSONdata/states.json';
import reviews from '../../JSONdata/reviews.json';
import BrandJson from '../../JSONdata/brandLogo.json';
import packingData from '../../JSONdata/packingPreviews.json';
import faq from '../../JSONdata/faq.json';
import {
  FaClipboardList,
  FaCalculator,
  FaCalendar,
  FaTruck,
} from 'react-icons/fa';

const houseShifting = () => {
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
      {/* //form section  */}
      <section className='pt-10 pb-10 mt-10'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-7/12 px-4 mb-8 md:mb-0'>
              <h1 className='text-4xl font-bold leading-tight text-gray-900'>
                {selectedState
                  ? `Residential Relocation  in ${selectedStateObject.label}`
                  : 'Residential Relocation '}
              </h1>

              <p className='text-xl text-gray-600 mt-2'>
                Redefining relocation services
              </p>
              <img
                src='https://www.pikkol.com/static/432de711c03f6a124620e58ccedab0f4/0e039/Component_4_1_resized.webp'
                alt='Packers and Movers'
                className='mt-6 w-full max-w-650px mx-auto'
              />
            </div>
            <div className='md:w-5/12 px-4'>
              <h4 className='text-2xl font-semibold mb-4'>
                Find out how much your moving will cost you
              </h4>
              <form id='form' onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label htmlFor='selectState' className='block text-gray-700'>
                    State
                  </label>
                  <select
                    id='selectState'
                    className='w-full px-4 py-2 mt-2 border rounded-lg'
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value='' disabled>
                      Select a State
                    </option>
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='inputFullName'
                    className='block text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='inputFullName'
                    className='w-full px-4 py-2 mt-2 border rounded-lg'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className='mb-4'>
                  <label htmlFor='inputEmail' className='block text-gray-700'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='inputEmail'
                    className='w-full px-4 py-2 mt-2 border rounded-lg'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='inputPhoneNumber'
                    className='block text-gray-700'
                  >
                    Phone Number
                  </label>
                  <input
                    type='text'
                    id='inputPhoneNumber'
                    className='w-full px-4 py-2 mt-2 border rounded-lg'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  className='w-full py-3 bg-blue-600 text-white rounded-lg font-semibold'
                >
                  Calculate your moving cost
                </button>
                <small className='text-center block mt-4 text-gray-600'>
                  Trusted by 100k+ happy customers.
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* //happy custumer section */}
      <section className='bg-gray-100 py-12'>
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <img
              src='/home.svg'
              alt='Homes Moved'
              className='w-20 h-20 mx-auto'
            />
            <p className='text-xl font-bold'>1,00,000+</p>
            <p className='text-gray-600'>Homes Moved</p>
          </div>
          <div className='text-center'>
            <img
              src='/happy.svg'
              alt='Happy Customers'
              className='w-20 h-20 mx-auto'
            />
            <p className='text-xl font-bold'>98.3%</p>
            <p className='text-gray-600'>Happy Customers</p>
          </div>
          <div className='text-center'>
            <img
              src='/users.svg'
              alt='Corporate Clients'
              className='w-20 h-20 mx-auto'
            />
            <p className='text-xl font-bold'>260+</p>
            <p className='text-gray-600'>Corporate Clients</p>
          </div>
          <div className='text-center'>
            <img
              src='/warehouse.svg'
              alt='Warehouses'
              className='w-20 h-20 mx-auto'
            />
            <p className='text-xl font-bold'>60+</p>
            <p className='text-gray-600'>Warehouses</p>
          </div>
        </div>
      </section>

      {/* //Best packers and movers services section */}

      <section className='py-12 bg-gradient-to-r from-blue-50 to-white'>
        <div className='container mx-auto flex flex-col md:flex-row items-center md:space-x-8'>
          {/* Image Section */}
          <div className='md:w-1/2 mb-8 md:mb-0 z-10'>
            <img
              src='/psk.jpg'
              alt='Shifting Process'
              className='w-96 h-96 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
            />
          </div>
          {/* Text Content */}
          <div className='md:w-1/2 md:pl-12 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-snug'>
              YatiRelocations Residential Relocation Service
            </h2>
            <p className='text-gray-600 leading-relaxed text-lg'>
              Moving to a new home? YatiRelocations ensures your household items
              are packed, transported, and delivered safely. From delicate
              glassware to bulky furniture, our team handles it all with care
              and precision.
            </p>
          </div>
        </div>
      </section>

      {/* How YatiRelocations Packers & Movers Works sections */}

      <section>
        <div className='mb-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>
              Relocation Process Simplified With YatiRelocations
            </h2>
            <p className='text-gray-600 max-w-3xl mx-auto'>
              YatiRelocations has simplified and streamlined the house-shifting
              process
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-10'>
            <div className='text-center bg-white shadow-lg rounded-lg p-6'>
              <div className='flex justify-center mb-4'>
                <FaClipboardList className='w-12 h-12 text-blue-500' />
              </div>
              <h3 className='font-semibold mb-2'>1. Share your Requirement</h3>
            </div>

            <div className='text-center bg-white shadow-lg rounded-lg p-6'>
              <div className='flex justify-center mb-4'>
                <FaCalculator className='w-12 h-12 text-blue-500' />
              </div>
              <h3 className='font-semibold mb-2'>2. Get Free Instant Quote</h3>
            </div>

            <div className='text-center bg-white shadow-lg rounded-lg p-6'>
              <div className='flex justify-center mb-4'>
                <FaCalendar className='w-12 h-12 text-blue-500' />
              </div>
              <h3 className='font-semibold mb-2'>3. Schedule and Confirm</h3>
            </div>

            <div className='text-center bg-white shadow-lg rounded-lg p-6'>
              <div className='flex justify-center mb-4'>
                <FaTruck className='w-12 h-12 text-blue-500' />
              </div>
              <h3 className='font-semibold mb-2'>4. We get you moved!</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto flex flex-col md:flex-row items-center px-4'>
          <div className='md:w-1/2 md:pl-12 mb-8 md:mb-0'>
            <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
              Our Unique Selling Points To Assure Hassle-Free Relocation
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-4'>
              Right from our first day in the business, our focus has always
              been on quality and commitment. We have adequate expertise &
              experience to ensure a hassle-free move. And, we fully value and
              reciprocate the trust reposed on us. Our USPs are designed to
              provide complete safety and care to your lovable goods at an
              affordable price. Some of the advantages that we offer are:
              <br />
              Instant Customizable Quotes
              <br />
              Dedicated Move Manager Trained and Professional Teams
              <br />
              Pre-move and Post-move Services
              <br />
              Damage & Transit Care Packages
              <br />
              Highest Quality Packing Materials
            </p>
          </div>

          <div className='md:w-1/2 flex justify-center md:pl-12'>
            <img
              src='/paks.webp'
              alt='Shifting Process'
              className='w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto p-6'>
          <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
            {selectedState
              ? `House shifting prices in ${selectedStateObject.label}`
              : 'House shifting prices '}
          </h2>
          {!selectedState && (
            <a href='#form' className='text-center block text-gray-600'>
              Please select a state to view prices
            </a>
          )}

          {selectedStateObject && selectedStateObject.prices ? (
            <div className='overflow-x-auto'>
              <table className='min-w-full border-collapse border border-gray-300 rounded-lg shadow-md'>
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-50'>
                      Move Type/Distance
                    </th>
                    <th className='border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-50'>
                      Within City
                    </th>
                    <th className='border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-50'>
                      Up to 350km
                    </th>
                    <th className='border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-50'>
                      350-750km
                    </th>
                    <th className='border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-50'>
                      750-1200km
                    </th>
                    <th className='border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-50'>
                      1200-1700km
                    </th>
                    <th className='border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-50'>
                      1700+ km
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedStateObject.prices.map((priceRow, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } hover:bg-gray-200 transition duration-300`}
                    >
                      <td className='border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
                        {priceRow.type}
                      </td>
                      <td className='border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
                        {priceRow.withinCity}
                      </td>
                      <td className='border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
                        {priceRow.upTo350}
                      </td>
                      <td className='border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
                        {priceRow.upTo750}
                      </td>
                      <td className='border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
                        {priceRow.upTo1200}
                      </td>
                      <td className='border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
                        {priceRow.upTo1700}
                      </td>
                      <td className='border border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
                        {priceRow.beyond1700}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className='text-center text-gray-600'>
              No prices available for the selected state.
            </div>
          )}
        </div>
      </section>

      {/* //preview section */}

      <section>
        <div className='max-w-7xl mx-auto p-6'>
          <h1 className='text-3xl font-bold mb-8 text-center'>
            Get a preview of how we pack your goods
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {packingData.map((item, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition duration-300'
              >
                <div className='text-4xl mb-4 text-center'>{item.icon}</div>
                <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>
                <p className='text-sm text-gray-600 mb-4'>{item.description}</p>
                <button className='flex items-center text-blue-500 hover:text-blue-700'>
                  <span>Play</span>
                  <span className='ml-2 text-sm'>({item.duration})</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //    Relocation simplified with YatiRelocations section */}

      <section>
        <div className='bg-gray-50 py-12 px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>
              Relocation simplified with YatiRelocations - Best Packers and
              Movers Services
            </h2>
            <p className='text-lg text-gray-600 mb-8 max-w-3xl mx-auto'>
              YatiRelocations is considered the best packer and mover in Mumbai
              by our base of loyal and satisfied clients. Here are some of the
              other advantages we have on offer, making us a preferred choice
              when it comes to selecting packers and movers:
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
              <div className='bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl'>
                <div className='text-4xl mb-4'>{/* Add Icon or Emoji */}💵</div>
                <h3 className='text-xl font-semibold text-gray-800'>
                  Instant Customizable Quotes
                </h3>
                <p className='text-gray-600 mt-2'>
                  Get an instant, personalized quote tailored to your specific
                  moving needs.
                </p>
              </div>

              <div className='bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl'>
                <div className='text-4xl mb-4'>{/* Add Icon or Emoji */}🛠️</div>
                <h3 className='text-xl font-semibold text-gray-800'>
                  Pre-move and Post-move Services
                </h3>
                <p className='text-gray-600 mt-2'>
                  We offer comprehensive pre and post-move services to make your
                  relocation stress-free.
                </p>
              </div>

              <div className='bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl'>
                <div className='text-4xl mb-4'>{/* Add Icon or Emoji */}👩‍💻</div>
                <h3 className='text-xl font-semibold text-gray-800'>
                  Dedicated Move Manager
                </h3>
                <p className='text-gray-600 mt-2'>
                  Our experienced move managers are here to guide you through
                  the entire relocation process.
                </p>
              </div>

              <div className='bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl'>
                <div className='text-4xl mb-4'>{/* Add Icon or Emoji */}📦</div>
                <h3 className='text-xl font-semibold text-gray-800'>
                  Damage & Transit Care Packages
                </h3>
                <p className='text-gray-600 mt-2'>
                  We offer care packages to ensure your items are safe and
                  well-protected during transit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // YatiRelocations Customer Reviews sections */}

      <section>
        <div className='bg-gray-50 py-12 px-6'>
          <div className='max-w-6xl mx-auto text-center relative'>
            <h2 className='text-4xl font-extrabold text-gray-800 mb-12'>
              YatiRelocations Customer Reviews
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
            YatiRelocations has emerged as a preferred choice for your domestic
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
            Frequently Asked Questions
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

      {/* //Locations We Serve section */}

      {selectedState && selectedStateObject ? (
        <section className='bg-white py-12'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
              Locations We Serve House Shifting Services in{' '}
              {selectedStateObject.label}
            </h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
              {selectedStateObject.districts.length > 0 ? (
                selectedStateObject.districts.map((district, districtIndex) => (
                  <div
                    key={districtIndex}
                    className='bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105'
                  >
                    <p className='text-gray-800 font-semibold text-lg text-center'>
                      Packers and Movers in {district}
                    </p>
                  </div>
                ))
              ) : (
                <div className='col-span-full text-center text-gray-500 text-sm mt-8'>
                  No districts available at the moment.
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className='bg-white py-12'>
          <div className='max-w-7xl mx-auto px-6'>
            <a href='#form' className='block mb-8'>
              <h2 className='text-3xl font-bold text-center text-gray-900'>
                {selectedState
                  ? `House Shifting Services In ${selectedStateObject.label}`
                  : 'House Shifting Services'}
              </h2>
              {!selectedState && (
                <small className='text-center block mt-2 text-gray-600'>
                  Please select a state to see the House Shifting Services
                  locations we serve in.
                </small>
              )}
            </a>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className='h-16 bg-gray-300 rounded-md animate-pulse'
                ></div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default houseShifting;
