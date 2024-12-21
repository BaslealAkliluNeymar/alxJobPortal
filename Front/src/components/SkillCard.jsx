import React from 'react'

const SkillCard = (props) => {

  const colorMap = {
    'A': '#FF6B6B', 'B': '#6BCB77', 'C': '#4D96FF', 'D': '#FFD93D',
    'E': '#FF8A5B', 'F': '#7B61FF', 'G': '#3EC1D3', 'H': '#FF6B6B',
    'I': '#5B5F97', 'J': '#F2A65A', 'K': '#55DDE0', 'L': '#FFA69E',
    'M': '#E76F51', 'N': '#8338EC', 'O': '#FF6B6B', 'P': '#6BCB77',
    'Q': '#4D96FF', 'R': '#FFD93D', 'S': '#FF8A5B', 'T': '#7B61FF',
    'U': '#3EC1D3', 'V': '#5B5F97', 'W': '#F2A65A', 'X': '#55DDE0',
    'Y': '#FFA69E', 'Z': '#E76F51'
  }

  const getColor = (text) =>{
    const name = text.charAt(0).toUpperCase()
    return colorMap[name] || '#6BCB77'
  }

  return (
    <div 
      className={`px-3 py-1 bg-blue-100 grayscale-0  text-sm font-medium rounded-full`} 
      style={{
        backgroundColor: getColor(props.item),
        color: '#ffffff'
      }}
    >
      <p className='brightness-100' style={{
        filter: 'brightness(0.2)',
        color: 'huerotate(120deg)'
      }}>{props.item}</p>
    </div>
  );
}

export default SkillCard;
