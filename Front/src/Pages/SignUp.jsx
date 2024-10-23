import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../services/login'


const SignUp = () => {
  const [credential , setCredential] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    role:""
  })

  console.log(credential)
  
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
    setCredential({
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      role:"Employer"
    })
    const data = await signup(credential)
    console.log(data)
  }

  return (
    <section className='flex w-[80%] border-2 h-[640px]  mx-auto shadow-xl m-4'>
        <div className='flex-1 bg-green-400 w-full h-full'></div>
        <div className='flex-1 flex flex-col items-stretch space-y-10 justify-center h-full w-full'>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl font-bold'>Welcome to </h1>
                <span className='text-xl text-green-400 font-bold'>Your Future</span>
            </div>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-2 items-center'>
            <input placeholder='First Name' type='text' name="firstname" value={credential.firstname} onChange={handleChange} className='w-[60%] border-slate-950 p-2 shadow-lg focus:outline-green-400 h-12'/>
            <input placeholder='Last Name' type='text' name="lastname" value={credential.lastname} onChange={handleChange} className='w-[60%] border-slate-950 p-2 shadow-lg focus:outline-green-400 h-12'/>
            <input placeholder='Email' type='email' name="email" value={credential.email} onChange={handleChange} className='w-[60%] border-slate-950 p-2 shadow-lg focus:outline-green-400 h-12'/>
            <input placeholder='Password' type='password' name="password" value={credential.password} onChange={handleChange} className='w-[60%] border-slate-950 p-2 shadow-lg focus:outline-green-400 h-12'/>
            <select name="role" id="" className='h-12 w-40 focus:outline-green-400 p-2' onChange={handleChange} value="Employer">
              <option value="Employer">Employer</option>
              <option value="Professional">Professional</option>
            </select>
            <button className='w-[40%] shadow-lg border-green-400 border-2 bg-green-200 h-12 mt-4'>Register</button>
          </form>

            <div className='flex gap-1 justify-center items-center'>
                <p>Already have an account?</p>
                <Link to ='/login'><span className='text-green-400'>Login</span></Link>
            </div>
           
        </div>
    </section>
  )
}

export default SignUp