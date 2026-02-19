import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../reducers/authReducer';
import { ArrowLeft } from 'lucide-react';

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

  const handleChange = (e) => {
    setCredential((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = dispatch(signupThunk(credential))
      console.log(data);
      setCredential({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'Employer',
      });
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <section className='flex w-full 
          md:w-[40%] lg:w-[35%] justify-center items-center bg-white transition-shadow delay-100 h-auto 
          min-h-[640px] mx-auto shadow-xl rounded-lg overflow-hidden m-4 py-8
          md:h-[740px] relative'>
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center gap-2 text-slate-500 hover:text-green-600 transition-all font-medium"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className='flex-1 flex flex-col items-center justify-center space-y-8 p-4 md:p-8 bg-white drop-shadow-sm shadow-md'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Welcome to</h1>
          <span className='text-2xl text-green-500 font-bold'>Your Future</span>
        </div>

        <form onSubmit={handleSubmit} className='w-full md:w-[70%] space-y-4 px-4 md:px-0'>
          <input
            type='text'
            name='firstname'
            value={credential.firstname}
            onChange={handleChange}
            placeholder='First Name'
            className='w-full p-3 border rounded-lg shadow-lg focus:outline-green-400'
          />
          <input
            type='text'
            name='lastname'
            value={credential.lastname}
            onChange={handleChange}
            placeholder='Last Name'
            className='w-full p-3 border rounded-lg shadow-lg focus:outline-green-400'
          />
          <input
            type='email'
            name='email'
            value={credential.email}
            onChange={handleChange}
            placeholder='Email'
            className='w-full p-3 border rounded-lg shadow-lg focus:outline-green-400'
          />
          <input
            type='password'
            name='password'
            value={credential.password}
            onChange={handleChange}
            placeholder='Password'
            className='w-full p-3 border rounded-lg shadow-lg focus:outline-green-400'
          />
          <select
            name='role'
            value={credential.role}
            onChange={handleChange}
            className='w-1/2 p-3 border rounded-lg shadow-lg focus:outline-green-400 '
          >
            <option value='Employer'>Employer</option>
            <option value='Professional'>Professional</option>
          </select>
          <button className='w-full p-3 bg-green-200 border-2 border-green-400 rounded-lg shadow-lg hover:bg-green-300'>
            Register
          </button>
        </form>

        <div className='flex gap-2'>
          <p>Already have an account?</p>
          <Link to='/login'>
            <span className='text-green-500'>Login</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
