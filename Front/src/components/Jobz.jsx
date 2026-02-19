import React, { useState, useEffect } from "react";
import { getUserJobs, saveJob } from "../services/jobs";
import Job from "./Job";
import Button from "./Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Plus, Building2, MapPin, Users as UsersIcon, Briefcase } from 'lucide-react';

const Jobz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [data, setData] = useState({
    jobTitle: "",
    company: "",
    experience: "Junior",
    type: "Fully Remote",
    location: "",
    description: [],
    responsibilities: [],
    qualifications: [],
    logo: "",
    students: [],
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const found = await getUserJobs();
      setJobs(found);
    };
    fetchJobs();
  }, [])

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleArrayChange = (e, fieldName) => {
    setData({
      ...data,
      [fieldName]: e.target.value.split("\n").filter(line => line.trim() !== ""),
    });
  };

  const handleSave = async () => {
    try {
      const response = await saveJob(data);
      console.log(response);
      setIsOpen(false);
      // Refresh jobs list (mocked)
      const updated = await getUserJobs();
      setJobs(updated);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Job Postings</h1>
          <p className="text-slate-500 font-medium">Manage and monitor your open roles</p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-green-600/20 active:scale-95 flex items-center gap-2"
            >
              <Plus size={20} />
              Post a New Job
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-none shadow-2xl p-0">
            <DialogHeader className="p-8 bg-slate-50 border-b border-slate-100">
              <DialogTitle className="text-2xl font-bold text-slate-800">Job Details</DialogTitle>
            </DialogHeader>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Job Title</label>
                  <input
                    name="jobTitle"
                    value={data.jobTitle}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none transition-all"
                    placeholder="e.g. Senior Product Designer"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Company</label>
                  <input
                    name="company"
                    value={data.company}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none transition-all"
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Location</label>
                  <input
                    name="location"
                    value={data.location}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none transition-all"
                    placeholder="e.g. San Francisco, CA"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Experience</label>
                  <select
                    name="experience"
                    value={data.experience}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-green-400 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Entry">Entry Level</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Description (one per line)</label>
                <textarea
                  name="description"
                  onChange={(e) => handleArrayChange(e, "description")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 h-24 focus:ring-2 focus:ring-green-400 outline-none transition-all"
                ></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Responsibilities (one per line)</label>
                <textarea
                  name="responsibilities"
                  onChange={(e) => handleArrayChange(e, "responsibilities")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 h-24 focus:ring-2 focus:ring-green-400 outline-none transition-all"
                ></textarea>
              </div>
            </div>
            <DialogFooter className="p-8 bg-slate-50 border-t border-slate-100 sm:justify-start">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-green-600/20"
                onClick={handleSave}
              >
                Post Opportunity
              </button>
              <button
                className="bg-white text-slate-500 font-bold py-3 px-8 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all ml-3"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {(jobs?.length > 0 ? jobs : []).map((item, index) => (
          <div
            key={item._id || index}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all p-6 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-green-100 shadow-sm">
                <UsersIcon size={14} />
                {item.students?.length || 0} Apps
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                <img
                  src={item.logo || "https://github.com/shadcn.png"}
                  alt="logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="space-y-2 max-w-[70%]">
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-1">{item.jobTitle || item.position}</h2>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-1">
                    <Building2 size={14} />
                    {item.company}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>

                <div className="flex gap-2 pt-2">
                  <div className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">{item.type}</div>
                  <div className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">{item.experience}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {(!jobs || jobs.length === 0) && (
          <div className="col-span-full py-20 bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400">
            <Briefcase size={48} className="mb-4 opacity-20" />
            <p className="font-bold text-xl">No jobs posted yet</p>
            <p className="text-sm">Start by clicking "Post a New Job" above</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobz;
