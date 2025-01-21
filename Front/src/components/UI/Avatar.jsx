import React from 'react'


const Avatar = ({ src, alt ,className}) =>{ 
    console.log(src)
    return (
        <div className='rounded-full'>
            <img src={src || "https://github.com/shadcn.png"} alt={alt} className={className} />
        </div>
    )
}

export default Avatar