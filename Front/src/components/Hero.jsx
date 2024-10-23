import React from 'react'
import HeroSearch from './HeroSearch'

const Hero = () => {
  return (
    <section className='hero flex flex-col mx-auto h-full bg-hero-pattern gap-2 z-[-99]'>
      <div className='container flex-1'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-3'>
          {/* Left Section */}
          <div className="left flex flex-col flex-1 gap-3 border-slate-600 h-[300px] border-3 justify-center items-start lg:h-auto lg:items-start">
            <p className='font-medium text-heroSize leading-normal w-[375px] sm:w-[300px] md:w-[350px] lg:w-[375px]'>
              Discover more than
            </p>
            <span className='text-secondary font-revalia text-heroSize py-0 font-normal'>
              5000+ prospects
            </span>
            <div>
              <svg
                width="455"
                height="40"
                viewBox="0 0 455 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='hidden sm:block'
              >
                <path d="..." fill="#09F53D" />
              </svg>
            </div>
            <p className='font-epilogue font-extralight w-[300px] sm:w-[400px] md:w-[470px]'>
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>
            <HeroSearch className='z-[4]' />
            <div className='mt-12'>
              <p className='text-sm sm:text-base'>
                Popular: UI Designer, UX Researcher, Android, Admin
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="hero-form flex-1 flex justify-center lg:items-center z-[2]">
            <img
              src='src\assets\dude.png'
              alt='hero-image'
              className='w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
