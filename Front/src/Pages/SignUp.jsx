import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../services/login';

const SignUp = () => {
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
      const data = await signup(credential);
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
    <section className='flex w-1/2 justify-center items-center bg-gradient-to-r from-blue-500  to-white transition-shadow delay-100 h-[640px] mx-auto shadow-xl rounded-lg overflow-hidden m-4'>
      {/* <div className='flex-1 bg-green-400'></div> */}


      <div className='flex-1 flex flex-col items-center justify-center space-y-8 p-8 bg-white'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Welcome to</h1>
          <span className='text-2xl text-green-500 font-bold'>Your Future</span>
        </div>

        <form onSubmit={handleSubmit} className='w-[60%] space-y-4'>
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
            className='w-full p-3 border rounded-lg shadow-lg focus:outline-green-400'
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
