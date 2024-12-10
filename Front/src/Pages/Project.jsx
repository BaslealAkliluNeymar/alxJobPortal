import React from 'react'
import desktopImg from '../assets/Desktop.png';

const Project = () => {
  return (
    <div>
        <h1>Browse Projects</h1>

        <div
         style={{
            backgroundImage: `url(${desktopImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        className="w-50% h-[35vh] bg-white shadow-md flex flex-col justify-between p-4 rounded-lg"
        >

      <div className="">
        <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
          Like
        </button>
        <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
          Wish List

        </button>
        <button className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
          Three Dots
        </button>
      </div>

      <div className='flex gap-2'>
        <div className="mt-10 text-center">
            <h3 className="text-lg font-bold">Job Title</h3>
            <p className="text-sm text-gray-500">Job description or details here...</p>
        </div>
        
        <div className="mt-10 text-center">
            <h1 className="text-lg font-bold">30</h1>
            <p className="text-sm text-gray-500">Candidates Required</p>
        </div>

      </div>

      <div className="">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">
          Apply
        </button>
      </div>
    </div>
    </div>
  )
}

export default Project