import React,{ useState,useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginPost } from '../services/login'
import { AllContext } from '../Context/AllContext'

const Login = () => {
  const [credential , setCredential] = useState({
    email:"",
    password:""
  })

  const { user, login,logout } = useContext(AllContext)

  const navigate = useNavigate()
  const handleChange = (e) =>{
    setCredential(() =>{
        return {
            ...credential,
            [e.target.name]: e.target.value
        }
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = await LoginPost(credential)
    console.log(data)
    login(data)
    navigate('/')
  }

  

  return (
    <section className='flex w-[80%] border-2 h-[640px]  mx-auto shadow-xl m-4'>
        <div className='flex-1 bg-green-400 w-full h-full'></div>
        <div className='flex-1 flex flex-col items-stretch space-y-10 justify-center h-full w-full'>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl font-bold'>Welcome to </h1>
                <span className='text-xl text-green-400 font-bold'>Your Future</span>
            </div>
            <button className='flex mx-auto space-x-2 justify-center rounded-lg shadow-md items-center w-3/4 p-2'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_492)">
                    <path d="M7.09188 19.3378L5.978 23.4961L1.90681 23.5822C0.690125 21.3255 0 18.7436 0 15.9999C0 13.3467 0.64525 10.8447 1.789 8.6416H1.78988L5.41437 9.3061L7.00212 12.9089C6.66981 13.8777 6.48869 14.9177 6.48869 15.9999C6.48881 17.1743 6.70156 18.2997 7.09188 19.3378Z" fill="#FBBB00"/>
                    <path d="M31.7203 13.0107C31.904 13.9786 31.9998 14.9782 31.9998 15.9997C31.9998 17.1452 31.8794 18.2626 31.6499 19.3404C30.8711 23.0081 28.8359 26.2107 26.0166 28.4771L26.0157 28.4762L21.4504 28.2433L20.8043 24.2099C22.6751 23.1127 24.1371 21.3958 24.9072 19.3404H16.3516V13.0107H25.032H31.7203Z" fill="#518EF8"/>
                    <path d="M26.0162 28.4763L26.0171 28.4772C23.2752 30.6811 19.792 31.9998 16.0004 31.9998C9.90723 31.9998 4.60966 28.5941 1.90723 23.5823L7.09229 19.3379C8.44348 22.944 11.9222 25.5111 16.0004 25.5111C17.7533 25.5111 19.3956 25.0372 20.8048 24.21L26.0162 28.4763Z" fill="#28B446"/>
                    <path d="M26.2128 3.6835L21.0295 7.927C19.5711 7.01538 17.8471 6.48875 16.0001 6.48875C11.8295 6.48875 8.28575 9.17356 7.00225 12.909L1.78994 8.64175H1.78906C4.45194 3.50769 9.81631 0 16.0001 0C19.8822 0 23.4418 1.38287 26.2128 3.6835Z" fill="#F14336"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_492">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <p>Login with Google</p>
            </button>

            <button className='flex mx-auto space-x-2 justify-center rounded-lg shadow-md items-center w-3/4  p-2'>
                <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0789 5.31333H16V0.225333C15.496 0.156 13.7629 0 11.7444 0C2.50246 0 5.01692 10.4667 4.64895 12H0V17.688H4.64761V32H10.3458V17.6893H14.8054L15.5134 12.0013H10.3445C10.5951 8.236 9.32989 5.31333 13.0789 5.31333Z" fill="#3B5999"/>
                </svg>
                <p>Login with Facebook</p>
            </button>

            <div className='flex space-x-2 w-full justify-center items-center p-2'>
                <hr className='flex-1' />
                <p>OR</p>
                <hr className='flex-1'/>
            </div>

          <form action="" onSubmit={handleSubmit} className='flex flex-col space-y-2 items-center'>
            <input placeholder='Email' type='email' name="email" value={credential.email} onChange={handleChange} className='w-[60%] border-slate-950 p-2 shadow-lg focus:outline-green-400 h-12'/>
            <input placeholder='Password' type='password' name="password" value={credential.password} onChange={handleChange} className='w-[60%] border-slate-950 p-2 shadow-lg focus:outline-green-400 h-12'/>
            <button className='w-[40%] shadow-lg border-green-400 border-2 bg-green-200 h-12 mt-4' onSubmit={handleSubmit}>Login</button>
          </form>

         
            <div className='flex gap-1 justify-center items-center'>
                <p>Don't have an account?</p>
                <Link to ='/sign-up'><span className='text-green-400'>Register</span></Link>
            </div>
           
        
        </div>
    </section>
  )
}

export default Login