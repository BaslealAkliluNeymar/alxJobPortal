import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col h-full animate-pulse">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl"></div>
          <div className="space-y-2 pt-1">
            <div className="h-5 w-32 bg-slate-100 rounded-lg"></div>
            <div className="h-4 w-24 bg-slate-100 rounded-lg"></div>
            <div className="h-3 w-20 bg-slate-50 rounded-lg"></div>
          </div>
        </div>
        <div className="w-8 h-8 bg-slate-50 rounded-xl"></div>
      </div>

      <div className="flex gap-2 mb-6">
        <div className="h-8 w-24 bg-slate-50 rounded-full"></div>
        <div className="h-8 w-20 bg-slate-50 rounded-full"></div>
      </div>

      <div className="mt-auto space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-12 bg-slate-50 rounded"></div>
          <div className="h-3 w-16 bg-slate-50 rounded"></div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-6 w-14 bg-slate-50 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
