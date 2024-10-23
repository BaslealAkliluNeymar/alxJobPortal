import React from 'react'
import GridItem from './GridItem'
import { data } from '../constants/index'
const Grid = () => {

  return (
    <section className='grid-sm p-2 container flex flex-wrap justify-center items-center mt-4 w-full gap-2'>
        {
          data.map((item,index) =>{
            return (
              <GridItem key={index} items={item} />
            )
          })
        }
    </section>
  )
}

export default Grid