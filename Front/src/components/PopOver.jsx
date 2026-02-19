import React, { useState } from 'react';
import { ApplyJob } from '../services/jobs';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "./ui/dialog";
import { Briefcase, MapPin, Clock, CheckCircle2, FileText, LayoutList } from 'lucide-react';

const PopOver = ({ PopOver: isOpen, setPop, item, setError }) => {
  const navigate = useNavigate();
  const [isApplying, setIsApplying] = useState(false);

  if (!item) return null;

  const handleClose = () => setPop(false);

  const handleNavigateToProfile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?._id) {
      navigate(`/${user._id}/profile`);
    } else {
      navigate('/login');
    }
    handleClose();
  }

  const handleApply = async (id) => {
    setIsApplying(true);
    try {
      const response = await ApplyJob(id);
      setError(response);
      // We could show a success state here
      setTimeout(() => {
        setIsApplying(false);
        handleClose();
      }, 1500);
    } catch (err) {
      setIsApplying(false);
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setPop}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden bg-white">
        <div className="p-10 pb-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-sm">
                <img
                  src={item.logo || "https://github.com/shadcn.png"}
                  alt={`${item.company} logo`}
                  className="h-16 w-16 object-contain rounded-xl"
                />
              </div>
              <div className="text-left">
                <DialogTitle className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1">
                  {item.jobTitle}
                </DialogTitle>
                <div className="flex flex-wrap items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-green-600"> {item.company} </span>
                  <span className="flex items-center gap-1.5 lowercase font-medium">
                    <MapPin size={12} className="text-slate-400" />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 text-right">
              <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold border border-green-100 uppercase tracking-widest">
                Active Posting
              </span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Posted 2 days ago</p>
            </div>
          </div>
        </div>

        <div className="p-10 space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all">
              <div className="p-2.5 bg-green-100 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</p>
                <p className="text-sm font-extrabold text-slate-800">{item.type}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all">
              <div className="p-2.5 bg-blue-100 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                <Briefcase size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                <p className="text-sm font-extrabold text-slate-800">{item.experience}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all">
              <div className="p-2.5 bg-purple-100 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available</p>
                <p className="text-sm font-extrabold text-slate-800">{item.students?.length || 0} Slots</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-slate-50 pt-8">
            <div className="space-y-3 col-span-2">
              <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                About the Role
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description.join(' ')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                Core Responsibilities
              </h3>
              <ul className="space-y-2.5">
                {item.responsibilities.map((resp, index) => (
                  <li key={index} className="flex gap-3 text-slate-500 text-[13px] font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                Basic Qualifications
              </h3>
              <ul className="space-y-2.5">
                {item.qualifications.map((qual, index) => (
                  <li key={index} className="flex gap-3 text-slate-500 text-[13px] font-medium italic">
                    <CheckCircle2 size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <DialogFooter className="bg-slate-50 p-10 gap-4 border-t border-slate-100 flex-row">
          <button
            onClick={handleNavigateToProfile}
            className="flex-1 px-8 py-4 bg-white text-slate-700 font-bold border-2 border-slate-200 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            Review Profile
          </button>
          <button
            onClick={() => handleApply(item._id)}
            disabled={isApplying}
            className="flex-[2] px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isApplying ? (
              <span className="flex items-center gap-3">
                <div className="h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopOver;
