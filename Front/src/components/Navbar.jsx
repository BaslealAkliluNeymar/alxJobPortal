import React,{ useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AllContext } from '../Context/AllContext'

const Navbar = () => {

  const [loggedin ,setLoggedin] = useState(false)
  const [fun , setFun] = useState()
  const { user } = useContext(AllContext)
  const navigate = useNavigate()




  useEffect(() =>{
    setLoggedin(true)
    navigate('/')
  },[user])




  const handleClick = () =>{
    const tok = localStorage.getItem('token')
    if(tok){
        setLoggedin(true)
    }
  }


  const handleLogout = () =>{
    const removed = localStorage.removeItem('token')
    console.log(removed)
    navigate('/')
    setLoggedin(false)
  }
  return (
    <div className='nav bg-herobackground flex h-[75px] justify-between items-center w-full border-slate-500 border-2'>
        <div className='w-full container flex justify-between items-center'>
            <div>
                <Link to="/">
                    <svg width="100" height="40" viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_5_1942)">
                        <path d="M19.9994 40C31.0454 40 39.9994 31.046 39.9994 20V6C39.9994 4.4087 39.3673 2.88258 38.2421 1.75736C37.1169 0.632141 35.5907 0 33.9994 0L20.9994 0V8.774C20.9994 10.776 21.1214 12.85 22.1714 14.554C22.9231 15.7752 23.9287 16.8204 25.1199 17.6188C26.3112 18.4171 27.6602 18.9499 29.0754 19.181L29.4584 19.243C29.6163 19.297 29.7534 19.399 29.8505 19.5347C29.9475 19.6704 29.9997 19.8331 29.9997 20C29.9997 20.1669 29.9475 20.3296 29.8505 20.4653C29.7534 20.601 29.6163 20.703 29.4584 20.757L29.0754 20.819C27.0076 21.1568 25.0981 22.1356 23.6166 23.6171C22.135 25.0987 21.1562 27.0082 20.8184 29.076L20.7564 29.459C20.7025 29.6169 20.6005 29.754 20.4647 29.851C20.329 29.9481 20.1663 30.0003 19.9994 30.0003C19.8326 30.0003 19.6699 29.9481 19.5341 29.851C19.3984 29.754 19.2964 29.6169 19.2424 29.459L19.1804 29.076C18.9493 27.6607 18.4165 26.3118 17.6182 25.1205C16.8198 23.9293 15.7746 22.9237 14.5534 22.172C12.8494 21.122 10.7754 21 8.77344 21H0.0234375C0.546438 31.581 9.28944 40 19.9994 40Z" fill="#0E1534"/>
                        <path d="M0 19H8.774C10.776 19 12.85 18.878 14.554 17.828C15.886 17.0073 17.0073 15.886 17.828 14.554C18.878 12.85 19 10.776 19 8.774V0H6C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6L0 19ZM46.455 2C46.455 2.53043 46.2443 3.03914 45.8692 3.41421C45.4941 3.78929 44.9854 4 44.455 4C43.9246 4 43.4159 3.78929 43.0408 3.41421C42.6657 3.03914 42.455 2.53043 42.455 2C42.455 1.46957 42.6657 0.960859 43.0408 0.585786C43.4159 0.210714 43.9246 0 44.455 0C44.9854 0 45.4941 0.210714 45.8692 0.585786C46.2443 0.960859 46.455 1.46957 46.455 2ZM211.711 12.104C217.302 12.104 220 16.009 220 20.532V29.027H214.149V21.54C214.149 19.49 213.401 17.798 211.256 17.798C209.111 17.798 208.396 19.49 208.396 21.54V29.026H202.545V21.54C202.545 19.49 201.83 17.798 199.684 17.798C197.539 17.798 196.791 19.49 196.791 21.54V29.026H190.941V20.531C190.941 16.008 193.638 12.103 199.229 12.103C202.285 12.103 204.495 13.307 205.503 15.292C206.575 13.307 208.916 12.102 211.711 12.102V12.104ZM180.427 23.82C182.312 23.82 183.125 22.095 183.125 20.044V12.754H188.975V20.76C188.975 25.544 186.18 29.515 180.427 29.515C174.673 29.515 171.878 25.545 171.878 20.76V12.754H177.729V20.044C177.729 22.094 178.541 23.82 180.427 23.82ZM163.275 29.547C159.602 29.547 157.229 28.278 155.831 25.805L160.057 23.429C160.642 24.47 161.519 24.991 162.982 24.991C164.185 24.991 164.737 24.568 164.737 24.047C164.737 22.062 156.156 24.08 156.156 17.767C156.156 14.707 158.756 12.234 163.177 12.234C167.045 12.234 169.158 14.121 170.101 15.944L165.875 18.352C165.518 17.376 164.412 16.79 163.307 16.79C162.462 16.79 162.007 17.148 162.007 17.636C162.007 19.654 170.588 17.799 170.588 23.917C170.588 27.334 167.24 29.547 163.275 29.547ZM142.833 36.512H136.982V20.858C136.982 15.878 140.72 12.266 145.921 12.266C150.992 12.266 154.86 16.139 154.86 20.858C154.86 26.065 151.414 29.515 146.246 29.515C145.043 29.515 143.841 29.157 142.833 28.603V36.512ZM145.921 24.015C147.774 24.015 149.009 22.583 149.009 20.89C149.009 19.166 147.774 17.766 145.921 17.766C144.068 17.766 142.833 19.166 142.833 20.891C142.833 22.583 144.068 24.015 145.921 24.015ZM131.121 11.03C129.203 11.03 127.611 9.435 127.611 7.515C127.611 5.595 129.203 4 131.121 4C133.039 4 134.632 5.595 134.632 7.515C134.632 9.435 133.039 11.03 131.121 11.03ZM128.196 12.754H134.047V29.027H128.196V12.754ZM116.97 29.515C111.899 29.515 108.031 25.61 108.031 20.858C108.031 16.139 111.899 12.234 116.97 12.234C122.041 12.234 125.909 16.139 125.909 20.858C125.909 25.61 122.041 29.515 116.97 29.515ZM116.97 24.015C118.823 24.015 120.058 22.583 120.058 20.89C120.058 19.166 118.823 17.734 116.97 17.734C115.117 17.734 113.882 19.166 113.882 20.89C113.882 22.583 115.117 24.015 116.97 24.015ZM96.983 37C92.953 37 90.027 35.21 88.532 32.02L93.375 29.417C93.895 30.524 94.87 31.663 96.885 31.663C98.999 31.663 100.396 30.328 100.559 27.985C99.779 28.669 98.543 29.189 96.691 29.189C92.172 29.189 88.531 25.707 88.531 20.825C88.531 16.107 92.4 12.266 97.471 12.266C102.672 12.266 106.41 15.879 106.41 20.858V27.302C106.41 33.16 102.346 37 96.983 37ZM97.373 23.69C99.128 23.69 100.461 22.485 100.461 20.695C100.461 18.938 99.129 17.766 97.373 17.766C95.65 17.766 94.285 18.938 94.285 20.696C94.285 22.486 95.65 23.689 97.373 23.689V23.69ZM78.607 29.515C73.536 29.515 69.667 25.61 69.667 20.858C69.667 16.139 73.536 12.234 78.607 12.234C83.677 12.234 87.546 16.139 87.546 20.858C87.546 25.61 83.678 29.515 78.607 29.515ZM78.607 24.015C80.46 24.015 81.695 22.583 81.695 20.89C81.695 19.166 80.46 17.734 78.607 17.734C76.754 17.734 75.519 19.166 75.519 20.89C75.519 22.583 76.754 24.015 78.607 24.015ZM59.013 7.06V23.494H68.7V29.027H58.2C54.495 29.027 53 27.074 53 23.982V7.06H59.013Z" fill="#0E1534"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5_1942">
                        <rect width="220" height="40" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-6 pl-2 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center justify-center">
                    <li>
                        <Link to="/talent">
                            <p className='block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-400 md:p-0 md:dark:text-green-500' aria-current="page" >Hire Talent</p> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/browse">
                            <p className='text-sm'>Browse Projects</p>
                        </Link>
                    </li>
                    <li>
                        { !loggedin ? ( 
                        <div className='flex items-center space-x-2'>
                            <Link to='/login'><button className='bg-white text-fontColor border-r-1 p-2 w-[92px] font-medium font-epilogue' onClick={handleClick}>Login</button></Link>
                                <div className='w-[2px] h-10 bg-[#D6DDEB]'></div>
                            <Link to='/sign-up'><button className='bg-secondary text-fontColor p-2 w-[108px] font-medium font-epilogue'>Sign-up</button></Link>
                        </div>
                        )
                            : (
                                <div className='w-10 h-10 bg-[#D6DDEB] rounded-full flex items-center space-x-7'>
                                    <img src='' className='contain' />
                                    <div className='w-[2px] h-10 bg-[#D6DDEB]'></div>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )
                    }
                    </li>
                </ul>
               
                
            </div>


        </div>
    </div>
  )
}

export default Navbar