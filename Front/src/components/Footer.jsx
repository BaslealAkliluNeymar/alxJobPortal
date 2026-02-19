import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Github, Instagram, Music2, Mail, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white w-full">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter text-green-400">alxJobPortal</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              The premier platform for matching ambitious talent with Africa's most innovative startups. Find your mission, not just a job.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-slate-100">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/jobs" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Browse Jobs</Link></li>
              <li><Link to="/talent" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Hire Talent</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-slate-100">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Support Center</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm">Community Guidelines</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-slate-100">Stay Updated</h3>
            <p className="text-slate-400 text-sm">Get the weekly digest of jobs and career tips.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none transition-all pr-12"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-green-600 rounded-lg hover:bg-green-700 transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} alxJobPortal. Empowering African Talent.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="p-2.5 bg-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2.5 bg-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-blue-700 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2.5 bg-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-2.5 bg-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-pink-600 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2.5 bg-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
              <Music2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
