import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import CitySelector from './CitySelector';
import { useNavigate } from 'react-router-dom';

const HeroSearch = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const [value, setValue] = useState({
    title: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/browse', { state: value });
  };

  const handleTitleChange = (e) => {
    setValue({ ...value, title: e.target.value });
  };

  return (
    <div className="absolute w-[80%] z-10 bottom-[9.5rem]">
      <form
        onSubmit={handleSubmit}
        className="hero-form flex gap-4 bg-white shadow-lg rounded-lg overflow-hidden w-[70%] p-3 mx-auto"
      >
        <div className="flex items-center gap-2 border-r border-slate-300 p-3 flex-1">
          <Search className="text-slate-500" />
          <input
            type="text"
            className="outline-none w-full text-slate-700"
            placeholder="Job title or keyword"
            value={value.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex items-center gap-2 p-3 flex-1">
          <MapPin className="text-slate-500" />
          <CitySelector func={setValue} value={value} />
        </div>
        <button className="bg-secondary text-white font-bold p-3 rounded-md w-56 hover:bg-secondary-dark transition-colors">
          Search Positions
        </button>
      </form>
    </div>
  );
};

export default HeroSearch;
