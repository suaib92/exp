import React from 'react';
import HomeImage from '../assets/home_bg.jpg';

const Home = () => {
  return (
    <div
      className='relative flex flex-col items-center text-center py-10 font-sans'
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>

      <div className='z-10'>
        <h1 className='text-5xl font-bold mb-4'>MOVE</h1>
        <p className='text-xl'>Move anything, anywhere</p>
        <p className='text-xl mb-6'>Zero hassles. #HappyMoving</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold'>
          CALCULATE YOUR MOVING COST
        </button>
      </div>

      <div className='flex flex-wrap justify-center gap-6 mt-10 z-10'>
        <div className='bg-white bg-opacity-90 p-6 rounded shadow-lg w-48'>
          <p className='text-2xl font-bold'>4.1</p>
          <p className='text-gray-700 text-sm'>
            Rated most trusted relocation firm on Google
          </p>
        </div>
        <div className='bg-white bg-opacity-90 p-6 rounded shadow-lg w-48'>
          <p className='text-2xl font-bold'>1 Lakh+</p>
          <p className='text-gray-700 text-sm'>Happy moves completed</p>
        </div>
        <div className='bg-white bg-opacity-90 p-6 rounded shadow-lg w-48'>
          <p className='text-2xl font-bold'>1st</p>
          <p className='text-gray-700 text-sm'>
            India's first pure play digital brand in relocation
          </p>
        </div>
        <div className='bg-white bg-opacity-90 p-6 rounded shadow-lg w-48'>
          <p className='text-2xl font-bold'>Nasscom</p>
          <p className='text-gray-700 text-sm'>Winner of Emerge 50</p>
        </div>
        <div className='bg-white bg-opacity-90 p-6 rounded shadow-lg w-48'>
          <p className='text-2xl font-bold'>The Economic Times</p>
          <p className='text-gray-700 text-sm'>
            Winner of ET Top 50 startups of 2017
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
