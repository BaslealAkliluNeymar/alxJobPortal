import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PROJECTS } from '../services/mockData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { ArrowLeft, Search, Filter, Rocket, Star, Users, Briefcase, ChevronRight, Clock, Plus, Lightbulb } from 'lucide-react';

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form State
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: 'Software Development',
    rewards: '',
    required_candidates: 10,
    deadline: ''
  });

  const categories = ['All', 'Software Development', 'Mobile Development', 'AI / Machine Learning', 'UI/UX Design'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || project.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleCreateProject = (e) => {
    e.preventDefault();
    const projectToAdd = {
      ...newProject,
      _id: `p_${Date.now()}`,
      added_candidates: 0,
      status: 'Active',
      mentors: ['You'],
      techStack: ['React', 'Tailwind'], // Defaults
      milestones: ['Initial Setup', 'Development', 'Final Review']
    };

    setProjects([projectToAdd, ...projects]);
    setIsDialogOpen(false);
    setNewProject({
      title: '',
      description: '',
      category: 'Software Development',
      rewards: '',
      required_candidates: 10,
      deadline: ''
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Premium Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-3 hover:bg-slate-50 rounded-2xl text-slate-400 hover:text-green-600 transition-all border border-transparent hover:border-slate-100 active:scale-95"
            >
              <ArrowLeft size={22} />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Community Projects</h1>
              <p className="text-slate-500 text-sm font-medium">Collaborate and earn legacy points</p>
            </div>
          </div>

          <div className="flex-1 max-w-2xl w-full relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all"
              placeholder="Search by project name or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-green-600 transition-colors">
              <Filter size={20} />
            </button>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95 text-sm flex items-center gap-2"
            >
              <Plus size={18} />
              Propose Project
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${category === cat ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/20' : 'bg-white text-slate-500 border-slate-200 hover:border-green-300 hover:text-green-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-green-100 transition-all duration-500 overflow-hidden flex flex-col md:flex-row group"
            >
              {/* Project Image/Visual Area */}
              <div className="md:w-56 bg-slate-900 relative p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20 mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="text-green-400" size={32} />
                  </div>
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em]">Live Status</span>
                  <p className="text-white font-bold text-xl mt-1">{project.status}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-slate-50 px-3 py-1 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-100 italic">
                    {project.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-yellow-500 font-bold text-sm">
                    <Star size={16} fill="currentColor" />
                    <span>{project.rewards?.split(' ')[0] || project.rewards}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-green-600 transition-colors mb-3 line-clamp-1">
                  {project.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Users size={12} /> Team Size
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-slate-800">{project.added_candidates}</span>
                      <span className="text-xs font-bold text-slate-400">/ {project.required_candidates}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Clock size={12} /> Deadline
                    </span>
                    <p className="text-sm font-bold text-slate-800">{new Date(project.deadline).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex -space-x-3 overflow-hidden">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <img
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt=""
                      />
                    ))}
                    <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 text-[10px] font-bold text-slate-400">
                      +4
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/projects/${project._id}`)}
                    className="group/btn flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all"
                  >
                    View Project
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-32 flex flex-col items-center justify-center text-center">
              <div className="bg-slate-100 p-8 rounded-full mb-6">
                <Rocket size={48} className="text-slate-300" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">No projects matching your search</h2>
              <p className="text-slate-500 max-w-sm mx-auto">Try changing your keywords or explore a different category.</p>
              <button
                onClick={() => setSearch('')}
                className="mt-8 text-green-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Propose Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden">
          <div className="bg-slate-900 p-8 text-white relative">
            <div className="absolute top-8 right-8 bg-green-500/10 p-3 rounded-2xl border border-green-500/20">
              <Lightbulb className="text-green-400" size={24} />
            </div>
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold tracking-tight text-white mb-2">Propose Project</DialogTitle>
              <p className="text-slate-400">Launch a new community initiative and find collaborators.</p>
            </DialogHeader>
          </div>

          <form onSubmit={handleCreateProject} className="p-8 space-y-6 bg-white">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Project Title</label>
                <input
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700"
                  placeholder="e.g. AI-driven Campus Marketplace"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                />
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Description</label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700"
                  placeholder="Describe the goals and impact of the project..."
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Category</label>
                <select
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700"
                  value={newProject.category}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                >
                  {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Reward (Points)</label>
                <input
                  required
                  type="text"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700"
                  placeholder="e.g. 1500 Legacy Points"
                  value={newProject.rewards}
                  onChange={(e) => setNewProject({ ...newProject, rewards: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Required Members</label>
                <input
                  required
                  type="number"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700"
                  value={newProject.required_candidates}
                  onChange={(e) => setNewProject({ ...newProject, required_candidates: parseInt(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Deadline Date</label>
                <input
                  required
                  type="date"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700"
                  value={newProject.deadline}
                  onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                />
              </div>
            </div>

            <DialogFooter className="pt-6">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="px-8 py-4 bg-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-200 transition-all mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 py-4 bg-green-600 text-white font-bold rounded-2xl shadow-xl shadow-green-600/20 hover:bg-green-700 transition-all active:scale-95"
              >
                Launch Project
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Project;
