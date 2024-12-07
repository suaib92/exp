import React, { useState, useEffect } from "react";
import statesData from "../../JSONdata/states.json";

const internationalRelocation = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    setStates(statesData);
  }, []);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { selectedState, fullName, email, phoneNumber });
  };

  const selectedStateObject = states.find((state) => state.value === selectedState);

  return (
    <div>
      <section className="pt-20 pb-20 mt-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 px-4 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                Packers and Movers
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
                  <label htmlFor="inputFullName" className="block text-gray-700">
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
                  <label htmlFor="inputPhoneNumber" className="block text-gray-700">
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

      {/* Prices Section */}
      <section>
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {selectedStateObject
              ? `Packers and Movers Prices in ${selectedStateObject.label}`
              : "Please select a state to view prices"}
          </h2>
          {selectedStateObject && selectedStateObject?.prices ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">
                      Move Type/Distance
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Within City
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Up to 350km
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      350-750km
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      750-1200km
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      1200-1700km
                    </th>
                    <th className="border border-gray-300 px-4 py-2">1700+ km</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedStateObject?.prices.map((priceRow, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {priceRow.type}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {priceRow.withinCity}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {priceRow.upTo350}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {priceRow.upTo750}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {priceRow.upTo1200}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {priceRow.upTo1700}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {priceRow.beyond1700}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center mt-4 text-gray-500">No pricing information available.</div>
          )}
        </div>
      </section>

      {/* Locations Section */}
      {selectedState && selectedStateObject ? (
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Locations We Serve in {selectedStateObject.label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {selectedStateObject.districts.length > 0 ? (
                selectedStateObject.districts.map((district, districtIndex) => (
                  <div
                    key={districtIndex}
                    className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <p className="text-gray-800 font-semibold text-lg">
                      Packers and Movers in {district}
                    </p>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 text-sm mt-6">
                  No districts available at the moment.
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-500 text-xl">Please select a state to see the districts we serve.</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default internationalRelocation;
