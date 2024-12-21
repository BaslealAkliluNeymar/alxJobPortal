import React from 'react';
import HeroSearch from './HeroSearch';

const Hero = () => {
  return (
    <section className="hero flex flex-col mx-auto h-full bg-hero-pattern gap-6 px-4 sm:px-6 py-8 sm:py-12 lg:px-20 relative">
      <div className="container flex-1">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="left flex flex-col flex-1 gap-4 border-l-4 border-green-400 pl-4 sm:pl-6 h-auto">
            <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-gray-800 leading-snug">
              Discover more than
            </p>
            <span className="text-secondary font-revalia text-3xl sm:text-4xl md:text-5xl">
              5000+ prospects
            </span>
            <svg
              width="355"
              height="20"
              viewBox="0 0 455 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path d="..." fill="#09F53D" />
            </svg>
            <p className="font-epilogue text-sm sm:text-base md:text-lg text-gray-600 w-full sm:w-[470px]">
              Great platform for job seekers aiming for new career heights and passionate about startups.
            </p>
            <HeroSearch className="z-[4] mt-6 sm:absolute sm:bottom-24 w-[12rem]" />
          </div>

          {/* Right Section */}
          <div className="hero-form flex-1 flex justify-center lg:items-center">
            <img
              src="src/assets/dude.png"
              alt="hero-image"
              className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
