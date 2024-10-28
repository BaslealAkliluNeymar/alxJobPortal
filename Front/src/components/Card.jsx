import React from 'react';
import SkillCard from './SkillCard';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const Card = (props) => {
  const { _id, name, position, experience, description, skills } = props.talent;

  return (
    <Link to={`/talent/${_id}`}>
      <div className="flex flex-col space-y-4 w-[22rem] p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all m-4 bg-white relative">
        
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="" 
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover bg-slate-600 shadow-md"
            />
            <div className="bg-green-400 w-4 h-4 rounded-full absolute bottom-0 right-0 border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <p className="text-xl font-semibold text-gray-800">{name}</p>
            <h1 className="text-lg text-gray-500">{position}</h1>
          </div>

          {/* Chat Icon */}
          <Link to={`/chat/${_id}`} className="text-green-400 hover:text-green-500">
            <Send size={24} />
          </Link>
        </div>

        {/* Experience */}
        <p className="text-green-500 font-medium text-lg">
          {experience} Years of Experience
        </p>

        {/* Description */}
        <div className="text-gray-600">
          <p>{description}</p>
        </div>

        <hr className="border-t border-gray-300" />

        {/* Skills Section */}
        <h2 className="font-bold text-lg text-gray-800">Skills</h2>
        <div className="flex gap-2 flex-wrap">
          {skills.map((item, index) => (
            <SkillCard item={item} key={index} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
