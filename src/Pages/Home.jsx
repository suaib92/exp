import React from 'react';
import HomeImage from '../assets/home_bg.jpg';
import Monitor from '../assets/monitor.png';

const Home = () => {
  return (
    <>
      <section className=''>
        <div
          className='relative bg-cover bg-center'
          style={{ backgroundImage: `url(${HomeImage})` }}
        >
          <div className='hero__content flex flex-col items-center text-center p-8'>
            <div className='hero__title text-2xl font-bold mb-4'>
              <a
                href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                className='text-black'
                target='_self'
              >
                Move
              </a>
            </div>
            <div className='hero__sub-title text-xl mb-2'>
              <a
                href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                className='text-black'
                target='_self'
              >
                Move anything, anywhere
              </a>
            </div>
            <div className='hero__sub-title text-xl mb-4'>
              <a
                href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                className='text-black'
                target='_self'
              >
                Zero hassles. #HappyMoving
              </a>
            </div>
            <div className='col-xs-12 col-md-4 col-md-offset-4 start-md'>
              <a
                href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                className='hero__call-to-action bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
              >
                Calculate Your Moving Cost
              </a>
            </div>
            <div className='hero__success__connector flex justify-center mt-8'>
              <div className='bg-white p-4 rounded-md w-1/3 text-center mx-2'>
                <div className='flex items-center justify-center'>
                  <div className='text-4xl'>4.1</div>
                </div>
                <p className='text-sm'>
                  Rated most trusted relocation firm on google
                </p>
              </div>
              <div className='bg-white p-4 rounded-md w-1/3 text-center mx-2'>
                <div className='flex items-center justify-center'>
                  <div className='text-4xl'>1</div>
                  <span className='text-sm pl-2'>Lakh+</span>
                </div>
                <p className='text-sm'>happy moves completed</p>
              </div>
              <div className='bg-white p-4 rounded-md w-1/3 text-center mx-2'>
                <div className='flex items-center justify-center'>
                  <div className='text-4xl'>1</div>
                  <span className='text-sm pl-2'>st</span>
                </div>
                <p className='text-sm'>
                  India's first pure play digital brand in relocation
                </p>
              </div>
            </div>
            <div className='bg-white p-4 rounded-md mt-8 text-center'>
              <div className='text-sm'>
                Winner of <br />
                <span className='text-2xl font-bold'>Emerge 50</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12 bg-gray-100 h-[700px]'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12'>
          <div className='w-full h-72 md:w-1/2 mb-8 md:mb-0 flex justify-center'>
            <img
              src={Monitor}
              alt='Pikkol platform preview'
              className='w-full h-full object-contain'
            />
          </div>

          <div className='w-full md:w-1/2 text-center md:text-left flex flex-col justify-center'>
            <h1 className='text-3xl font-bold mb-4'>
              Pikkol <span className='italic'>(pik-kol)</span>
            </h1>
            <p className='text-gray-700 italic mb-6'>
              The{' '}
              <span className='font-semibold'>
                ultimate technology platform
              </span>{' '}
              providing a one-stop solution for all relocation requirements.
            </p>

            <ol className='list-decimal list-inside text-gray-800 mb-6'>
              <li>
                To <span className='italic'>transport without any effort</span>.
              </li>
              <li>Secure packing and moving service.</li>
              <li>Hassle-free and transparent process.</li>
              <li>
                That awesome feeling you get when you shift to your new home,
                like it is just a fun road trip while your furniture and
                belongings are being safely moved by expert packers and movers.
              </li>
            </ol>

            <p className='text-gray-600 italic'>
              Example usages: "4 BHK worth of expensive stuff to be sent to
              Delhi from Bangalore??? Just pikkol it, man."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
