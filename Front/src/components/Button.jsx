import React from 'react'

const Button = (props) => {
  const color = props.name === 'Full-Time' ? 'text-secondary' : 'Marketing' ? 'text-yellow' : 'text-purple' 
  return (
    <div className='w-[90px] h-[34px] rounded-full font-semibold bg-buttonbg flex items-center justify-center' style={{
        color:color
    }}>
        {props.name}
    </div>
  )
}

export default Button