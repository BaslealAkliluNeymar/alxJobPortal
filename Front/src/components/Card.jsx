import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Star, ChevronRight, GraduationCap } from 'lucide-react';

const Card = (props) => {
  const { _id, name, position, location, experience, skills, avatar, workHistory, education } = props.talent;

  // Derive experience if not explicitly provided as a top-level prop
  const displayExperience = experience || workHistory?.[0]?.years || "2+";

  return (
    <Link to={`/talent/${_id}`} className="group block h-full">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-green-100 transition-all duration-500 overflow-hidden flex flex-col h-full relative group-hover:-translate-y-1">

        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-6">
            <div className="flex gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-200 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={avatar || "https://github.com/shadcn.png"}
                  alt={name}
                  className="relative w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 line-clamp-1 group-hover:text-green-600 transition-colors">{name}</h3>
                <p className="text-sm font-semibold text-green-600">{position}</p>
                <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                  <MapPin size={14} className="text-slate-300" />
                  <span className="text-xs font-medium">{location || "Remote"}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-2 rounded-xl text-slate-400 group-hover:text-green-500 group-hover:bg-green-50 transition-all">
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full border border-blue-100">
              <Star size={12} fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{displayExperience} Yrs Exp</span>
            </div>
            {education?.[0] && (
              <div className="flex items-center gap-1.5 bg-purple-50 text-purple-600 px-3 py-1.5 rounded-full border border-purple-100">
                <GraduationCap size={12} />
                <span className="text-[10px] font-bold uppercase tracking-wider">{education[0].nameofDegree.split(' ')[0]}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full border border-slate-100">
              <Briefcase size={12} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Available</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Stack</span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{skills?.length || 0} Skills</span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {skills?.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-50 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-100 group-hover:border-green-100 group-hover:bg-white transition-all"
                >
                  {skill}
                </span>
              ))}
              {(skills?.length > 4) && (
                <span className="text-[10px] font-bold text-slate-400 px-1 py-1">+{skills.length - 4}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
