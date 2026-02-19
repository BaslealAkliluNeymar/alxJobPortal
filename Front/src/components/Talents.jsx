import React, { useState, useEffect } from "react";
import { MOCK_TALENTS } from "../services/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/UI/dialog";
import { Search, Filter, MapPin, Code2, CheckCircle, XCircle, Clock, ExternalLink, User } from 'lucide-react';

const Talents = () => {
  const [talents, setTalents] = useState([]);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalents = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/admin/talents", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("API failed");
        const data = await response.json();
        setTalents(data.length > 0 ? data : MOCK_TALENTS);
      } catch (err) {
        console.error("Using mock talents as fallback:", err);
        setTalents(MOCK_TALENTS);
      } finally {
        setLoading(false);
      }
    };

    fetchTalents();
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    setTalents((prev) =>
      prev.map((t) => (t._id === id || t.id === id ? { ...t, status: newStatus } : t))
    );
    setSelectedTalent(null);
  };

  const filteredTalents = talents.filter(
    (talent) =>
      talent.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter ? talent.status?.toLowerCase() === filter.toLowerCase() : true)
  );

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved': return 'bg-green-50 text-green-600 border-green-100';
      case 'rejected': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-yellow-50 text-yellow-600 border-yellow-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved': return <CheckCircle size={14} />;
      case 'rejected': return <XCircle size={14} />;
      default: return <Clock size={14} />;
    }
  };

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Talent Pool</h1>
          <p className="text-slate-500 font-medium">Review and verify professional applications</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          >
            <option value="">All Statuses</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filteredTalents.map((talent) => (
          <div
            key={talent._id || talent.id}
            className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all p-6 flex flex-col h-full relative"
          >
            <div className="absolute top-6 right-6 font-bold uppercase tracking-wider">
              <div className={`px-3 py-1 rounded-full text-[10px] flex items-center gap-1.5 border shadow-sm ${getStatusStyle(talent.status)}`}>
                {getStatusIcon(talent.status)}
                {talent.status || "Pending"}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                <User size={24} className="text-slate-400" />
              </div>
              <div className="max-w-[150px]">
                <h2 className="text-lg font-bold text-slate-900 line-clamp-1">{talent.name}</h2>
                <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                  <MapPin size={12} />
                  {talent.location || "Remote"}
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                <span>Top Skills</span>
                <span>{talent.skills?.length || 0} Total</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(talent.skills || []).slice(0, 3).map((skill, i) => (
                  <span key={i} className="bg-slate-50 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-100">
                    {skill}
                  </span>
                ))}
                {talent.skills?.length > 3 && (
                  <span className="text-[10px] font-bold text-slate-400 px-1 py-1">+{talent.skills.length - 3}</span>
                )}
              </div>
            </div>

            <button
              onClick={() => setSelectedTalent(talent)}
              className="w-full bg-slate-50 text-slate-700 font-bold py-3 rounded-xl border border-slate-200 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all active:scale-[0.98] mt-auto"
            >
              Review Application
            </button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedTalent} onOpenChange={(open) => !open && setSelectedTalent(null)}>
        <DialogContent className="max-w-4xl rounded-[2rem] border-none shadow-2xl p-0 overflow-hidden bg-white">
          {selectedTalent && (
            <div className="flex flex-col">
              <div className="p-8 pb-0 flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <User size={32} className="text-slate-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none mb-1">{selectedTalent.name}</h2>
                    <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {selectedTalent.location}</span>
                      <span className="text-green-600">Candidate</span>
                    </div>
                  </div>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 border shadow-sm ${getStatusStyle(selectedTalent.status)}`}>
                  {getStatusIcon(selectedTalent.status)}
                  {selectedTalent.status || "Pending Review"}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-x-12">
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Expertise & Technical Skills</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTalent.skills?.map((skill, i) => (
                        <span key={i} className="bg-slate-50 text-slate-700 font-bold px-3 py-1.5 rounded-lg border border-slate-100 text-[11px]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Verification Documents</h3>
                    <button className="w-full flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-400 transition-all group">
                      <span className="font-bold text-slate-700 text-xs flex items-center gap-3">
                        <FileText size={16} className="text-slate-400" />
                        Review Resume.pdf
                      </span>
                      <ExternalLink size={16} className="text-slate-300 group-hover:text-green-500 transition-colors" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-400 transition-all group">
                      <span className="font-bold text-slate-700 text-xs flex items-center gap-3">
                        <Briefcase size={16} className="text-slate-400" />
                        Portfolio.link
                      </span>
                      <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleUpdateStatus(selectedTalent._id || selectedTalent.id, "Rejected")}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-slate-100 font-bold text-slate-400 text-sm hover:border-red-100 hover:bg-red-50 hover:text-red-600 transition-all"
                  >
                    <XCircle size={18} />
                    Reject Application
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedTalent._id || selectedTalent.id, "Approved")}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-900 font-bold text-white text-sm shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all active:scale-[0.98]"
                  >
                    <CheckCircle size={18} />
                    Approve Talent
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Talents;
