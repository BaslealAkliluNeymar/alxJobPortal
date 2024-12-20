import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-footerbackground  text-white overflow-hidden w-full p-6 h-[50rem] md:h-[30rem]">
      <div className="container mx-auto flex flex-col justify-between h-full">
        <div className="flex flex-col md:flex-row md:items-start border-b border-slate-500 pb-10 md:h-80">
          <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
            <p className="w-full md:w-[65%] my-auto md:ml-0 text-lg leading-relaxed">
              Great platform for the job seeker passionate about startups. Find your dream job more easily.
            </p>
          </div>
          <div className="md:flex-3 md:flex md:flex-row flex flex-wrap gap-12 md:gap-20 justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">About</h1>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>Company Info</p></Link>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>Careers</p></Link>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>Press</p></Link>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>Blog</p></Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">Resources</h1>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>Support</p></Link>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>Contact Us</p></Link>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>FAQ</p></Link>
                <Link to="/" className='hover:underline hover:underline-offset-2 py-1 hover:text-green-300  hover:border-green-300'><p>Help Center</p></Link>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg">Get Job Notifications</h1>
                <p className="text-sm leading-relaxed">
                  The latest job news and articles sent to your inbox weekly.
                </p>
              <form className="flex mt-3">
                <input type="email" className="h-12 w-[65%] p-4 outline-none rounded-l-md text-gray-700" placeholder="Your Email"/>
                <button className="h-12 w-[35%] bg-secondary text-fontColor rounded-r-md font-extrabold">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 text-sm">
          <p className="text-gray-400">2024 @ alxJobPortal. All rights reserved.</p>
          <div className="flex gap-3">
            <img src="src/assets/Facebook.png" alt="Facebook" className="h-6 w-6"/>
            <img src="src/assets/Facebook.png" alt="Facebook" className="h-6 w-6"/>
            <img src="src/assets/Facebook.png" alt="Facebook" className="h-6 w-6"/>
            <img src="src/assets/Facebook.png" alt="Facebook" className="h-6 w-6"/>
            <img src="src/assets/Facebook.png" alt="Facebook" className="h-6 w-6"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
