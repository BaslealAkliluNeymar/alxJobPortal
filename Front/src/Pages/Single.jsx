import { Building2, MapPin } from 'lucide-react'
import React,{useState, useEffect, useContext} from 'react'
import SkillCard from '../components/SkillCard'
import { getSingle, setToken } from '../services/talents'
import { useParams } from 'react-router-dom'
import { AllContext } from '../Context/AllContext'

const Single = () => {
  const [detail, setDetail] = useState({})
  const { user } = useContext(AllContext)
  const { id } = useParams()
 
  useEffect(() => {
    const fetchSingle = async () => {
      const token = localStorage.getItem('token');
      setToken(token);
      const data = await getSingle(id);
      setDetail(data);
    };
  
    fetchSingle();
  }, [id]);
  
  console.log(detail)
  
  return (
      <section className='h-full container'>
        <div className='h-[250px] w-full bg-red-200 flex items-center p-4 justify-start gap-8'>
          <img src="" className='w-24 h-24 rounded-full bg-blue' alt="" />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between gap-2'>
              <h1 className='font-bold text-2xl'>{detail?.name}</h1>
              <div className='bg-black w-1 h-8'></div>
              <h1 className='font-bold text-2xl'>{detail?.position}</h1>
            </div>
            <div className='flex items-center justify-start gap-2'>
              <MapPin />
              <p>{detail?.location}</p>
            </div>
          </div>
         
        </div>


        <div className='w-full p-5'>
          <h1 className='font-bold text-2xl text-left mb-5'>Summary</h1>
          <div className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vitae maxime sapiente ea nulla 
              quaerat dolorum aliquam ipsam
              error sint neque pariatur ex odit, provident fugiat cupiditate non earum quas perspiciatis debitis?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, sapiente repellat, possimus ut 
              expedita soluta corporis ab ad assumenda dolores debitis eum esse architecto ipsam laboriosam 
              repudiandae sed? Veniam magnam libero error? Exercitationem ea ullam aspernatur iure unde sapiente 
              saepe amet! Temporibus, maiores nostrum? Sed omnis voluptatibus fugiat, eum magnam aperiam corrupti
              et, quisquam nam, necessitatibus minus officiis doloribus? Sequi debitis tenetur aspernatur maxime.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellat pariatur reiciendis 
              sint fugiat molestias totam possimus quis
              fuga voluptas qui vero magnam alias reprehenderit voluptatum, nemo ea nulla natus error. Asperiores.
            </p>
          </div>
          
        </div>

        <div className='w-full p-5'>
          <h1 className='font-bold text-2xl text-left mb-5'>Skills</h1>
          <div className='shadow-2xl  border-slate-200 border-2 p-4 rounded-lg'>
            <div className='w-auto flex gap-2'>
                {
                  detail?.skills?.map((item,index) =>{
                    return <SkillCard item={item} key={index}/>
                  })
                } 
            </div>
          </div>
          
        </div>


        <div className='w-full p-5'>
          <h1 className='font-bold text-2xl text-left mb-5'>Work History</h1>
          {
            detail?.workHistory?.map((item,index) => {
              return (
                <div key={index} className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            
                  <div className='flex gap-2'>
                  <Building2 />
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center justify-start gap-2'>
                        <h1 className='font-bold text-2xl'>{detail?.name}</h1>
                        <div className='bg-black w-1 h-8'></div>
                        <h1 className='font-bold text-2xl'>{item.position}</h1>
                      </div>
                      <div className='flex items-center justify-start gap-2'>
                        <p>{item.placeofWork}.</p>
                        <div className='flex items-center gap-2'>
                          <p>June, 2024</p>
                          <p>September, 2025</p>
                        </div>
                      </div>

                      <div>
                        <p>{item.summary}</p>
                      </div>
                      <div className='flex gap-2'>
                        {
                          item?.technologies?.map((tech, index) =>{
                            return (
                              <SkillCard item={tech} key={index} />
                            )
                          })
                        }
              

                      </div>
                  </div>
                  </div>
                  
                </div>
              )
            })
          }
          
          
        </div>
        <div className='w-full p-5'>
          <h1 className='font-bold text-2xl text-left mb-5'>Projects</h1>
          <div className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            {
              detail?.projects?.map((item) =>{
                  return(<div className='flex gap-2'>
                    <Building2 />
                     <div className='flex flex-col gap-2'>
                       <div className='flex items-center justify-start gap-2'>
                         <h1 className='font-bold text-2xl'>{item?.nameofProject}</h1>
                         <div className='bg-black w-1 h-8'>{item?.durationofProject}</div>
                         <h1 className='font-bold text-2xl'>Front-End Developer</h1>
                       </div>
                       <div className='flex items-center justify-start gap-2'>
                         <p>Sand Tech Inc.</p>
                         <div className='flex items-center gap-2'>
                           <p>June, 2024</p>
                           <p>September, 2025</p>
                         </div>
                       </div>
       
                       <div>
                         <p>{item?.summary}</p>
                       </div>
                       <div className='flex gap-2'>
                        {
                          item?.technologies?.map((items,index) =>{
                            return (
                              <SkillCard item={items} key={index} />
                            )
                          })
                        }
                        
                       </div>
                   </div>
                   </div>
                  )
              })
            }
          </div>
        </div>
        <div className='w-full p-5'>
          <h1 className='font-bold text-2xl text-left mb-5'>Resume</h1>
          <div className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            <SkillCard item={"React"} />
          </div> 
        </div>
        <div className='w-full p-8'>
          <h1 className='font-bold text-2xl text-left mb-5'>Education</h1>
          <div className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            {
              detail?.education?.map((itemz,index) =>{
                return (
                  <div className='flex flex-col justify-center gap-2 mb-2 border-b-2 border-slate-400 pb-2'>
                    <h1 className='font-bold text-2xl'>{itemz?.nameofDegree}</h1>
                    <p>{itemz?.placeofEducation}</p>
                    <div className='flex gap-2 items-center'>
                      <p>June,2016</p>
                      <p>June,2021</p>
                    </div>
                  </div>
                )
              })
            }
          </div> 
       </div>
      </section>

  )
}

export default Single