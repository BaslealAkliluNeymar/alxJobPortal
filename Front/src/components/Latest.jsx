import React from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Job from './Job'
const Latest = () => {
  return (
    <section className='bg-hero-pattern mt-2 w-full overflow-x-hidden h-screen explore'>
        <div className='container flex justify-between items-center mt-2 latest-m'>
            <div className='flex gap-1 mt-10 border-slate-300 border-2 latest'>
                <h1 className='font-poppins font-semibold text-heroSize explore'>Latest Jobs</h1>
                <span className='text-secondary font-poppins font-semibold text-heroSize explore'>Open</span>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <p className='text-secondary font-poppins text-[14px] explore'>Show all jobs</p>
                <ArrowRightIcon className='bg-secondary'/>
            </div>
        </div>
        <div className='container flex flex-wrap gap-5 w-full'>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
        </div>
    </section>
  )
}

export default Latest