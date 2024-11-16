import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Admin = () => {
  return (
    <section className=''>
      <div className='main flex gap-2 h-screen'>
        <div className='sidebar flex-1 border-2 border-slate-400 rounded-lg w-1/5'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold mb-10 text-center p-4'>Admin</h1>
            <ul className='flex flex-col gap-2'>
                 <Link to='/admin/dashboard'>
                    <li className='text-lg font-sans hover:border-l-4 hover:border-green-300 p-2 focus:border-l-4 focus:border-green-300 cursor-pointer
                      hover:border-6  delay-75 rounded-lg'>
                        Dashboard
                      </li>
                  </Link>
                  <Link to='/admin/users'>
                    <li className='text-lg font-sans hover:border-l-4 hover:border-green-300 p-2 focus:border-l-4 focus:border-green-300 cursor-pointer
                      hover:border-2  delay-75 rounded-lg'>
                        Users
                      </li>
                  </Link>
                  <Link to='/admin/jobs'>
                    <li className='text-lg font-sans hover:border-l-4 hover:border-green-300 p-2 focus:border-l-4 focus:border-green-300 cursor-pointer
                      hover:border-2  delay-75 rounded-lg'>
                        Jobs
                      </li>
                  </Link>
                  <Link to='/admin/talents'>
                    <li className='text-lg font-sans hover:border-l-4 hover:border-green-300 p-2 focus:border-l-4 focus:border-green-300 cursor-pointer
                      hover:border-2  delay-75 rounded-lg'>
                        Talents
                      </li>
                  </Link>
                  <Link to='/admin/chats'>
                    <li className='text-lg font-sans hover:border-l-4 hover:border-green-300 p-2 focus:border-l-4 focus:border-green-300 cursor-pointer
                      hover:border-2  delay-75 rounded-lg'>
                        Chats
                      </li>
                  </Link>
               
            </ul>
        </div>
        </div>

        <div className='flex-4 border-2 border-slate-400 rounded-lg w-4/5'>
          <h1>Admin</h1>
          <p>This is the admin page</p>
          <Outlet />
        </div>
      </div>

    </section>
  )
}

export default Admin