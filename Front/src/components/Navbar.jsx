import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [loggedin, setLoggedin] = useState(false);
  const user = useSelector((state) => state).auth;
  const [daz, setDaz] = useState({});
  const navigate = useNavigate();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedin(true);
      setDaz(user);
    }
  }, [user]);

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
            <svg width="40" height="40" src="./assets/Icon.svg">
             
            </svg>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/talent">
            <p className="text-green-700 hover:bg-white rounded px-4 py-2">Hire Talent</p>
          </Link>
          <Link to="/browse">
            <p className="text-green-700 hover:bg-white rounded px-4 py-2">Browse Projects</p>
          </Link>
          {!loggedin ? (
            <div className="flex items-center space-x-2">
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
                    <Link to="/1/profile">
                      <p className="hover:bg-green-300 hover:text-slate-50 px-2 py-1 rounded cursor-pointer">
                        View Profile
                      </p>
                    </Link>
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
              <button
                className="bg-secondary text-white p-2 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
