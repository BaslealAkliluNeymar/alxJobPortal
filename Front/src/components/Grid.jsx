import React,{ useState,useEffect } from 'react'
import GridItem from './GridItem'
import { data } from '../constants/index'
import { useDispatch, useSelector } from 'react-redux'
import {talentThunk} from '../reducers/talentReducer'

const Grid = () => {
  const dispatch = useDispatch()
  const data1 = useSelector((state) => (state.talent.talent))
  console.log(data1)
  const [aggregate, setAggregate] = useState({})
  
  useEffect(() =>{
    dispatch(talentThunk())
  },[])

  useEffect(() =>{ 
     const foudn = (data1.reduce((acc,curr) =>{
      acc[curr.position] = (acc[curr.position] || 0) + 1
      return acc
    },{}))

    setAggregate(foudn)
    
  },[])

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