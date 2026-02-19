import React, { useState, useEffect } from "react";
import { Analytics } from "../services/jobs";
import DashboardVis from "./DashboardVis";


import { LayoutDashboard, Users, Briefcase, CheckCircle2, XCircle, Clock, Search, ArrowUpRight } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: "Total Users", value: 0, icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { title: "Jobs Posted", value: 0, icon: Briefcase, color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
    { title: "Pending Review", value: 0, icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100" },
    { title: "Approved", value: 0, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { title: "Rejected", value: 0, icon: XCircle, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
  ]);

  useEffect(() => {
    const fetchAdminJobs = async () => {
      const data = await Analytics();
      setStats(prevStat =>
        prevStat.map(stat => {
          if (stat.title === 'Total Users') return { ...stat, value: data.totalStudents || 0 }
          if (stat.title === 'Jobs Posted') return { ...stat, value: data.totalJobs || 0 }
          if (stat.title === 'Pending Review') return { ...stat, value: data.totalPending || 0 }
          if (stat.title === 'Rejected') return { ...stat, value: data.totalRejected || 0 }
          if (stat.title === 'Approved') return { ...stat, value: data.totalApproved || 0 }
          return stat;
        })
      );
    };
    fetchAdminJobs();
  }, []);

  return (
    <section className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Overview</h1>
          <p className="text-slate-500 font-medium">Real-time performance analytics and system metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-slate-50 text-slate-400 p-3 rounded-xl border border-slate-100 hover:text-green-600 transition-colors">
            <Search size={20} />
          </button>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-slate-900/10 active:scale-95 transition-all">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-3xl border ${stat.border} ${stat.bg} transition-all hover:scale-[1.02] hover:shadow-lg group cursor-default`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-white shadow-sm ${stat.color}`}>
                  <Icon size={22} />
                </div>
                <ArrowUpRight size={14} className="text-slate-300 group-hover:text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.title}</p>
                <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 flex-1">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-xl font-bold text-slate-900">Distribution</h2>
            <select className="bg-slate-50 border-none text-xs font-bold text-slate-500 rounded-lg px-3 py-1.5 outline-none">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <DashboardVis data={stats} />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 px-2 flex items-center gap-2">
            Quick Management
            <div className="h-1 flex-1 bg-slate-50 rounded-full ml-4" />
          </h2>
          <div className="grid gap-4">
            {[
              { label: 'System Users', count: '124 Total', color: 'blue' },
              { label: 'Verified Talents', count: '89 Active', color: 'green' },
              { label: 'Job Opportunities', count: '42 Open', color: 'emerald' },
            ].map((action, i) => (
              <button key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-green-100 transition-all group group-hover:bg-white">
                <div className="flex items-center gap-4">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${action.color}-500 group-hover:scale-150 transition-transform`} />
                  <div className="text-left font-bold">
                    <p className="text-sm text-slate-800">{action.label}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">{action.count}</p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-slate-300 group-hover:text-green-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
