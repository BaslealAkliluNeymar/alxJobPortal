import React from 'react';

const BrowseHero = () => {
  return (
    <section className="flex flex-col mx-auto h-full bg-hero-pattern gap-6 z-[-99] py-10 px-5">
      <div className="container flex-1 max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left Section */}
          <div className="left flex flex-col flex-1 gap-5 border border-slate-600 p-6 rounded-lg bg-opacity-80 backdrop-blur-md shadow-md">
            <p className="font-medium text-heroSize leading-tight w-[375px] text-gray-800">
              Discover more than
            </p>
            <span className="text-secondary font-revalia text-heroSize py-0 font-normal tracking-wider">
              5000+ prospects
            </span>
            <div className="my-2">
              <svg
                width="455"
                height="40"
                viewBox="0 0 455 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path remains the same */}
              </svg>
            </div>
            <p className="font-epilogue font-light text-gray-700 w-[470px]">
              Great platform for job seekers looking for new career heights and passionate about startups.
            </p>
            <div className="relative mt-6">
              <Search className="z-[4]" />
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Popular:</span> UI Designer, UX Researcher, Android, Admin
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 items-center justify-center relative">
            <img src="src/assets/dude.png" alt="Illustration" className="object-cover w-full max-w-md h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseHero;
