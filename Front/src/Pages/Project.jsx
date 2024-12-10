import React from 'react';
import desktopImg from '../assets/Desktop.png';
import { Ellipsis, Heart, ThumbsUpIcon } from 'lucide-react';

const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-10">
      <h1 className="text-4xl font-extrabold leading-relaxed tracking-wide text-gray-800 mb-8">
        Browse Projects
      </h1>

      <div
        style={{
          backgroundImage: `url(${desktopImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative w-3/4 h-[45vh] bg-white shadow-lg flex flex-col justify-between rounded-xl transition-transform transform hover:scale-105"
      >

        <div className="absolute top-4 left-4 flex items-center gap-3">
          <button className="p-2 bg-white rounded-full shadow hover:bg-green-200 transition">
            <ThumbsUpIcon className="text-green-500" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-red-200 transition">
            <Heart className="text-red-500" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-yellow-200 transition">
            <Ellipsis className="text-gray-500" />
          </button>
        </div>

        <div className="absolute left-10 top-16">
          <h2 className="text-3xl font-extrabold text-green-300 mb-4 leading-snug">
            Make an Office Management App for ALX Reception
          </h2>
          <div className="flex items-center gap-4 bg-gray-900 bg-opacity-70 p-2 rounded-md w-fit">
            <p className="text-gray-300 text-lg">Reward</p>
            <span className="text-yellow-400 font-bold text-lg">1500 Legacy Points</span>
          </div>
        </div>


        <div className="absolute right-10 top-16 text-center">
          <h1 className="text-8xl font-extrabold text-yellow-300">30</h1>
          <p className="underline text-green-500 text-xl mt-2">Candidates Required</p>
        </div>

        <div className="absolute bottom-6 right-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;