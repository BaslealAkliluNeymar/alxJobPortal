import { Building2, MapPin } from 'lucide-react'
import React,{useState, useEffect, useContext} from 'react'
import SkillCard from '../components/SkillCard'
import { getSingle, setToken } from '../services/talents'
import { useParams } from 'react-router-dom'
import { AllContext } from '../Context/AllContext'

const Single = () => {
  const [detail, setDetail] = useState({})
  // const { user } = useContext(AllContext)
  const { id } = useParams()
  // console.log(user)
  console.log(id)
  useEffect(() =>{
    const fetchSingle = async () =>{
      const token = localStorage.getItem('token')
      setToken(token)
      const data = await getSingle(id)
      setDetail(data)
    }
    fetchSingle()
  },[])
  console.log(detail)
  return (
      <section className='h-full'>
        <div className='h-[250px] w-full bg-red-200 flex items-center p-4 justify-start gap-8'>
          <img src="" className='w-24 h-24 rounded-full bg-blue' alt="" />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between gap-2'>
              <h1 className='font-bold text-2xl'>{detail[0]?.name}</h1>
              <div className='bg-black w-1 h-8'></div>
              <h1 className='font-bold text-2xl'>{detail[0]?.position}</h1>
            </div>
            <div className='flex items-center justify-start gap-2'>
              <MapPin />
              <p>Addis Ababa, Ethiopia</p>
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
          <div className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            
                <SkillCard item={"item"} />
            
            
          </div>
          
        </div>


        <div className='w-full p-5'>
          <h1 className='font-bold text-2xl text-left mb-5'>Work History</h1>
          <div className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            
            <div className='flex gap-2'>
             <Building2 />
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-start gap-2'>
                  <h1 className='font-bold text-2xl'>Basleal Aklilu</h1>
                  <div className='bg-black w-1 h-8'></div>
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
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, corrupti commodi ex ipsam delectus
                    illum officiis et laudantium. Delectus dolore laudantium nulla culpa, et id quibusdam recusandae
                    possimus aliquam ducimus aperiam aut eius minima tempora quis asperiores neque esse? Culpa quibusdam,
                    amet nam sed dolorem iste in aliquam tempore delectus illo, iusto laboriosam error, quo quaerat fugit
                    tenetur placeat. Rerum hic at eveniet sed fugiat repellendus error, distinctio officia ullam facere,
                    doloremque reiciendis. Iure et sed incidunt sequi delectus aspernatur hic aliquam numquam eveniet 
                    soluta sit eum error nihil, expedita vitae consequatur. Nulla facilis quasi natus sapiente 
                    inventore ducimus iusto, facere eaque nisi voluptatibus maiores ipsam ea impedit repudiandae 
                    temporibus? Ab odio placeat laboriosam,
                     corporis, aliquam magni laborum, iusto molestias animi rem et. Vel quaerat similique nesciunt ullam.</p>
                </div>
                <div className='flex gap-2'>
                  <SkillCard item={"HTML"} />
                  <SkillCard item={"HTML"} />
                  <SkillCard item={"HTML"} />
                  <SkillCard item={"HTML"} />

                </div>
            </div>
            </div>
            
          </div>
          
        </div>
        <div className='w-full p-5'>
          <h1 className='font-bold text-2xl text-left mb-5'>Projects</h1>
          <div className='shadow-2xl border-slate-200 border-2 p-4 rounded-lg'>
            
            <div className='flex gap-2'>
             <Building2 />
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-start gap-2'>
                  <h1 className='font-bold text-2xl'>Basleal Aklilu</h1>
                  <div className='bg-black w-1 h-8'></div>
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
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, corrupti commodi ex ipsam delectus
                    illum officiis et laudantium. Delectus dolore laudantium nulla culpa, et id quibusdam recusandae
                    possimus aliquam ducimus aperiam aut eius minima tempora quis asperiores neque esse? Culpa quibusdam,
                    amet nam sed dolorem iste in aliquam tempore delectus illo, iusto laboriosam error, quo quaerat fugit
                    tenetur placeat. Rerum hic at eveniet sed fugiat repellendus error, distinctio officia ullam facere,
                    doloremque reiciendis. Iure et sed incidunt sequi delectus aspernatur hic aliquam numquam eveniet 
                    soluta sit eum error nihil, expedita vitae consequatur. Nulla facilis quasi natus sapiente 
                    inventore ducimus iusto, facere eaque nisi voluptatibus maiores ipsam ea impedit repudiandae 
                    temporibus? Ab odio placeat laboriosam,
                     corporis, aliquam magni laborum, iusto molestias animi rem et. Vel quaerat similique nesciunt ullam.</p>
                </div>
                <div className='flex gap-2'>
                  <SkillCard item={"HTML"} />
                  <SkillCard item={"HTML"} />
                  <SkillCard item={"HTML"} />
                  <SkillCard item={"HTML"} />

                </div>
            </div>
            </div>
            
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
            <div className='flex flex-col justify-center gap-2 mb-2 border-b-2 border-slate-400 pb-2'>
              <h1 className='font-bold text-2xl'>Bachelor's Degree in Electrical and Computer Engineering</h1>
              <p>AAU</p>
              <div className='flex gap-2 items-center'>
                <p>June,2016</p>
                <p>June,2021</p>
              </div>
            </div>

            <div className='flex flex-col justify-center gap-2 border-b-2 border-slate-400 pb-2'>
              <h1 className='font-bold text-2xl'>Bachelor's Degree in Electrical and Computer Engineering</h1>
              <p>AAU</p>
              <div className='flex gap-2 items-center'>
                <p>June,2016</p>
                <p>June,2021</p>
              </div>
            </div>
          </div>

         
          
        </div>
      </section>

  )
}

export default Single