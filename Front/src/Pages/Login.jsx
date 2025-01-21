import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/authReducer';

const Login = () => {
  const [credential, setCredential] = useState({ email: '', password: '' });
  const dispatch = useDispatch()
  const okay = useSelector((state) => (state.auth.user))
  const [error,setError ] = useState(false)
  console.log(okay)
  const [reload, setReload] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // // console.log(emailRegex.test(credential.email))
    // if (!emailRegex.test(credential.email)) {
    //   alert('Please enter a valid email address');
    //   return;
    // }
    // else{
    const response = await dispatch(login(credential))
    console.log(response.error)
    if(response.error){
      setError(true)
      setTimeout(() =>setError(false),3000)
      }
      else{
        navigate('/')
      }
   
  };

  return (
    <section className='flex justify-center items-center  
            w-full h-[740px] mx-auto shadow-xl rounded-lg overflow-hidden md:m-4 md:mx-auto lg:mx-auto 
            lg:md-4 transition-shadow duration-300 lg:w-[35%] md:w-[40%]'>
              {
                error && (
                  <div className='z-10 absolute top-20 right-8 bg-red-600 text-white p-3 rounded border-3 shadow-md'>
                      <p>An Error Occured</p>
                  </div>
                )
              }
      <div className='flex flex-col items-center space-y-8 justify-center p-8 w-full lg:w-full md:w-full'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Welcome to</h1>
          <span className='text-2xl text-green-500 font-bold'>Your Future</span>
        </div>

        <button className='flex border-2 border-slate-50 items-center space-x-2 justify-center w-3/4 p-3 rounded-lg shadow-md hover:bg-gray-100'>
          <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_492)">
              <path d="M7.09188 19.3378L5.978 23.4961L1.90681 23.5822C0.690125 21.3255 0 18.7436 0 15.9999C0 13.3467 0.64525 10.8447 1.789 8.6416H1.78988L5.41437 9.3061L7.00212 12.9089C6.66981 13.8777 6.48869 14.9177 6.48869 15.9999C6.48881 17.1743 6.70156 18.2997 7.09188 19.3378Z" fill="#FBBB00" />
              <path d="M31.7203 13.0107C31.904 13.9786 31.9998 14.9782 31.9998 15.9997C31.9998 17.1452 31.8794 18.2626 31.6499 19.3404C30.8711 23.0081 28.8359 26.2107 26.0166 28.4771L26.0157 28.4762L21.4504 28.2433L20.8043 24.2099C22.6751 23.1127 24.1371 21.3958 24.9072 19.3404H16.3516V13.0107H25.032H31.7203Z" fill="#518EF8" />
              <path d="M26.0162 28.4763L26.0171 28.4772C23.2752 30.6811 19.792 31.9998 16.0004 31.9998C9.90723 31.9998 4.60966 28.5941 1.90723 23.5823L7.09229 19.3379C8.44348 22.944 11.9222 25.5111 16.0004 25.5111C17.7533 25.5111 19.3956 25.0372 20.8048 24.21L26.0162 28.4763Z" fill="#28B446" />
              <path d="M26.2128 3.6835L21.0295 7.927C19.5711 7.01538 17.8471 6.48875 16.0001 6.48875C11.8295 6.48875 8.28575 9.17356 7.00225 12.909L1.78994 8.64175H1.78906C4.45194 3.50769 9.81631 0 16.0001 0C19.8822 0 23.4418 1.38287 26.2128 3.6835Z" fill="#F14336" />
            </g>
            <defs>
              <clipPath id="clip0_1_492">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Login with Google</p>
        </button>

       

        <div className='flex items-center w-full space-x-4'>
          <hr className='flex-1' />
          <p>OR</p>
          <hr className='flex-1' />
        </div>

        <form onSubmit={handleSubmit} className='w-[60%] space-y-4'>
          <input
            type='email'
            name='email'
            value={credential.email}
            required
            aria-required
            onChange={handleChange}
            placeholder='Email'
            className='w-full p-3 border rounded-lg shadow-lg focus:outline-green-400'
          />
          <input
            type='password'
            name='password'
            required
            aria-required
            value={credential.password}
            onChange={handleChange}
            placeholder='Password'
            className='w-full p-3 border rounded-lg shadow-lg focus:outline-green-400'
          />
          <button className='w-full p-3 bg-green-200 border-2 border-green-400 rounded-lg shadow-lg hover:bg-green-300'>
            Login
          </button>
        </form>

        <div className='flex gap-2'>
          <p>Don't have an account?</p>
          <Link to='/sign-up'>
            <span className='text-green-400'>Register</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
