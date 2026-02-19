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
} from "../components/UI/dialog";
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
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] border-none shadow-2xl p-0 bg-white">
            <div className="p-8 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-100 p-2.5 rounded-xl">
                  <Briefcase className="text-green-600" size={20} />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-xl font-extrabold text-slate-900 tracking-tight">Post Opportunity</DialogTitle>
                  <p className="text-slate-500 text-[11px] font-medium">Define the core requirements for your next hire</p>
                </DialogHeader>
              </div>
            </div>

            <div className="p-8 pt-0 space-y-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Job Title</label>
                  <input
                    name="jobTitle"
                    value={data.jobTitle}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-2.5 focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700 text-sm"
                    placeholder="e.g. Senior Product Designer"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Company</label>
                  <input
                    name="company"
                    value={data.company}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-2.5 focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700 text-sm"
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Location / Timezone</label>
                  <input
                    name="location"
                    value={data.location}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-2.5 focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700 text-sm"
                    placeholder="e.g. San Francisco or Remote"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Seniority Level</label>
                  <select
                    name="experience"
                    value={data.experience}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-2.5 focus:ring-2 focus:ring-green-400 outline-none transition-all appearance-none cursor-pointer font-medium text-slate-700 text-sm"
                  >
                    <option value="Entry">Entry Level</option>
                    <option value="Junior">Junior Associate</option>
                    <option value="Senior">Senior Leadership</option>
                    <option value="Expert">Subject Expert</option>
                  </select>
                </div>

                <div className="col-span-2 space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Role Description (Key Points)</label>
                  <textarea
                    name="description"
                    placeholder="List the main goals of this role..."
                    onChange={(e) => handleArrayChange(e, "description")}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 h-24 focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-600 leading-relaxed text-sm"
                  ></textarea>
                </div>
              </div>
            </div>

            <DialogFooter className="p-8 pt-0 bg-white sm:justify-start gap-3">
              <button
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-10 rounded-xl transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex-1 text-sm"
                onClick={handleSave}
              >
                Go Live with Posting
              </button>
              <button
                className="bg-slate-100 text-slate-500 font-bold py-3.5 px-8 rounded-xl hover:bg-slate-200 transition-all text-sm"
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
