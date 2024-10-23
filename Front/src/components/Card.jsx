import React from 'react'
import SkillCard from './SkillCard'
// import userImage from '../assets/user.jpg'
import { Link } from 'react-router-dom'
import { Send } from 'lucide-react'
const Card = (props) => {

  const {_id,name,position,experience, description,skills} = props.talent

  return (
    <Link to={`/talent/${_id}`}>
        <div className='flex flex-col space-y-2 w-[22rem] p-4 border-slate-300 border-2 relative rounded-lg shadow-lg m-2'>
            <div className='flex gap-4 items-center'>
                <img src="" alt="" className='w-16 h-16 rounded-full object-cover bg-slate-600'/>
                <div className='bg-green-400 shadow-2xl w-4 h-4 rounded-full absolute left-16 top-16'></div>
                <p className='text-xl font-bold'>{name}</p>
                <Link to={`/chat/${_id}`}>
                    {/* <div className='flex border-slate-900 border-2 gap-0 items-center'> */}
                        <Send className='text-green-400 hover:underline-offset-1 hover:underline-green-400 ml-14'/>
                        {/* <button className='text-green-400 hover:underline-offset-1 hover:underline-green-400'>Have a Chat</button> */}
                    {/* </div> */}
                </Link>
            </div>
            <h1 className='font-bold text-2xl'>{position}</h1>
            <p className='text-green-400 text-xl font-medium'>{experience} Years experience</p>
            <div>
                <p>
                    {description}
                </p>
            </div>
            <hr />
            <h2 className='font-bold text-2xl'>Skills</h2>
            <div className='flex gap-2 flex-wrap'>
                {
                    skills.map((item,index) =>{
                        return <SkillCard item={item} key={index}/>
                    })
                }
            </div>

            <div>

            </div>
        </div>
    </Link>
  )
}

export default Card