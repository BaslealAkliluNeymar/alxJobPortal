import { useState } from 'react';

const CitySelector = (props) => {
  const [countries] = useState([
    { country: 'Ethiopia', city: 'Addis Ababa' },
    { country: 'Ghana', city: 'Accra' },
    { country: 'Morocco', city: 'Casablanca' },
    { country: 'South Africa', city: 'Johannesburg' },
    { country: 'Rwanda', city: 'Kigali' },
    { country: 'Nigeria', city: 'Lagos' },
    { country: 'Kenya', city: 'Nairobi' },
  ]);

  const handleSelectChange = (e) => {
    const selectedCity = e.target.value;
    props.func({ ...props.value, location: selectedCity });
  };

  return (
    <select
      className="border border-slate-300 rounded-md px-2 py-1 outline-none w-[80%]"
      onChange={handleSelectChange}
      defaultValue=""
    >
      <option value="" disabled>Select City</option>
      {countries.map((item, index) => (
        <option key={index} value={item.city}>
          {item.city}, {item.country}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
