import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft, LayoutDashboard, Briefcase, Users, MessageSquare } from 'lucide-react';

const Admin = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
    { path: '/admin/jobs', label: 'Manage Jobs', icon: Briefcase },
    { path: '/admin/talents', label: 'Verify Talents', icon: Users },
    { path: '/admin/chats', label: 'Support Chats', icon: MessageSquare },
  ];

  return (
    <section className='bg-slate-50 min-h-screen py-10'>
      <div className='container mx-auto px-6 flex flex-col lg:flex-row gap-8'>
        {/* Modern Sidebar */}
        <aside className='lg:w-80 flex-shrink-0'>
          <div className="bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-[2rem] p-8 h-fit lg:sticky lg:top-28">
            <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-green-600 transition-all font-bold text-xs uppercase tracking-widest mb-10 group">
              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-green-50 transition-colors">
                <ArrowLeft size={16} />
              </div>
              <span>Return to Portal</span>
            </Link>

            <div className="mb-10 px-2">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Admin</h1>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Control Center</p>
            </div>

            <nav>
              <ul className="flex flex-col gap-2">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;
                  return (
                    <Link key={item.path} to={item.path} className="group">
                      <li className={`flex items-center gap-4 py-4 px-5 rounded-2xl transition-all duration-300 ${isActive
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 translate-x-1'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                        }`}>
                        <Icon size={20} className={isActive ? 'text-green-400' : 'text-slate-400 group-hover:text-slate-600'} />
                        <span className="font-bold text-sm">{item.label}</span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-20 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">System Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-700">All Modules Functional</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-10 min-h-[70vh]">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admin