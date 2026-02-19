import React, { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import { talentThunk, talentFiltered } from "../reducers/talentReducer.js";
import SkeletonCard from "../components/SkeletonCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { skills } from '../constants/index.js';
import { Filter, ArrowLeft, SlidersHorizontal, ChevronLeft, Search, Briefcase } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Description = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { talent, loading } = useSelector((state) => state.talent);

  const [select, setSelect] = useState({
    role: "",
    experience: "",
    location: "",
  });
  const [visible, setVisible] = useState(8);
  const [filterVisible, setFilterVisible] = useState(true);

  useEffect(() => {
    dispatch(talentThunk());
  }, [dispatch]);

  const handleRoleChange = (e) => {
    setSelect({
      ...select,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    dispatch(talentFiltered(select));
  };

  const handleLoadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Search/Header Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="p-2.5 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-green-600 transition-all border border-transparent hover:border-slate-100"
            >
              <ArrowLeft size={22} />
            </button>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight hidden sm:block">Find Top Talents</h1>
          </div>

          <div className="flex-1 max-w-xl mx-8 relative hidden md:block">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="text"
              placeholder="Search by name, role Gor skill..."
              className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all"
            />
          </div>

          <button
            onClick={() => setFilterVisible(!filterVisible)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all border ${filterVisible ? 'bg-green-50 text-green-600 border-green-100' : 'bg-white text-slate-600 border-slate-200'}`}
          >
            <SlidersHorizontal size={18} />
            <span>{filterVisible ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 flex gap-10 relative">
        {/* Sidebar Filters */}
        <aside
          className={`${filterVisible ? 'w-80 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-12 overflow-hidden pointer-events-none'} transition-all duration-500 sticky top-28 self-start space-y-8`}
        >
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Filter By</h2>
              <button
                onClick={() => setSelect({ role: "", experience: "", location: "" })}
                className="text-xs font-bold text-green-600 hover:text-green-700"
              >
                Reset
              </button>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Target Role</label>
              <select
                name="role"
                value={select.role}
                onChange={handleRoleChange}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all cursor-pointer appearance-none"
              >
                <option value="">All Disciplines</option>
                {skills.map((item, key) => (
                  <option key={key} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Min. Experience (Years)</label>
              <div className="relative">
                <Briefcase size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                <input
                  type="number"
                  name="experience"
                  placeholder="e.g. 5"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all"
                  value={select.experience}
                  onChange={handleRoleChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Preferred Location</label>
              <select
                name="location"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all cursor-pointer appearance-none"
                value={select.location}
                onChange={handleRoleChange}
              >
                <option value="">Global / Remote</option>
                {["Kigali", "Addis Ababa", "Accra", "Casablanca", "Cairo", "Lagos", "Nairobi", "Johannesberg"].map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
              </select>
            </div>

            <button
              onClick={applyFilters}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98]"
            >
              Update Results
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl text-white shadow-xl shadow-green-600/20">
            <h3 className="font-bold text-xl mb-3">Post a Job?</h3>
            <p className="text-green-50 text-sm mb-6 leading-relaxed">Looking for specific expertise? Post a job and let the talent come to you.</p>
            <button className="w-full bg-white text-green-700 font-bold py-3 rounded-xl hover:bg-green-50 transition-all">Go to Admin</button>
          </div>
        </aside>

        {/* Talent Grid */}
        <main className="flex-1 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full group/list">
            {loading ? (
              Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <SkeletonCard />
                </div>
              ))
            ) : talent.length > 0 ? (
              talent.slice(0, visible).map((item, index) => (
                <div key={item._id || index} className="h-full">
                  <Card talent={item} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-32 flex flex-col items-center text-center">
                <div className="bg-slate-100 p-8 rounded-full mb-6 text-slate-300">
                  <Filter size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No results matching your filters</h3>
                <p className="text-slate-500 max-w-sm mx-auto">Try adjusting your filters or search keywords to find more talent.</p>
                <button
                  onClick={() => setSelect({ role: "", experience: "", location: "" })}
                  className="mt-6 text-green-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {!loading && talent.length > visible && (
            <button
              className="mt-16 px-10 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-2"
              onClick={handleLoadMore}
            >
              Load More Talent
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

export default Description;
