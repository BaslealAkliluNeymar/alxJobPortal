import React from 'react';

const SkeletonJobCard = () => {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col h-[350px] animate-pulse">
      <div className="flex items-center gap-5 mb-8">
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 w-[72px] h-[72px]"></div>
        <div className="flex-1 space-y-3">
          <div className="h-5 w-3/4 bg-slate-100 rounded-lg"></div>
          <div className="h-3 w-1/2 bg-slate-100 rounded-md"></div>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-7 w-16 bg-slate-50 rounded-full"></div>
          ))}
        </div>

        <div className="h-4 w-32 bg-slate-50 rounded-md"></div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
        <div className="h-4 w-24 bg-slate-100 rounded-md"></div>
        <div className="w-10 h-10 rounded-full bg-slate-50"></div>
      </div>
    </div>
  );
};

export default SkeletonJobCard;
