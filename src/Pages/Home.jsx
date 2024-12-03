import React from 'react';
import HomeImage from '../assets/home_bg.jpg';

const Home = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className="hero__content flex flex-col items-center text-center p-8">
        <div className="hero__title text-2xl font-bold mb-4">
          <a href="https://app.pikkol.com/order/new/basic-info?traffic=organic" className="text-black" target="_self">
            Move
          </a>
        </div>
        <div className="hero__sub-title text-xl mb-2">
          <a href="https://app.pikkol.com/order/new/basic-info?traffic=organic" className="text-black" target="_self">
            Move anything, anywhere
          </a>
        </div>
        <div className="hero__sub-title text-xl mb-4">
          <a href="https://app.pikkol.com/order/new/basic-info?traffic=organic" className="text-black" target="_self">
            Zero hassles. #HappyMoving
          </a>
        </div>
        <div className="col-xs-12 col-md-4 col-md-offset-4 start-md">
          <a href="https://app.pikkol.com/order/new/basic-info?traffic=organic" className="hero__call-to-action bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Calculate Your Moving Cost
          </a>
        </div>
        <div className="hero__success__connector flex justify-center mt-8">
          <div className="bg-white p-4 rounded-md w-1/3 text-center mx-2">
            <div className="flex items-center justify-center">
              <div className="text-4xl">4.1</div>
            </div>
            <p className="text-sm">Rated most trusted relocation firm on google</p>
          </div>
          <div className="bg-white p-4 rounded-md w-1/3 text-center mx-2">
            <div className="flex items-center justify-center">
              <div className="text-4xl">1</div>
              <span className="text-sm pl-2">Lakh+</span>
            </div>
            <p className="text-sm">happy moves completed</p>
          </div>
          <div className="bg-white p-4 rounded-md w-1/3 text-center mx-2">
            <div className="flex items-center justify-center">
              <div className="text-4xl">1</div>
              <span className="text-sm pl-2">st</span>
            </div>
            <p className="text-sm">India's first pure play digital brand in relocation</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md mt-8 text-center">
          <div className="text-sm">Winner of <br />
            <span className="text-2xl font-bold">Emerge 50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
