import React from 'react';
import HomeImage from '../assets/home_bg.jpg';
import Monitor from '../assets/monitor.png';
import TrainingImg from '../assets/training.jpg';
import Truck from '../assets/truck.jpg';
import Lakh from '../assets/lakh.png';
import BrandJson from '../JSONdata/brandLogo.json';

const Home = () => {
  return (
    <>
      <section className='relative bg-gray-50'>
        {/* Background with Overlay */}
        <div
          className='relative bg-cover bg-center min-h-screen flex items-center justify-center'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${HomeImage})`,
          }}
        >
          {/* Content Container */}
          <div className='container mx-auto text-white px-8 lg:px-16'>
            {/* Hero Content */}
            <div className='flex flex-col items-center text-center lg:text-left lg:flex-row'>
              {/* Left Text Section */}
              <div className='lg:w-1/2'>
                <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight mb-4'>
                  <a
                    href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                    className='hover:underline'
                  >
                    Move
                  </a>
                </h1>
                <h2 className='text-3xl font-semibold mb-4'>
                  <a
                    href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                    className='hover:text-blue-400 transition'
                  >
                    Move anything, anywhere
                  </a>
                </h2>
                <p className='text-lg font-light mb-6'>
                  <a
                    href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                    className='hover:underline'
                  >
                    Zero hassles. #HappyMoving
                  </a>
                </p>
                <a
                  href='https://app.pikkol.com/order/new/basic-info?traffic=organic'
                  className='bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition'
                >
                  Calculate Your Moving Cost
                </a>
              </div>

              {/* Right Stats Section */}
              <div className='lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0'>
                {/* Cards */}
                <div className='bg-white text-center p-6 rounded-lg shadow-lg'>
                  <div className='text-5xl font-bold text-blue-500'>4.1</div>
                  <p className='text-gray-600 mt-2'>
                    Rated most trusted relocation firm on Google
                  </p>
                </div>
                <div className='bg-white text-center p-6 rounded-lg shadow-lg'>
                  <div className='text-5xl font-bold text-blue-500'>1</div>
                  <span className='text-sm text-gray-600'>Lakh+</span>
                  <p className='text-gray-600 mt-2'>Happy moves completed</p>
                </div>
                <div className='bg-white text-center p-6 rounded-lg shadow-lg'>
                  <div className='text-5xl font-bold text-blue-500'>1</div>
                  <span className='text-sm text-gray-600'>st</span>
                  <p className='text-gray-600 mt-2'>
                    India's first pure play digital brand in relocation
                  </p>
                </div>
                <div className='bg-white text-center p-6 rounded-lg shadow-lg col-span-full'>
                  <p className='text-gray-600'>Winner of</p>
                  <div className='text-2xl font-semibold text-blue-600'>
                    Emerge 50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className=' relative min-h-screen w-full overflow-hidden py-48 bg-gray-100'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12'>
          <div className='w-full h-72 md:w-1/2 mb-8 md:mb-0 flex justify-center'>
            <img
              src={Monitor}
              alt='Pikkol platform preview'
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left flex flex-col justify-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Pikkol <span className='italic'>(pik-kol)</span>
            </h2>
            <p className='text-xl text-gray-700 italic mb-6'>
              The{' '}
              <span className='font-semibold'>
                ultimate technology platform
              </span>{' '}
              providing a one-stop solution for all relocation requirements.
            </p>
            <ol className='list-decimal list-inside text-gray-800 mb-6 space-y-2'>
              <li>
                <span className='italic'>Transport without any effort</span>.
              </li>
              <li>Secure packing and moving service.</li>
              <li>Hassle-free and transparent process.</li>
              <li>
                The awesome feeling of shifting to your new home while your
                belongings are safely moved.
              </li>
            </ol>
            <p className='text-lg text-gray-600 italic'>
              Example usage: "4 BHK worth of expensive stuff to be sent to Delhi
              from Bangalore? Just pikkol it!"
            </p>
          </div>
        </div>
        <div
          className='absolute bottom-0 right-0 h-[600px] w-[800px] translate-x-1/4 translate-y-1/4 bg-[#3498db]'
          style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}
        />
      </section>

      {/* Training Professionals */}
      <section className='relative min-h-screen w-full overflow-hidden bg-white'>
        <div
          className='absolute left-0 top-0 h-[300px] w-[600px] -translate-x-1/4 -translate-y-1/4 bg-[#3498db]'
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />
        <div className='relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div className='space-y-8'>
              <h2 className='text-7xl font-bold text-gray-900'>600+</h2>
              <h3 className='text-4xl font-medium text-gray-900 mt-2'>
                Trained professionals
              </h3>
              <p className='text-lg leading-relaxed text-gray-600'>
                Our packer and mover teams undergo rigorous continual training
                on standard operating procedures on handling, loading, packing
                and storage to ensure the best care of your valuables and
                memories. We are always more than happy to go that extra mile to
                guarantee your satisfaction.
              </p>
            </div>
            <div className='relative'>
              <img
                src={TrainingImg}
                alt='Training session'
                className='w-full h-full rounded-lg shadow-lg object-cover'
              />
            </div>
          </div>
        </div>
        <div
          className='absolute bottom-0 right-0 h-[600px] w-[800px] translate-x-1/4 translate-y-1/4 bg-[#3498db]'
          style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}
        />
      </section>

      {/* Containerized Fleet */}
      <section className='relative min-h-[600px] overflow-hidden'>
        <div className='absolute inset-0 w-full h-full'>
          <img
            src={Truck}
            alt='Vintage delivery truck'
            width={800}
            height={600}
            className='object-cover w-full h-full'
          />
        </div>
        <div
          className='absolute inset-0 bg-white'
          style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 25% 100%)' }}
        />
        <div className='relative container mx-auto px-4 py-16 md:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div></div>
            <div className='space-y-6 text-left'>
              <h2 className='text-6xl md:text-7xl font-bold text-gray-900'>
                100<span className='text-primary'>+</span>
              </h2>
              <h3 className='text-3xl md:text-4xl font-semibold text-gray-800'>
                Containerized fleet
              </h3>
              <p className='text-lg text-gray-600 leading-relaxed max-w-xl'>
                We ensure that the trucks allotted for your packing and moving
                are fully equipped to handle your belongings in the safest
                possible manner. The large array of dedicated trucks helps us to
                allocate the best possible fit based on accessibility and size
                of your items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers */}
      <section className='relative w-full min-h-[600px] py-16 overflow-hidden bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mb-6'>
            <img
              src={Lakh}
              alt='1 Lakh+ represented in customer photos'
              className='w-full max-w-2xl'
            />
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              Happy Customers
            </h2>
            <p className='text-lg text-gray-600'>
              We consider any transaction where the customer is anything less
              than delighted, to be an incomplete order. This philosophy helps
              us in giving the best quality while serving and results in our
              being the most vociferous spokespersons for our quality. This
              ideology is the reason why we are able to give consistently
              awesome services to our customers and maintain a 98% customer
              satisfaction level.
            </p>
          </div>
        </div>
        <div
          className='absolute bottom-0 right-0 h-[600px] w-[800px] translate-x-1/4 translate-y-1/4 bg-[#3498db]'
          style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}
        />
      </section>

      {/* Partner Brands */}

      <section className=' relative min-h-screen w-full overflow-hidden py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div
            className='absolute left-0 top-0 h-[300px] w-[600px] -translate-x-1/4 -translate-y-1/4 bg-[#3498db]'
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
    </>
  );
};

export default Home;
