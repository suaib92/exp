import React from 'react';

const ContactUs = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-4xl bg-[#f7ddc8] shadow-xl rounded-2xl p-6'>
        <h1 className='text-xl font-bold text-center text-[#1d305b] mb-6'>
          Find out how much your moving will cost you?
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Address Section */}
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-[#1d305b]'>
              Our Address
            </h2>
            <p className='text-[#2d4273]'>1234 Elm Street</p>
            <p className='text-[#2d4273]'>Springfield, IL 62704</p>
            <p className='text-[#2d4273]'>United States</p>
            <h2 className='text-xl font-semibold text-[#1d305b] mt-4'>
              Contact Information
            </h2>
            <p className='text-[#2d4273]'>Phone: +1 (555) 123-4567</p>
            <p className='text-[#2d4273]'>Email: support@example.com</p>
          </div>

          {/* Contact Form */}
          <form className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-[#1d305b]'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder='Your Name'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-[#1d305b]'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder='Your Email'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-[#1d305b]'
              >
                Message
              </label>
              <textarea
                id='message'
                className='w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
                rows='4'
                placeholder='Your Message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-[#da8b3c] text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
