import React from 'react';
import HomeImage from '../assets/bg-home.jpg';
import Signle from '../assets/single.jpg';
import TrainingImg from '../assets/120+.jpg';
import Truck from '../assets/truck.jpg';
import Lakh from '../assets/lakh.png';
import BrandJson from '../JSONdata/brandLogo.json';

const Home = () => {
  return (
    <>
      <section className='relative bg-[#dbe3f7] '>
        {/* Background with Overlay */}
        <div
          className='relative bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-start w-full'
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${HomeImage})`,
            backgroundSize: 'cover', // Ensures full image is shown
            backgroundPosition: 'center', // Centers image
          }}
        >
          {/* Content Container */}
          <div className='container mx-auto text-white px-6 sm:px-8 md:px-12 lg:px-16'>
            {/* Hero Content */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start text-left w-full py-10'>
              {/* Left Text Section */}
              <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center space-y-4'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white'>
                  Reliable Packers <br /> and Movers You Can Trust
                </h1>
                <h2 className='text-lg sm:text-xl md:text-2xl font-medium text-white'>
                  Yati Relocations makes your move seamless and stress-free,
                  <br /> whether it’s for your home or office.
                  <br />
                  <span className='text-white'>#HappyMoving</span>
                </h2>
                {/* Button Wrapper to center it */}
                <div className='flex justify-center w-full'>
                  <a
                    href='contact-us'
                    className='no-underline bg-[#1d305b] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md hover:bg-[#2c447b]  transition duration-300'
                  >
                    Calculate Your Moving Cost
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      {/* <section className=' relative min-h-screen w-full overflow-hidden py-48 bg-white'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12'>
          <div className='w-full h-72 md:w-1/2 mb-8 md:mb-0 flex justify-center'>
            <img
              src={Monitor}
              alt='Pikkol platform preview'
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-full md:w-1/2 text-left flex flex-col justify-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Yati Relocations{' '}
              <span className='italic'>( YatiRelocations)</span>
            </h2>
            <p className='text-xl text-gray-700 italic mb-6'>
              Moving is more than just packing boxes – it’s about starting a new
              chapter with ease.{' '}
              <span className='font-semibold'>
                At Yati Relocations, we are dedicated to providing reliable and
                professional moving services tailored to your unique needs.{' '}
              </span>{' '}
              Whether you're relocating your family to a new home or
              transitioning your office to a new workspace, we’ve got you
              covered every step of the
            </p>
            <ol className='list-decimal list-inside text-gray-800 mb-6 space-y-2'>
              <li>
                <span className=''>Transport without any effort</span>.
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
          className='absolute bottom-0 right-0 h-[50vh] w-[50vw] translate-x-1/4 translate-y-1/4 bg-[#da8b3c]'
          style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}
        />
      </section> */}

      <section className='container mx-auto px-4 py-16'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* Image Section */}
          <div className='relative w-full flex justify-center'>
            <img
              src={Signle}
              alt='Professional movers carrying boxes'
              className='object-contain w-[250px] sm:w-[300px] md:w-[400px] lg:w-[400px] h-auto rounded-lg'
            />
          </div>

          {/* Content Section */}
          <div className='space-y-8 text-center items-center lg:text-left'>
            {/* Title & Description */}
            <div className='space-y-4'>
              <h3 className='text-[#da8b3c] font-semibold text-lg uppercase tracking-wide'>
                WHY CHOOSE US
              </h3>
              <h2 className='text-3xl sm:text-4xl font-bold text-[#1d305b]'>
                We Are A Professional Moving Company
              </h2>
              <p className='text-[#2c447b] leading-relaxed text-sm sm:text-base'>
                Moving is more than just packing boxes – it’s about starting a
                new chapter with ease. At Yati Relocations, we are dedicated to
                providing reliable and professional moving services tailored to
                your unique needs. Whether you're relocating your family to a
                new home or transitioning your office to a new workspace, we’ve
                got you covered every step of the way.
              </p>
            </div>

            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-15'>
              {/* Buttons */}
              <div className='flex flex-wrap justify-center gap-4'>
                <a href='/about-us'>
                  <button className='px-6 py-3 text-white bg-[#1d305b] hover:bg-[#2c447b] rounded-md'>
                    KNOW MORE
                  </button>
                </a>
                <a href='contact-us'>
                  <button className='px-6 py-3 bg-[#da8b3c] hover:bg-orange-400 text-white rounded-md'>
                    CONTACT US
                  </button>
                </a>
              </div>

              {/* Statistics */}
              <div className='grid grid-cols-2 gap-8 pt-8'>
                <div className='space-y-2'>
                  <div className='flex items-baseline gap-1 justify-center'>
                    <span className='text-4xl sm:text-5xl font-bold text-[#1d305b]'>
                      3
                    </span>
                    <span className='text-[#da8b3c] text-2xl sm:text-3xl font-bold'>
                      +
                    </span>
                  </div>
                  <p className='text-[#2c447b] text-sm sm:text-base'>
                    Years of Experience
                  </p>
                </div>
                <div className='space-y-2'>
                  <div className='flex items-baseline gap-1 justify-center'>
                    <span className='text-4xl sm:text-5xl font-bold text-[#1d305b]'>
                      1000
                    </span>
                    <span className='text-[#da8b3c] text-2xl sm:text-3xl font-bold'>
                      +
                    </span>
                  </div>
                  <p className='text-[#2c447b] text-sm sm:text-base'>
                    Project Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Professionals */}
      <section className='relative min-h-screen w-full overflow-hidden bg-white flex items-center'>
        {/* Top Background Shape */}
        <div
          className='absolute left-0 top-0 h-[30vw] w-[50vw] -translate-x-1/4 -translate-y-1/4 bg-[#1d305b]'
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />

        <div className='relative mx-auto max-w-7xl px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12'>
          {/* Text Section */}
          <div className='text-center lg:text-left max-w-lg space-y-6'>
            <h2 className='text-5xl sm:text-6xl md:text-7xl font-bold text-[#1d305b]'>
              120+
            </h2>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-medium text-[#1d305b]'>
              Skilled Professionals
            </h3>
            <p className='text-base sm:text-lg leading-relaxed text-[#2c447b]'>
              To guarantee the finest care for your treasures and memories, our
              packer and mover teams go through extensive ongoing training on
              standard operating procedures for handling, loading, packing, and
              storing. To ensure your happiness, we are always more than willing
              to go above and beyond.
            </p>
          </div>

          {/* Image Section */}
          <div className='relative flex justify-center w-full max-w-sm sm:max-w-md md:max-w-lg'>
            <img
              src={TrainingImg}
              alt='Training session'
              className='object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg'
            />
          </div>
        </div>

        {/* Bottom Background Shape */}
        <div
          className='absolute bottom-0 right-0 h-[40vh] w-[50vw] translate-x-1/4 translate-y-1/4 bg-[#1d305b]'
          style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}
        />
      </section>

      {/* Containerized Fleet */}
      <section className='relative min-h-[400px] md:min-h-[600px] overflow-hidden'>
        <div className='absolute inset-0 w-full h-full'>
          <img
            src={Truck}
            alt='Vintage delivery truck'
            className='object-cover w-full h-full'
          />
        </div>
        <div
          className='absolute inset-0 bg-[#dbe3f7]'
          style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 25% 100%)' }}
        />
        <div className='relative container mx-auto px-4 py-12 md:py-20 lg:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center'>
            <div></div>
            <div className='space-y-4 text-left'>
              <h2 className='text-5xl sm:text-6xl md:text-7xl font-bold text-[#1d305b]'>
                60<span className='text-primary'>+</span>
              </h2>
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1d305b]'>
                containerized vehicles
              </h3>
              <p className='text-base sm:text-lg md:text-xl text-[#2c447b] leading-relaxed max-w-xl'>
                We make moving hassle-free! Our vehicles are fully equipped to
                keep your belongings safe and secure. With a wide range of
                specialized options, we carefully match the right vehicle to the
                size and needs of your items. Your possessions are in safe hands
                with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers */}
      <section className='relative w-full min-h-[400px] md:min-h-[600px] py-12 md:py-16 overflow-hidden bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mb-6 text-center md:text-left'>
            <img
              src={Lakh}
              alt='1 Lakh+ represented in customer photos'
              className='w-full max-w-2xl mx-auto'
            />
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1d305b] mb-4 md:mb-6'>
              Our Happy Customers
            </h2>
            <p className='text-base sm:text-lg text-[#2c447b] leading-relaxed'>
              At YatiRelocations, we don’t just move belongings – we deliver
              peace of mind. Every day, we strive to make your moving experience
              smooth, safe, and worry-free. Here’s what some of our delighted
              customers have to say:
            </p>
            <ul className='list-disc list-outside text-[#2c447b] mt-4 md:mt-6 space-y-2 md:space-y-3'>
              <li className='text-sm sm:text-base md:text-lg'>
                YatiRelocations went above and beyond. The team was not only
                efficient but also very thoughtful with my fragile items. Highly
                recommend their services!
              </li>
              <li className='text-sm sm:text-base md:text-lg'>
                I was worried about moving, but YatiRelocations made it so easy.
                Their attention to detail and care for my furniture was
                outstanding. I’m so grateful.
              </li>
              <li className='text-sm sm:text-base md:text-lg'>
                What impressed me the most was their professionalism. From
                choosing the right vehicle for my needs to timely delivery,
                everything was flawless. Thank you, YatiRelocations.
              </li>
            </ul>
          </div>
        </div>
        <div
          className='absolute bottom-0 right-0 h-[30vh] md:h-[50vh] w-[50vw] translate-x-1/4 translate-y-1/4 bg-[#1d305b]'
          style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}
        />
      </section>

      {/* Partner Brands */}

      <section className='relative min-h-screen w-full overflow-hidden py-12 md:py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div
            className='absolute left-0 top-0 h-[30vw] w-[50vw] -translate-x-1/4 -translate-y-1/4 bg-[#1d305b]'
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />

          <h2 className='text-3xl sm:text-4xl font-semibold text-center mb-6 text-[#1d305b]'>
            We are trusted by many
          </h2>
          <p className='text-center text-base sm:text-lg text-[#2c447b] leading-relaxed max-w-xl mx-auto mb-10 sm:mb-12'>
            We take pride in being the trusted choice for packing and moving
            services. Join the growing list of satisfied customers who choose
            YatiRelocations for a stress-free moving experience!
          </p>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8'>
            {BrandJson.companies.map((brand, index) => (
              <div key={index} className='flex items-center justify-center'>
                <img
                  src={brand['image-url']}
                  alt={brand.description}
                  className='max-w-[80px] sm:max-w-[100px] h-auto'
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
