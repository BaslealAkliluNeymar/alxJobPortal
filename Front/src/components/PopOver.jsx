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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-none shadow-2xl p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white relative">
          <DialogHeader>
            <div className="flex items-center gap-6">
              <div className="bg-white p-3 rounded-2xl shadow-lg border-4 border-white/20">
                <img
                  src={item.logo || "https://github.com/shadcn.png"}
                  alt={`${item.company} logo`}
                  className="h-16 w-16 object-contain rounded-xl"
                />
              </div>
              <div className="text-left">
                <DialogTitle className="text-3xl font-bold tracking-tight text-white mb-2">
                  {item.jobTitle}
                </DialogTitle>
                <div className="flex flex-wrap items-center gap-4 text-green-50 text-sm font-medium">
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                    {item.company}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10 lowercase">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="p-8 space-y-8 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg text-green-600">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</p>
                <p className="text-sm font-bold text-slate-700">{item.type}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Briefcase size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Exp.</p>
                <p className="text-sm font-bold text-slate-700">{item.experience}</p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3 col-span-2 md:col-span-1">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
                <p className="text-sm font-bold text-slate-700">Accepting</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <FileText size={20} className="text-green-600" />
              Job Description
            </h3>
            <ul className="space-y-3">
              {item.description.map((desc, index) => (
                <li key={index} className="flex gap-3 text-slate-600 leading-relaxed text-sm">
                  <div className="h-1.5 w-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <LayoutList size={20} className="text-blue-600" />
                Responsibilities
              </h3>
              <ul className="space-y-2.5">
                {item.responsibilities.map((resp, index) => (
                  <li key={index} className="flex gap-2.5 text-slate-600 text-sm italic">
                    <span className="text-blue-400 font-bold">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <CheckCircle2 size={20} className="text-purple-600" />
                Qualifications
              </h3>
              <ul className="space-y-2.5">
                {item.qualifications.map((qual, index) => (
                  <li key={index} className="flex gap-2.5 text-slate-600 text-sm">
                    <CheckCircle2 size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <DialogFooter className="bg-slate-50 p-8 gap-4 border-t border-slate-100 sm:flex-row flex-col">
          <button
            onClick={handleNavigateToProfile}
            className="flex-1 px-6 py-4 bg-white text-slate-700 font-bold border-2 border-slate-200 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            Update My Resume
          </button>
          <button
            onClick={() => handleApply(item._id)}
            disabled={isApplying}
            className="flex-[1.5] px-6 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isApplying ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                Applying...
              </span>
            ) : (
              "Apply for this Position"
            )}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopOver;
