import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-footerbackground h-[500px] text-white overflow-hidden w-full p-6">
      <div className="container mx-auto flex flex-col justify-between h-full">
        <div className="flex flex-col md:flex-row md:items-start border-b border-slate-500 pb-10 md:h-80">
          <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
            <p className="w-full md:w-[65%] mx-auto md:ml-0 text-lg leading-relaxed">
              Great platform for the job seeker passionate about startups. Find your dream job more easily.
            </p>
          </div>
          <div className="flex-3 flex flex-col md:flex-row gap-12 md:gap-20 justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">About</h1>
              <Link to="/"><p>Company Info</p></Link>
              <Link to="/"><p>Careers</p></Link>
              <Link to="/"><p>Press</p></Link>
              <Link to="/"><p>Blog</p></Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg">Resources</h1>
              <Link to="/"><p>Support</p></Link>
              <Link to="/"><p>Contact Us</p></Link>
              <Link to="/"><p>FAQ</p></Link>
              <Link to="/"><p>Help Center</p></Link>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg">Get Job Notifications</h1>
              <p className="text-sm leading-relaxed">
                The latest job news and articles sent to your inbox weekly.
              </p>
              <form className="flex mt-3">
                <input type="email" className="h-10 w-[60%] p-2 outline-none rounded-l-md text-gray-700" placeholder="Your Email"/>
                <button className="h-10 w-[40%] bg-secondary text-fontColor rounded-r-md font-extrabold">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 text-sm">
          <p className="text-gray-400">2021 @ JobHuntly. All rights reserved.</p>
          <div className="flex gap-3">
            <img src="src/assets/Facebook.png" alt="Facebook" className="h-6 w-6"/>
            <img src="src/assets/Twitter.png" alt="Twitter" className="h-6 w-6"/>
            <img src="src/assets/LinkedIn.png" alt="LinkedIn" className="h-6 w-6"/>
            <img src="src/assets/Instagram.png" alt="Instagram" className="h-6 w-6"/>
            <img src="src/assets/YouTube.png" alt="YouTube" className="h-6 w-6"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
