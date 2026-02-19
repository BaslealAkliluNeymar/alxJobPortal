import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MOCK_TALENTS } from "../services/mockData";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import { ArrowLeft, Search as SearchIcon, Filter } from "lucide-react";

const Browse = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(8);

  // Parse query params if locate.state is missing
  const queryParams = new URLSearchParams(locate.search);
  const searchPos = queryParams.get('position') || '';
  const searchLoc = queryParams.get('location') || '';

  useEffect(() => {
    setLoading(true);

    // Simulate network delay for 2 seconds exactly as requested
    const timer = setTimeout(() => {
      let filtered = [...MOCK_TALENTS];

      const searchTerms = locate.state || { position: searchPos, location: searchLoc };

      if (searchTerms.position || searchTerms.role) {
        const term = (searchTerms.position || searchTerms.role).toLowerCase();
        filtered = filtered.filter(t =>
          t.position?.toLowerCase().includes(term) ||
          t.role?.toLowerCase().includes(term) ||
          t.name.toLowerCase().includes(term)
        );
      }

      if (searchTerms.location) {
        const loc = searchTerms.location.toLowerCase();
        filtered = filtered.filter(t => t.location?.toLowerCase().includes(loc));
      }

      // If no filters found anything, show all as fallback for a "standalone" feel, or just show what's found
      setTalents(filtered);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [locate.search, locate.state, searchPos, searchLoc]);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 flex flex-col items-center">
      <div className="container max-w-7xl px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <button
              onClick={() => navigate("/")}
              className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-green-600 hover:border-green-100 transition-all active:scale-95"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Top Talents</h1>
              <p className="text-slate-500 font-medium capitalize">
                {searchPos ? `Matching "${searchPos}"` : "Global talent pool"}
              </p>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <div className="flex-1 md:w-64 relative">
              <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                type="text"
                placeholder="Search..."
                disabled
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-100 shadow-sm text-sm focus:outline-none opacity-50 cursor-not-allowed"
              />
            </div>
            <button className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <SkeletonCard />
              </div>
            ))
          ) : talents.length > 0 ? (
            talents.slice(0, visible).map((talent, index) => (
              <Card
                talent={talent}
                key={talent._id || index}
              />
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center text-center">
              <div className="bg-slate-100 p-8 rounded-full mb-6">
                <SearchIcon size={48} className="text-slate-300" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">No matching talent found</h2>
              <p className="text-slate-500 max-w-md mx-auto">
                We couldn't find anyone matching your exact search for "{searchPos}". Try broadening your criteria or check back later!
              </p>
              <button
                onClick={() => navigate('/talent')}
                className="mt-8 text-green-600 font-bold hover:underline"
              >
                View all talents
              </button>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {!loading && talents.length > visible && (
          <div className="flex justify-center mt-16">
            <button
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 active:scale-95 transition-all duration-200"
              onClick={handleLoadMore}
            >
              Explore More Talent
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
