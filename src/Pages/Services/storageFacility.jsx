import React, { useState, useEffect } from "react";
import statesData from "../../JSONdata/states.json";
import reviews from "../../JSONdata/reviews.json";
import BrandJson from "../../JSONdata/brandLogo.json";
import packingData from "../../JSONdata/packingPreviews.json";
import faq from "../../JSONdata/faq.json";
import {
  FaClipboardList,
  FaCalculator,
  FaCalendar,
  FaTruck,
  FaBoxOpen,
  FaCheckCircle,
  FaVideo,
  FaBug,
  FaBoxes,
  FaWater,
  FaIndustry,
  FaLightbulb,
} from "react-icons/fa";

const storageFacility = () => {
  const [states, setStates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    console.log("Form submitted:", {
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
      <section className="pt-10 pb-10 mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 px-4 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                {selectedState
                  ? `Storage Facility in ${selectedStateObject.label}`
                  : "Storage Facility"}
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
              <form id="form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="selectState" className="block text-gray-700">
                    State
                  </label>
                  <select
                    id="selectState"
                    className="w-full px-4 py-2 mt-2 border rounded-lg"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="" disabled>
                      Select a State
                    </option>
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>

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
              Cost-Efficient and Secure Storage Facility
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are a reputed moving company providing exceptional packing,
              moving, and storage facilities across India. We pride ourselves in
              building our reputation on a cornerstone of quality services. At
              YatiRelocations, we offer warehousing services with complete flexibility.
              Our warehouses are 100% safe, spacious, and are managed under
              strict supervision round the clock. You can count on us for safe
              and economical storage facilities.
            </p>
          </div>
        </div>
      </section>

      {/* How YatiRelocations Packers & Movers Works sections */}

      <section>
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Experience Convenience With YatiRelocations To Store Your Valuable Goods
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            YatiRelocations has simplified the whole process! Take a look at the most
              suitable way to store your stuff in India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <FaClipboardList className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">1. You Book Online</h3>
              <p>
              YatiRelocations specializes in offering storage & warehousing services,
                tailor-made for specific categories of goods. Book online, and
                we'll deliver your boxes with minimal charge.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <FaTruck className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">2. We Arrive & Pack</h3>
              <p>
                Our experienced team packs your items safely and securely. We
                use high-quality materials to ensure the safety of your
                belongings during transit.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <FaBoxOpen className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">3. We Transport & Store</h3>
              <p>
                Once we reach your new location, we carefully unload everything
                and help set up your space, making your move as smooth as
                possible.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">4. We Deliver</h3>
              <p>
                With everything taken care of, you can focus on settling into
                your new home or office while we handle the heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 
pricee */}

<section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Pricing Plans for YatiRelocations Storage Facility
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
                <th className="px-6 py-3 text-left border">House Type</th>
                <th className="px-6 py-3 text-left border">
                  Prices Starting From
                </th>
                <th className="px-6 py-3 text-left border">What's Included</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border font-medium text-gray-800">
                  1 RK
                </td>
                <td className="px-6 py-4 border font-semibold text-gray-700">
                  ₹999
                </td>
                <td className="px-6 py-4 border text-gray-600">
                  1 TV & TV Stand/Center table, 2 Chairs, 1 Washing Machine, 1
                  Fridge, 1 Single Cot, 10-15 Boxes
                </td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border font-medium text-gray-800">
                  2 BHK
                </td>
                <td className="px-6 py-4 border font-semibold text-gray-700">
                  ₹1999
                </td>
                <td className="px-6 py-4 border text-gray-600">
                  2 TVs & TV Stands, 1 Dining Table, 1 Sofa, 2 Beds, 1 Washing
                  Machine, 1 Fridge, 15-20 Boxes
                </td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border font-medium text-gray-800">
                  3 BHK
                </td>
                <td className="px-6 py-4 border font-semibold text-gray-700">
                  ₹2999
                </td>
                <td className="px-6 py-4 border text-gray-600">
                  3 TVs & TV Stands, 1 Dining Table, 1 Sofa Set, 3 Beds, 1
                  Washing Machine, 1 Fridge, 20-25 Boxes
                </td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border font-medium text-gray-800">
                  4 BHK
                </td>
                <td className="px-6 py-4 border font-semibold text-gray-700">
                  ₹3999
                </td>
                <td className="px-6 py-4 border text-gray-600">
                  4 TVs & TV Stands, 1 Dining Table, 1 Sofa Set, 4 Beds, 1
                  Washing Machine, 1 Fridge, 25-30 Boxes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

      <section className="mt-5">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Tailor-Made Storage Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Not sure what kind of storage you need? We custom build our
              services to meet your specific requirements. Check the storage
              options below to find out more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-semibold mb-2">Household Storage</h3>
              <p>
                If you are searching for a place to store your house stuff, we
                can provide you the best household storage facility. YatiRelocations also
                provides tailored and ultra-personal automotive storage service,
                providing a highly secure 24x7 monitored rodent-proof
                environment for your vehicle.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-semibold mb-2">Commercial Storage</h3>
              <p>
                Running out of space at your business? YatiRelocations offers world-class
                business storage services and promises to keep all your assets
                undamaged and safe all the time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities of YatiRelocations storage space */}

      <section className="py-16 bg-gray-50 ">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Specialities of YatiRelocations Storage Space
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At YatiRelocations, we value the safety of your belongings and offer a
              world-class service experience with our well-maintained storage
              spaces. They come with the following facilities:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <FaVideo className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800">
                24X7 Security Surveillance
              </h3>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <FaBug className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800">
                Pest Controlled Facility
              </h3>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <FaBoxes className="text-4xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800">
                Palletized Storage
              </h3>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <FaWater className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800">
                Leak Proof Roofing Systems
              </h3>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <FaIndustry className="text-4xl text-red-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800">
                Industrial Grade Warehouses
              </h3>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <FaLightbulb className="text-4xl text-yellow-400 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg text-gray-800">
                Adequate Power and Water Supply
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* //berand section */}

      <section className=" relative min-h-screen w-full overflow-hidden py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="absolute left-0 top-0 h-[30vw] w-[50vw] -translate-x-1/4 -translate-y-1/4 bg-[#3498db]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
          <h2 className="text-4xl font-semibold text-center mb-6">
            We are trusted by many
          </h2>
          <p className="text-center text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-12">
            With our mission to make every relocation a happy experience,
            coupled with our company-wide institutionalized best practices,
            YatiRelocations has emerged as a preferred choice for your domestic
            relocation requirements.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {BrandJson.companies.map((brand, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={brand["image-url"]}
                  alt={brand.description}
                  width={100}
                  height={50}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Advantages we offer at YatiRelocations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Count on us to offer you fully customized storage facilities!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Advantages we offer at YatiRelocations Count on us to offer you fully
              customized storage facilities! With absolutely safe warehousing
              facilities spread across the country, you can be sure that your
              possessions are in capable hands. Not only can you rest assured
              that your goods will be kept in perfect condition, additionally
              you can bank upon us to deliver them to the location you want them
              to be delivered.
              <br />
              <br className="mt-2" />
              As our valued customer, you will enjoy:
              <br className="mt-2" />
              Flexible Packages
              <br className="mt-2" />
              Trained Packing Crew
              <br className="mt-2" />
              Dedicated call support
              <br className="mt-2" />
              Remote Virtual Packing
              <br className="mt-2" />
              No Minimum Contracts
              <br className="mt-2" />
              Eco-friendly Packing Materials
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

      {/* // YatiRelocations Customer Reviews sections */}

      <section>
        <div className="bg-gray-50 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center relative">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            YatiRelocations Customer Reviews
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out transform">
              {visibleReviews.map((review, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: review.stars }).map(
                      (_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-yellow-400 text-3xl"
                          aria-label={`Star ${starIndex + 1}`}
                        >
                          ★
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-3 italic">
                    {review.route}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {review.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {review.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Icons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-6">
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex - reviewsPerPage >= 0
                      ? currentIndex - reviewsPerPage
                      : reviews.length - reviewsPerPage
                  )
                }
                className="text-4xl text-gray-600 hover:text-gray-800 focus:outline-none transition-all duration-300 ease-in-out"
                aria-label="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-6">
              <button
                onClick={nextSlide}
                className="text-4xl text-gray-600 hover:text-gray-800 focus:outline-none transition-all duration-300 ease-in-out"
                aria-label="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* //q&&A section */}

      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <h1 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faq.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center py-4 px-6 hover:bg-gray-100 focus:outline-none transition-all duration-300"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-600">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-gray-700 bg-gray-50 rounded-b-lg transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //preview section */}

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Locations we serve in the country
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {statesData.map((state, stateIndex) => (
              <div
                key={stateIndex}
                className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {state.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
    <div className="text-3xl mr-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
  </div>
);
export default storageFacility;
