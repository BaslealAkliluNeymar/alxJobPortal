import React from 'react'

const SkillCard = (props) => {
  // Predefined vibrant colors to cycle through if needed
  const colors = [
    "#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#FF8A5B", 
    "#7B61FF", "#3EC1D3", "#FF6B6B", "#5B5F97", "#F2A65A",
    "#55DDE0", "#FFA69E", "#E76F51", "#8338EC"
  ];

  // Function to generate a color hash based on the skill name
  const generateColor = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  const backgroundColor = generateColor(props.item);

  return (
    <div 
      className='rounded-xl w-auto h-8 p-[1.25rem] flex justify-center items-center text-white shadow-sm' 
      style={{ backgroundColor }}
    >
      <p>{props.item}</p>
    </div>
  );
}

export default SkillCard;
