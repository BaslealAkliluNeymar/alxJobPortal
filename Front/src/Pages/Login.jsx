import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authReducer';
import { ArrowLeft, Mail, Lock, ArrowRight, Github, XCircle } from 'lucide-react';

const Login = () => {
  const [credential, setCredential] = useState({ email: '', password: '' });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await dispatch(login(credential))
    setLoading(false);
    if (response.error) {
      setError(true)
      setTimeout(() => setError(false), 3000)
    } else {
      navigate('/')
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        {/* Left Side - Visual Branding */}
        <div className="md:w-1/2 bg-slate-900 relative p-12 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/30 opacity-60"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 text-white mb-20 group">
              <div className="bg-green-500 p-2 rounded-xl group-hover:bg-green-400 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <span className="font-bold uppercase tracking-widest text-xs">Back to Home</span>
            </Link>
            <h1 className="text-5xl font-black text-white leading-tight mb-6 tracking-tighter">
              Find your <span className="text-green-400 underline decoration-green-400/30">dream</span> career path today.
            </h1>
            <p className="text-slate-400 text-lg font-medium max-w-sm">
              Join thousands of professionals and top-tier companies in our community.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
              ))}
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Joined by 10k+ users</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-12 md:p-20 bg-white flex flex-col justify-center relative">
          {error && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-red-50 text-red-600 border border-red-100 px-6 py-3 rounded-2xl font-bold text-xs shadow-xl flex items-center gap-3 animate-bounce">
              <XCircle size={16} />
              Invalid credentials. Please try again.
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Welcome Back</h2>
            <p className="text-slate-500 font-medium">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder='name@company.com'
                  className='w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700'
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Password</label>
                <a href="#" className="text-[10px] font-bold text-green-600 hover:underline">Forgot?</a>
              </div>
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
                  className='w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-green-400 outline-none transition-all font-medium text-slate-700'
                />
              </div>
            </div>

            <button
              disabled={loading}
              className='w-full py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3'
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Sign in to Account <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className='my-10 flex items-center gap-4 text-slate-300 text-[10px] font-bold uppercase tracking-widest'>
            <div className="h-px bg-slate-100 flex-1"></div>
            <span>Social Login</span>
            <div className="h-px bg-slate-100 flex-1"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3.5 border-2 border-slate-50 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 border-2 border-slate-50 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
              <Github size={18} />
              GitHub
            </button>
          </div>

          <p className="mt-12 text-center text-slate-500 text-sm font-medium">
            New here? <Link to='/sign-up' className='text-green-600 font-bold hover:underline'>Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
