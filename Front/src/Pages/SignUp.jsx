import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../reducers/authReducer';
import { ArrowLeft, User, Mail, Lock, Briefcase, ArrowRight, Github } from 'lucide-react';

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [credential, setCredential] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'Employer',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredential((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(signupThunk(credential))
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse min-h-[800px]">
        {/* Left Side - Visual Branding (Reversed for SignUp) */}
        <div className="md:w-1/2 bg-slate-900 relative p-12 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-emerald-600/30 opacity-60"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 text-white mb-20 group">
              <div className="bg-green-500 p-2 rounded-xl group-hover:bg-green-400 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <span className="font-bold uppercase tracking-widest text-xs">Back to Home</span>
            </Link>
            <h1 className="text-5xl font-black text-white leading-tight mb-6 tracking-tighter">
              Start your <span className="text-green-400 underline decoration-green-400/30">journey</span> with us today.
            </h1>
            <p className="text-slate-400 text-lg font-medium max-w-sm">
              Create an account to unlock exclusive opportunities and connect with the best.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Briefcase className="text-green-400" size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Post Opportunities</p>
                <p className="text-slate-500 text-xs font-medium">Find the perfect talent for your team.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="bg-emerald-500/20 p-2 rounded-lg">
                <User className="text-emerald-400" size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Apply for Positions</p>
                <p className="text-slate-500 text-xs font-medium">Get matched with top-tier companies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - SignUp Form */}
        <div className="md:w-1/2 p-12 md:p-20 bg-white flex flex-col justify-center relative">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Create Account</h2>
            <p className="text-slate-500 font-medium">Join our community of professionals.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">First Name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-green-500 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type='text'
                    name='firstname'
                    value={credential.firstname}
                    required
                    onChange={handleChange}
                    placeholder='John'
                    className='w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700 text-sm'
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Last Name</label>
                <input
                  type='text'
                  name='lastname'
                  value={credential.lastname}
                  required
                  onChange={handleChange}
                  placeholder='Doe'
                  className='w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700 text-sm'
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-green-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type='email'
                  name='email'
                  value={credential.email}
                  required
                  onChange={handleChange}
                  placeholder='john@example.com'
                  className='w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700 text-sm'
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Password</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-green-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type='password'
                  name='password'
                  required
                  value={credential.password}
                  onChange={handleChange}
                  placeholder='••••••••'
                  className='w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700 text-sm'
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">I want to...</label>
              <div className="flex gap-4">
                {['Employer', 'Professional'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setCredential(prev => ({ ...prev, role }))}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs border-2 transition-all ${credential.role === role
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-200'
                      }`}
                  >
                    {role === 'Employer' ? 'Hire Talent' : 'Find Work'}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={loading}
              className='w-full py-4 mt-6 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3'
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Create your account <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-slate-500 text-sm font-medium">
            Already a member? <Link to='/login' className='text-green-600 font-bold hover:underline'>Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
