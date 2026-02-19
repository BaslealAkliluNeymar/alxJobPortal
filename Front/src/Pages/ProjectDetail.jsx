import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PROJECTS } from '../services/mockData';
import { ArrowLeft, Rocket, Users, Star, Calendar, CheckSquare, Target, UserCheck, Share2, Heart, Award, Cpu } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate finding the project
        const found = MOCK_PROJECTS.find(p => p._id === id) || MOCK_PROJECTS[0];
        setProject(found);
        setLoading(false);
        window.scrollTo(0, 0);
    }, [id]);

    if (loading || !project) return <div className="min-h-screen bg-slate-50 flex items-center justify-center"><div className="animate-spin h-12 w-12 border-4 border-green-500 border-t-transparent rounded-full"></div></div>;

    const progressPercentage = (project.added_candidates / project.required_candidates) * 100;

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-slate-900 pt-10 pb-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-10 p-3 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-md"
                    >
                        <ArrowLeft size={24} />
                    </button>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="max-w-3xl space-y-6">
                            <div className="flex gap-3">
                                <span className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/20 uppercase tracking-widest">
                                    {project.category}
                                </span>
                                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold border border-blue-500/20 uppercase tracking-widest">
                                    {project.status}
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium">
                                <div className="flex items-center gap-2">
                                    <Award className="text-yellow-500" size={20} />
                                    <span className="text-white font-bold">{project.rewards}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={20} />
                                    <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Target size={20} />
                                    <span>{project.required_candidates} Candidates</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all">
                                <Share2 size={24} />
                            </button>
                            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-red-400">
                                <Heart size={24} />
                            </button>
                            <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-2xl shadow-green-600/20 transition-all active:scale-[0.98]">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Layout */}
            <div className="container mx-auto px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Description */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-green-500 pl-4">Project Overview</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4">Technologies</h2>
                            <div className="flex flex-wrap gap-4">
                                {project.techStack?.map((tech, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 font-bold text-slate-700">
                                        <Cpu size={20} className="text-blue-500" />
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Milestones */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-purple-500 pl-4">Project Milestones</h2>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                                {project.milestones?.map((milestone, i) => (
                                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            <CheckSquare size={18} />
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white group-hover:bg-slate-50 transition-colors">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <p className="font-bold text-slate-900 mb-1">{milestone.split(':')[0]}</p>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed">{milestone.split(':')[1] || milestone}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-10">
                        {/* Team Progress */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                            <h2 className="font-bold text-slate-900 uppercase tracking-widest text-sm text-center">Engagement</h2>
                            <div className="relative h-40 w-40 mx-auto">
                                <svg className="h-full w-full" viewBox="0 0 36 36">
                                    <path className="text-slate-100 stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-green-500 stroke-current transition-all duration-1000 ease-out" strokeWidth="3" strokeDasharray={`${progressPercentage}, 100`} strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-extrabold text-slate-800">{project.added_candidates}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Members</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs font-bold text-slate-400">
                                    <span>Applications</span>
                                    <span>{project.required_candidates} Limit</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full rounded-full transition-all" style={{ width: `${progressPercentage}%` }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Mentors */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                            <h2 className="font-bold text-slate-900 uppercase tracking-widest text-sm flex items-center gap-2">
                                <UserCheck size={18} className="text-blue-500" /> Mentors
                            </h2>
                            <div className="space-y-6">
                                {project.mentors?.map((mentor, i) => (
                                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                        <img src={`https://i.pravatar.cc/150?u=${mentor}`} className="h-12 w-12 rounded-2xl object-cover ring-2 ring-slate-100 group-hover:ring-blue-100 transition-all" alt="" />
                                        <div>
                                            <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{mentor}</p>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alumni Mentor</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                            <h2 className="font-bold text-slate-900 uppercase tracking-widest text-sm flex items-center gap-2">
                                <Rocket size={18} className="text-green-500" /> Requirements
                            </h2>
                            <ul className="space-y-4">
                                {project.requirements?.map((req, i) => (
                                    <li key={i} className="flex gap-4 text-sm font-medium text-slate-600 italic">
                                        <div className="h-5 w-5 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 text-green-500">
                                            <CheckSquare size={14} />
                                        </div>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
