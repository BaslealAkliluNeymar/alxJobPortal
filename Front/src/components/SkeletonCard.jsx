import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-4 w-auto p-6 border border-gray-300 rounded-lg shadow-lg m-4 bg-white relative aspect-video">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Skeleton circle={true} width={64} height={64} />
          <div className="bg-green-400 w-4 h-4 rounded-full absolute bottom-0 right-0 border-2 border-white"></div>
        </div>
        <div className="flex-1">
          <Skeleton width="70%" height={24} />
          <Skeleton width="50%" height={20} style={{ marginTop: '0.5rem' }} />
        </div>
      </div>

      {/* Experience */}
      <Skeleton width="40%" height={20} />

      {/* Description */}
      <div>
        <Skeleton count={2} />
      </div>

      <hr className="border-t border-gray-300" />

      {/* Skills Section */}
      <h2 className="font-bold text-lg text-gray-800">
        <Skeleton width="30%" />
      </h2>
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            height={28}
            width={80}
            style={{ borderRadius: '0.25rem' }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
