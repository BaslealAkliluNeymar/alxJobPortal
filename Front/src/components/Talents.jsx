import React, { useState, useEffect } from "react";
import { MOCK_TALENTS } from "../services/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
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
        <DialogContent className="max-w-xl rounded-3xl border-none shadow-2xl p-0 overflow-hidden">
          {selectedTalent && (
            <>
              <div className="bg-slate-900 p-10 text-white relative">
                <div className="absolute top-10 right-10">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border shadow-lg ${getStatusStyle(selectedTalent.status)}`}>
                    {getStatusIcon(selectedTalent.status)}
                    {selectedTalent.status || "Pending Review"}
                  </div>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-2">{selectedTalent.name}</h2>
                <div className="flex items-center gap-4 text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> {selectedTalent.location}</span>
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                  <span className="flex items-center gap-1.5 text-green-500"><Code2 size={16} /> Candidate</span>
                </div>
              </div>

              <div className="p-10 space-y-8 bg-white">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Key Professional Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTalent.skills?.map((skill, i) => (
                      <span key={i} className="bg-slate-50 text-slate-700 font-bold px-4 py-2 rounded-xl border border-slate-100 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Documentation</h3>
                  <button className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-green-400 transition-all group">
                    <span className="font-bold text-slate-700 flex items-center gap-3">
                      <User className="text-slate-400" />
                      Full Professional Resume
                    </span>
                    <ExternalLink size={20} className="text-slate-300 group-hover:text-green-500 transition-colors" />
                  </button>
                </div>

                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleUpdateStatus(selectedTalent._id || selectedTalent.id, "Rejected")}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-slate-100 font-bold text-slate-400 hover:border-red-100 hover:bg-red-50 hover:text-red-600 transition-all"
                  >
                    <XCircle size={18} />
                    Reject Application
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedTalent._id || selectedTalent.id, "Approved")}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-green-600 font-bold text-white shadow-xl shadow-green-600/20 hover:bg-green-700 transition-all active:scale-[0.98]"
                  >
                    <CheckCircle size={18} />
                    Approve Talent
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Talents;
