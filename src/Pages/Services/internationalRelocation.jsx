import React, { useState, useEffect } from "react";
import statesData from "../../JSONdata/states.json";

const InternationalRelocation = () => {
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
    // Simple form validation
    if (!selectedState || !fullName || !email || !phoneNumber) {
      alert("Please fill out all fields.");
      return;
    }
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
                Packers and Movers in {selectedStateObject ? selectedStateObject.label : 'Your Selected State'}
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
    </div>
  );
};

export default InternationalRelocation;
