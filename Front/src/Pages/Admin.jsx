import { ArrowLeft, LayoutDashboard, Briefcase, Users, MessageSquare } from 'lucide-react'

const Admin = () => {
  return (
    <section className='bg-slate-50 min-h-screen'>
      <div className='main flex gap-6 p-6'>
        <div className='sidebar w-1/4 max-w-xs'>
          <div className="flex flex-col gap-6 bg-white shadow-sm border border-slate-200 rounded-2xl p-6 h-fit sticky top-6">
            <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-medium mb-2">
              <ArrowLeft size={18} />
              <span>Exit Admin</span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Admin Panel</h1>
            <ul className="flex flex-col gap-4">
              <Link to="/admin/dashboard" className="group">
                <li className="flex items-center gap-3 text-lg font-semibold text-slate-700 group-hover:text-green-600 transition-all p-3 rounded-xl hover:bg-green-50">
                  <LayoutDashboard size={20} className="text-slate-400 group-hover:text-green-500" />
                  Dashboard
                </li>
              </Link>
              <Link to="/admin/jobs" className="group">
                <li className="flex items-center gap-3 text-lg font-semibold text-slate-700 group-hover:text-green-600 transition-all p-3 rounded-xl hover:bg-green-50">
                  <Briefcase size={20} className="text-slate-400 group-hover:text-green-500" />
                  Jobs
                </li>
              </Link>
              <Link to="/admin/talents" className="group">
                <li className="flex items-center gap-3 text-lg font-semibold text-slate-700 group-hover:text-green-600 transition-all p-3 rounded-xl hover:bg-green-50">
                  <Users size={20} className="text-slate-400 group-hover:text-green-500" />
                  Talents
                </li>
              </Link>
              <Link to="/admin/chats" className="group">
                <li className="flex items-center gap-3 text-lg font-semibold text-slate-700 group-hover:text-green-600 transition-all p-3 rounded-xl hover:bg-green-50">
                  <MessageSquare size={20} className="text-slate-400 group-hover:text-green-500" />
                  Chats
                </li>
              </Link>
            </ul>
          </div>

        </div>

        <div className="flex-1 bg-white border border-slate-200 shadow-sm rounded-2xl p-8 min-h-[calc(100vh-3rem)]">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Admin