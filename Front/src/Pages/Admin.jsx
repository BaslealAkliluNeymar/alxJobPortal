import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Admin = () => {
  return (
    <section className=''>
      <div className='main flex gap-2 h-screen'>
        <div className='sidebar flex-1 border-2 border-slate-400 rounded-lg w-1/5'>
        <div className="flex flex-col gap-6 bg-gray-50 shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
            <h1 className="text-3xl font-extrabold text-center text-green-600 border-b-2 pb-4">Admin Panel</h1>
            <ul className="flex flex-col gap-4">
              <Link to="/admin/dashboard">
                <li className="text-lg font-semibold text-gray-800 hover:text-green-600 bg-white hover:bg-green-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 rounded-lg border border-gray-200 hover:border-green-300 cursor-pointer">
                  Dashboard
                </li>
              </Link>
              <Link to="/admin/jobs">
                <li className="text-lg font-semibold text-gray-800 hover:text-green-600 bg-white hover:bg-green-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 rounded-lg border border-gray-200 hover:border-green-300 cursor-pointer">
                  Jobs
                </li>
              </Link>
              <Link to="/admin/talents">
                <li className="text-lg font-semibold text-gray-800 hover:text-green-600 bg-white hover:bg-green-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 rounded-lg border border-gray-200 hover:border-green-300 cursor-pointer">
                  Talents
                </li>
              </Link>
              <Link to="/admin/chats">
                <li className="text-lg font-semibold text-gray-800 hover:text-green-600 bg-white hover:bg-green-100 shadow-sm hover:shadow-lg transition-all duration-300 p-4 rounded-lg border border-gray-200 hover:border-green-300 cursor-pointer">
                  Chats
                </li>
              </Link>
            </ul>
          </div>

        </div>

        <div className="flex-4 border border-gray-300 shadow-lg rounded-xl w-4/5 bg-white p-6 mx-auto">
          <Outlet />
        </div>

      </div>

    </section>
  )
}

export default Admin