import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonJobCard = () => {
  return (
    <div 
      className="flex gap-4 justify-start items-start h-44 w-[45%] bg-gradient-to-r from-blue-50 to-white p-6 shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Logo Section */}
      <div className="flex justify-center items-center h-[120px] w-[120px] bg-white border-2 border-gray-200 rounded-md">
        <Skeleton height="100%" width="100%" />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col gap-2 justify-between flex-auto">
        {/* Job Title */}
        <Skeleton width="60%" height={20} />
        
        {/* Company and Location */}
        <div className="flex items-center gap-2">
          <Skeleton width="40%" height={15} />
          <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
          <Skeleton width="30%" height={15} />
        </div>

        {/* Job Description */}
        <Skeleton width="80%" height={18} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              height={24}
              width={70}
              style={{ borderRadius: '9999px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonJobCard;
