import React,{ useEffect,useMemo } from 'react'
import GridItem from './GridItem'
import { useDispatch, useSelector } from 'react-redux'
import {talentThunk} from '../reducers/talentReducer'
import Loading from './Loading'

const Grid = () => {
  const dispatch = useDispatch()
  const data1 = useSelector((state) => (state.talent.talent))


  
  useEffect(() =>{
    dispatch(talentThunk())
  },[])


  const aggregate = useMemo(() => {
    return data1.reduce((acc, curr) => {
        const existing = acc.find(item => item?.name === curr?.position);

        if (existing) {
            existing.number += 1;
        } else {
            acc.push({
                name: curr?.position,
                number: 1,
            });
        }

        return acc;
      }, []);
      
    }, [data1]);


    if(!data1 || data1.length === 0){
      return (
        <div className='flex gap-2 md:col-span-2 justify-center items-center w-full h-96'> 
            <Loading />
        </div>
      );
    }

  return (
    <section className='grid-sm p-2 container flex flex-wrap justify-center items-center mt-4 w-full gap-2'>
        {
          aggregate?.map((item,index) =>{
            return (
              <GridItem key={index} items={item} />
            )
          })
        }
    </section>
  )
}

export default Grid