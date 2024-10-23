import React from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
const Explore = () => {
  return (
    <section className='flex justify-between items-center container mb-2 mt-10 explore'>
        <div className='flex gap-1 explore'>
            <h1 className='font-poppins font-semibold text-heroSize explore'>Explore by</h1>
            <span className='text-secondary font-poppins font-semibold text-heroSize explore'>Role</span>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <Link to='/jobs'>
              <p className='text-secondary font-poppins text-[14px] cursor-pointer'>Show all jobs</p>
            </Link>
            <ArrowRightIcon />
        </div>
    </section>
  )
}

export default Explore