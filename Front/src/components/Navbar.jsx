import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AllContext } from '../Context/AllContext';

const Navbar = () => {
  const [loggedin, setLoggedin] = useState(false);
  const { user } = useContext(AllContext);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedin(true);
    }
  }, [user]);



  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedin(false);
    navigate('/');
  };

  return (
    <div className='nav bg-herobackground flex h-[75px] justify-between items-center w-full border-slate-500 border-2'>
      <div className='w-full container flex justify-between items-center'>
        <div>
          <Link to="/">
            <svg width="100" height="40" /* SVG Path for Logo */></svg>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/talent">
            <p className='text-green-700 hover:bg-white rounded px-4 py-2'>Hire Talent</p>
          </Link>
          <Link to="/browse">
            <p className='text-green-700 hover:bg-white rounded px-4 py-2'>Browse Projects</p>
          </Link>
          {!loggedin ? (
            <div className='flex items-center space-x-2'>
              <Link to='/login'>
                <button 
                  className='bg-white text-black p-2 rounded'
                  onClick={() => setLoggedin(true)}
                >
                  Login
                </button>
              </Link>
              <Link to='/sign-up'>
                <button className='bg-secondary text-white p-2 rounded'>
                  Sign-up
                </button>
              </Link>
            </div>
          ) : (
            <div className='flex items-center space-x-4'>
              <Link to={`/1/profile`}>
                <img src='' alt='Profile' className='w-10 h-10 rounded-full' />
              </Link>
              <button 
                className='bg-secondary text-white p-2 rounded' 
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
