import React from 'react'
import Button from './Button'

const Job = () => {
  return (
    <div className='flex gap-4 justify-start items-start h-[150px] w-[49%] bg-white p-6 shadow-md'>
        <div>
            <img src='src\assets\Job.png' alt="logo" />
        </div>
        <div className='flex flex-col gap-[0.25rem]'>
            <h1 className='font-bold font-poppins'>Social Media Assistant</h1>
            <p className='font-epilogue flex justify-start gap-[0.25rem] text-[#515B6F] items-center'>Nomad <span className='bg-[#515B6F] h-1 w-1 rounded-full flex justify-center items-center'></span> Paris, France</p>
            <div className='flex gap-2'>
                <Button name="Full-Time" />
                <Button name="Marketing" />
                <Button name="Design" />
            </div>
        </div>
    </div>
  )
}

export default Job