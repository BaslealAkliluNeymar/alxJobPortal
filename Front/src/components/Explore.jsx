import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <section className='container mx-auto mt-12 mb-4 p-6 bg-white rounded-lg shadow-md flex justify-between items-center'>
      {/* Title Section */}
      <div className='flex items-baseline gap-2'>
        <h1 className='font-poppins font-extrabold text-4xl text-gray-800'>Explore by</h1>
        <span className='text-secondary font-poppins font-extrabold text-4xl text-indigo-500'>Role</span>
      </div>

      {/* Call-to-Action Section */}
      <div className='flex items-center gap-3 hover:scale-105 transition-transform'>
        <Link to='/jobs'>
          <p className='text-indigo-600 font-poppins text-[15px] hover:text-indigo-400 transition-colors cursor-pointer'>
            Show all jobs
          </p>
        </Link>
        <ArrowRightIcon className='w-6 h-6 text-indigo-500 hover:text-indigo-400 transition-colors' />
      </div>
    </section>
  );
};

export default Explore;
