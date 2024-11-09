import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <section className='container mx-auto mt-12 mb-4 p-6 bg-white rounded-lg shadow-md flex justify-between items-center'>
      {/* Title Section */}
      <div className='flex items-baseline gap-2'>
        <h1 className='font-poppins font-extrabold text-4xl text-gray-800'>Explore by</h1>
        <span className='text-secondary font-poppins font-extrabold text-4xl'>Role</span>
      </div>

      {/* Call-to-Action Section */}
      <div className='flex items-center gap-3 hover:scale-105 transition-transform hover:delay-300'>
        <Link to='/jobs'>
          <p className='text-green-300 font-poppins text-[15px] hover:text-green-300 transition-colors cursor-pointer'>
            Show all jobs
          </p>
        </Link>
        <ArrowRightIcon className='w-6 h-6 text-green-300 hover:text-green-300 transition-colors hover:translate-x-2 hover:delay-300' />
      </div>
    </section>
  );
};

export default Explore;
