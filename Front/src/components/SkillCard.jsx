import React from 'react'

const SkillCard = (props) => {
  console.log(props)

  // let str = '#'
  // let count = 0
  // const  generateColors = (position) =>{
  //   for (let letter of position){
  //       let code = letter.charCodeAt(0).toString(16)
  //       str += code
  //       count+=1

  //       if(count >= 3){
  //           break
  //       }
  //   }
    
  //   return str.padEnd(7,'0')
    
  // }

  // const backgroundColor = generateColors(props.item)

  return (
    <div className='rounded-xl w-20 h-8 p-[1.25rem] flex justify-center items-center'>
        <p>{props.item}</p>
    </div>
  )
}

export default SkillCard