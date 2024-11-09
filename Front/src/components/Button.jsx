import React from 'react'

const Button = (props) => {
  let color = props.name === 'Full-Time' ? "#35fb37" :
            props.name === 'Marketing' ? "#3d72d5" : "#202430"
  return (
    <div className='w-auto p-2 h-[34px] rounded-full font-semibold bg-buttonbg flex items-center justify-center' style={{
        backgroundColor:color,
        color:"#f6f1f5"
    }}>
        {props.name}
    </div>
  )
}

export default Button