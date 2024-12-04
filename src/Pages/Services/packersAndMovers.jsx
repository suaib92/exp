import React, { useState, useEffect } from "react";
import statesData from "../../JSONdata/states.json";
import { FaBuilding } from "react-icons/fa";

const PackersAndMovers = () => {
  const [states, setStates] = useState([]);

  // Fetch the states data from the JSON file when the component mounts
  useEffect(() => {
    setStates(statesData); // Set states data to the state variable
  }, []);
  return (
    <div>
      <section
        style={{
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          marginTop: "100px",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div
              className="px-sm-5 mb-4 mb-sm-0 col-md-7 col-12"
              style={{ paddingInline: "15px" }}
            >
              <h1 className="display-4 fw-bolder top-banner-text">
                Packers and Movers
              </h1>
              <span className="d-block h5 mt-1 fw-normal font-montserrat">
                Redefining relocation services
              </span>
              <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
                <div style={{ maxWidth: "650px", display: "block" }}>
                  <img
                    alt="Packers and Movers"
                    src="https://www.pikkol.com/static/432de711c03f6a124620e58ccedab0f4/0e039/Component_4_1_resized.webp"
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      position: "static",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="px-sm-5 mb-5 mb-sm-0 cost-calculator col-md-5 col-12"
              style={{ paddingInline: "15px" }}
            >
              <h4
                className="h4 mb-3 fw-bolder font-merriweather"
                style={{ fontSize: "24px" }}
              >
                Find out how much your moving will cost you
              </h4>
              <form>
                <div className="form-input-spacing form-input-spacing-temp">
                  <label className="form-label" htmlFor="selectState">
                    State
                  </label>
                  <select
                    id="selectState"
                    className="form-control form-control-lg"
                  >
                    <option value="" disabled selected>
                      Select a State
                    </option>
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                  <div className="text-danger"></div>
                </div>

                <div className="form-input-spacing form-input-spacing-temp">
                  <label className="form-label" htmlFor="inputFullName">
                    Full Name (Text)
                  </label>
                  <input
                    type="text"
                    id="inputFullName"
                    className="form-control form-control-lg"
                  />
                  <div className="text-danger"></div>
                </div>

                <div className="form-input-spacing">
                  <label className="form-label" htmlFor="inputEmail">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control form-control-lg"
                  />
                  <div className="text-danger"></div>
                </div>

                <div className="form-input-spacing">
                  <label className="form-label" htmlFor="inputPhoneNumber">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="inputPhoneNumber"
                    className="form-control form-control-lg"
                  />
                  <div className="text-danger"></div>
                </div>

                <button
                  type="submit"
                  aria-label="Calculate moving cost"
                  className="w-100 text-white rounded-1 btn btn-primary btn-lg"
                >
                  <span className="h6">Calculate your moving cost</span>
                </button>

                <small className="text-center mt-2 font-merriweather form-text">
                  <p className="text-small mt-2">
                    <small>
                      <svg
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      &nbsp; Trusted by 100k+ happy customers.
                    </small>
                  </p>
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <img
                  src="./public/home.svg"
                  alt="Home Logo"
                  className="w-8 h-8"
                />
              </div>
              <div className="font-bold text-xl">1,00,000+</div>
              <div className="text-gray-600">Homes Moved</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <img
                  src="path_to_your_home_logo.png"
                  alt="Home Logo"
                  className="w-8 h-8"
                />
              </div>
              <div className="font-bold text-xl">98.3%</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <img
                  src="path_to_your_home_logo.png"
                  alt="Home Logo"
                  className="w-8 h-8"
                />
              </div>
              <div className="font-bold text-xl">260+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <img
                  src="path_to_your_home_logo.png"
                  alt="Home Logo"
                  className="w-8 h-8"
                />
              </div>
              <div className="font-bold text-xl">60+</div>
              <div className="text-gray-600">Warehouses</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackersAndMovers;
