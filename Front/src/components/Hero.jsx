import React from 'react';
import HeroSearch from './HeroSearch';

const Hero = () => {
  return (
    <section className='hero flex flex-col mx-auto h-full bg-hero-pattern gap-6 px-6 py-12 lg:px-20 relative'>
      <div className='container flex-1'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          {/* Left Section */}
          <div className="left flex flex-col flex-1 gap-4 border-l-4 border-green-400 pl-6 h-[300px] lg:h-auto">
            <p className='font-semibold text-4xl md:text-5xl text-gray-800 leading-snug'>
              Discover more than
            </p>
            <span className='text-secondary font-revalia text-4xl md:text-5xl'>
              5000+ prospects
            </span>
            <svg
              width="455"
              height="20"
              viewBox="0 0 455 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='hidden sm:block'
            >
              <path d="..." fill="#09F53D" />
            </svg>
            <p className='font-epilogue text-base md:text-lg text-gray-600 w-full md:w-[470px]'>
              Great platform for job seekers aiming for new career heights and passionate about startups.
            </p>
            <HeroSearch className='z-[4] absolute bottom-24' />
            {/* <div className='mt-6'>
              <p className='text-sm sm:text-base text-gray-500'>
                Popular: UI Designer, UX Researcher, Android, Admin
              </p>
            </div> */}
          </div>

          {/* Right Section */}
          <div className="hero-form flex-1 flex justify-center lg:items-center">
            <img
              src='src/assets/dude.png'
              alt='hero-image'
              className='w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] hover:scale-105 transition-transform duration-300'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
