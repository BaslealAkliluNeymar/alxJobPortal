import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-footerbackground h-[500px] text-white overflow-hidden w-full p-4'>
        <div className='container flex flex-col justify-between h-full'>
            <div className='flex border-slate-white h-80'>
                <div className='flex-1 gap-0 m-auto'>
                    <p className='w-[65%]'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                </div>
                <div className='flex-3 flex-col gap-10 m-auto'>
                    <div className='flex gap-10 justify-center items-start'>
                        <div className='flex flex-col gap-4 '>
                            <h1 className='font-semibold'>About</h1>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-semibold'>Resources</h1>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                            <Link to='/'><p>Companies</p></Link>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1>Get Job Notifications</h1>
                            <p>The latest job news, articles, sent to your inbox weekly.</p>
                            <form action="" className='flex justify-center items-center'>
                                <input type="email" className='h-10 w-[60%] p-2 outline-none' placeholder='Your Email'/>
                                <button className='h-10 w-[40%] bg-secondary text-fontColor p-1 font-extrabold flex-1 justify-center items-center'>Subscribe</button>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <p>2021 @ JobHuntly. All rights reserved.</p>
                <div className="flex items-center justify-end gap-2 mt-1">
                    <img src="src\assets\Facebook.png" alt="" />
                    <img src="src\assets\Facebook.png" alt="" />
                    <img src="src\assets\Facebook.png" alt="" />
                    <img src="src\assets\Facebook.png" alt="" />
                    <img src="src\assets\Facebook.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer