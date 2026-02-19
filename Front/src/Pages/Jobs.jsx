import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListFilter, Search, ArrowLeft } from 'lucide-react';
import PopOver from '../components/PopOver';
import SkeletonJobCard from '../components/SkeletonJobCard';
import { jobAsyncThunk } from '../reducers/jobReducer';
import { useLocation, useNavigate } from 'react-router-dom'


const Jobs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state?.job?.jobs);

  const [pop, setPop] = useState(false);
  const [popData, setPopData] = useState(null);
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(jobAsyncThunk());
    // Simulate loading for better UX feel
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handlePopOver = (item) => {
    setPopData(item);
    setPop(true);
  };

  const filteredJobs = (jobs || []).filter((item) =>
    item.jobTitle?.toLowerCase().includes(search.toLowerCase()) ||
    item.company?.toLowerCase().includes(search.toLowerCase()) ||
    item.position?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-3 hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-green-600 transition-all border border-transparent hover:border-slate-100 active:scale-95"
            >
              <ArrowLeft size={22} />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight hidden sm:block">Explore Jobs</h1>
          </div>

          <div className="flex-1 max-w-2xl relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all"
              placeholder="Search by role, company or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-400 font-medium text-sm">
            <ListFilter size={18} />
            <span>Filters</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">Opportunities</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Active Job Openings</h2>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <SkeletonJobCard />
              </div>
            ))
          ) : filteredJobs.length > 0 ? (
            filteredJobs.slice(0, visible).map((item, index) => (
              <div
                key={item._id || index}
                onClick={() => handlePopOver(item)}
                className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-green-100 transition-all duration-500 cursor-pointer flex flex-col h-full relative hover:-translate-y-1"
              >
                <div className="absolute top-8 right-8 text-slate-300 group-hover:text-green-500 transition-colors">
                  <ArrowLeft className="rotate-135" size={24} />
                </div>

                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-green-100 transition-all">
                    {item?.logo ? (
                      <img src={item?.logo} alt="logo" className="h-12 w-12 object-contain" />
                    ) : (
                      <Briefcase size={28} className="text-slate-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-1">{item?.jobTitle || item?.position}</h2>
                    <p className="text-sm font-semibold text-slate-400 tracking-wide uppercase">{item?.company}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3.5 py-1.5 text-[10px] font-bold bg-blue-50 text-blue-600 rounded-full uppercase tracking-wider border border-blue-100">
                      {item?.type || 'Full Time'}
                    </span>
                    <span className="px-3.5 py-1.5 text-[10px] font-bold bg-green-50 text-green-600 rounded-full uppercase tracking-wider border border-green-100">
                      {item?.experience || '2+ Yrs'}
                    </span>
                    <span className="px-3.5 py-1.5 text-[10px] font-bold bg-purple-50 text-purple-600 rounded-full uppercase tracking-wider border border-purple-100">
                      Remote
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <MapPin size={18} className="text-slate-300" />
                    <span className="text-sm">{item?.location}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-green-600 font-bold text-sm">View Details</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                    <Search size={16} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-white rounded-[2rem] border border-slate-100 border-dashed">
              <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-slate-200" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No matching jobs found</h3>
              <p className="text-slate-400 max-w-sm mx-auto">We couldn't find any opportunities matching "{search}". Try something else!</p>
              <button
                onClick={() => setSearch('')}
                className="mt-6 text-green-600 font-bold border-b-2 border-green-600 pb-0.5 hover:text-green-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {!loading && filteredJobs.length > visible && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisible(v => v + 6)}
              className="px-12 py-5 bg-slate-900 text-white font-bold rounded-[1.5rem] shadow-2xl shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-1 transition-all active:scale-95"
            >
              Show More Opportunities
            </button>
          </div>
        )}
      </main>

      {/* Popover */}
      {pop && (
        <PopOver
          PopOver={pop}
          setPop={setPop}
          item={popData}
          setError={() => { }}
        />
      )}
    </div>
  );
};

export default Jobs;
