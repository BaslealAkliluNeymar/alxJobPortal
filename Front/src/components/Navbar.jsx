import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DropletIcon, Menu } from 'lucide-react';
const Navbar = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [enter, setEnter] = useState(false);
  const [daz, setDaz] = useState({});
  const [allow, setAllow] = useState('')
  const user = useSelector((state) => state).auth;
  const [size, setSize] = useState(false)
  const [drop, setDrop] = useState(false)
  const navigate = useNavigate();

  const id = JSON.parse(localStorage.getItem('user'))._id
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedin(true);
      setDaz(user);
    }
  }, [user]);


  useEffect(() =>{
    if (window.innerWidth <= 414){
      setDrop(true)
    }
    else{
      setDrop(!drop)
    }

  },[window.innerWidth])

  console.log(size)
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedin(false);
    navigate('/');
  };

  return (
    <div className="nav bg-herobackground flex h-[75px] justify-between items-center w-full">
      <div className="w-full container flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link to="/">
            <svg width="150" height="25" viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_1942)">
              <path d="M19.9994 40C31.0454 40 39.9994 31.046 39.9994 20V6C39.9994 4.4087 39.3673 2.88258 38.2421 1.75736C37.1169 0.632141 35.5907 0 33.9994 0L20.9994 0V8.774C20.9994 10.776 21.1214 12.85 22.1714 14.554C22.9231 15.7752 23.9287 16.8204 25.1199 17.6188C26.3112 18.4171 27.6602 18.9499 29.0754 19.181L29.4584 19.243C29.6163 19.297 29.7534 19.399 29.8505 19.5347C29.9475 19.6704 29.9997 19.8331 29.9997 20C29.9997 20.1669 29.9475 20.3296 29.8505 20.4653C29.7534 20.601 29.6163 20.703 29.4584 20.757L29.0754 20.819C27.0076 21.1568 25.0981 22.1356 23.6166 23.6171C22.135 25.0987 21.1562 27.0082 20.8184 29.076L20.7564 29.459C20.7025 29.6169 20.6005 29.754 20.4647 29.851C20.329 29.9481 20.1663 30.0003 19.9994 30.0003C19.8326 30.0003 19.6699 29.9481 19.5341 29.851C19.3984 29.754 19.2964 29.6169 19.2424 29.459L19.1804 29.076C18.9493 27.6607 18.4165 26.3118 17.6182 25.1205C16.8198 23.9293 15.7746 22.9237 14.5534 22.172C12.8494 21.122 10.7754 21 8.77344 21H0.0234375C0.546438 31.581 9.28944 40 19.9994 40Z" fill="#0E1534"/>
              </g>
              <defs>
              <clipPath id="clip0_5_1942">
                 <rect width="220" height="40" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="flex items-center space-x-4 max-[414px]:hidden">
          {
              JSON.parse(localStorage.getItem('user')).role === 'Professional' ? (
                <Link to="/jobs">
                    <p className="text-green-700 hover:bg-white rounded px-4 py-2">Browse Jobs</p>
                </Link>
              ):(
                <Link to="/talent">
                    <p className="text-green-700 hover:bg-white rounded px-4 py-2">Hire Talent</p>
                </Link>
              )
          }
          <Link to="/projects">
            <p className="text-green-700 hover:bg-white rounded px-4 py-2">Browse Projects</p>
          </Link>
          {!loggedin ? (
            <div className="flex items-center space-x-2 max-[414px]:block">
              <Link to="/login">
                <button className="bg-white text-black p-2 rounded w-20">Login</button>
              </Link>
              <Link to="/sign-up">
                <button className="bg-secondary text-white p-2 rounded w-20">Sign-up</button>
              </Link>
            </div>
          ) : (
            <div className="relative flex items-center space-x-4">
              <div
                className="relative"
                onClick={() => setEnter(!enter)}
              >
                <img
                  src=""
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
               
                {enter && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-4 z-10">
                    {
                      JSON.parse(localStorage.getItem('user')).role === 'Professional' ? (
                        <Link to={`/${id}/profile`}>
                          <p className="hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer">
                            View Profile
                          </p>
                      </Link>
                      ):(
                        <Link to={`/admin`}>
                        <p className="hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer">
                          Dashboard
                        </p>
                      </Link>

                      )
                    }
                    <Link to="/settings">
                      <p className="hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer">
                        Settings
                      </p>
                    </Link>
                    <button
                      className="w-full text-left hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
             
            </div>
          )}
        </div>


        <div className='block md:hidden'>
            {
              drop ? (
                <div className="flex flex-col items-center justify-end space-x-2">
                  <Menu onClick={() => setDrop(!drop)} className='relative'/>
                    <div className='absolute top-14 z-10 space-y-2 border-slate-50 shadow-md p-2'>
                      {
                       !loggedin ? (
                        <>
                           <Link to="/login">
                              <button className="bg-white text-black p-2 rounded w-20">Login</button>
                            </Link>
                            <Link to="/sign-up">
                              <button className="bg-secondary text-white p-2 rounded w-20">Sign-up</button>
                            </Link>
                        </>
                       ):(
                        <div className="relative flex items-center space-x-4">
                         
                              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-4 z-10 top-1">
                                {
                                  JSON.parse(localStorage.getItem('user')).role === 'Professional' ? (
                                    <Link to={`/${id}/profile`}>
                                      <p className="hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer">
                                        View Profile
                                      </p>
                                  </Link>
                                  ):(
                                    <Link to={`/admin`}>
                                    <p className="hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer">
                                      Dashboard
                                    </p>
                                  </Link>
                                  )
                                }
                                <Link to="/settings">
                                  <p className="hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer">
                                    Settings
                                  </p>
                                </Link>
                                <button
                                  className="w-full text-left hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer"
                                  onClick={handleLogout}
                                >
                                  Logout
                                </button>
                              </div>
                      </div>
                       )
                      }
                    </div>
            </div>
              ) :
              <button >
                <Menu onClick={() => setDrop(!drop)}/>
              </button> 
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
