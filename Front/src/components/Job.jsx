import React from 'react'
import Button from './Button'

const Job = (props) => {
  const {position , type, location , logo } = props.item
  
  return (
    <div className='flex gap-4 justify-start items-start h-[150px] w-[49%] bg-white p-6 shadow-md'>
        <div className='flex flex-col justify-center items-center h-full border-2 border-slate-200 flex-1'>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex flex-col gap-[0.15rem] justify-between h-full flex-auto'>
            <h1 className='font-bold font-poppins'>{position}</h1>
            <p className='font-epilogue flex justify-start gap-[0.25rem] text-[#515B6F] items-center'>Nomad <span className='bg-[#515B6F] h-1 w-1 rounded-full flex justify-center items-center'></span>{location}</p>
            <div className='flex gap-2'>
                <Button name={type} />
                <Button name="Marketing" />
                <Button name="Design" />
            </div>
        </div>
    </div>
  )
}

export default Job