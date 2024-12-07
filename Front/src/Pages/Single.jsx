import { Building2, MapPin } from 'lucide-react'
import React,{ useEffect } from 'react'
import SkillCard from '../components/SkillCard'
import { useParams } from 'react-router-dom'
import { talentSingle } from '../reducers/talentReducer'
import { useDispatch, useSelector } from 'react-redux'
const Single = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.talent.talent[0])
  const { id } = useParams()
 
  useEffect(() => {
    dispatch(talentSingle(id))
  }, [id]);
  
  
  
  return (
    <section className="container mx-auto py-8">
    <div className="bg-gradient-to-r h-44 from-blue-50 to-white p-4 rounded-lg flex items-center gap-8">
      <img
        src=""
        className="w-24 h-24 rounded-full bg-blue-500"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h1 className="font-bold text-2xl">{user?.name}</h1>
          <div className="bg-black w-1 h-8"></div>
          <h1 className="font-bold text-2xl">{user?.position}</h1>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <p>{user?.location}</p>
        </div>
      </div>
    </div>

    <div className="mt-8">
      <h1 className="font-bold text-2xl text-left mb-5">Summary</h1>
      <div className="shadow-lg border-slate-200 border-2 p-4 rounded-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          vitae maxime sapiente ea nulla quaerat dolorum aliquam ipsam error
          sint neque pariatur ex odit, provident fugiat cupiditate non earum
          quas perspiciatis debitis? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nam, sapiente repellat, possimus ut expedita
          soluta corporis ab ad assumenda dolores debitis eum esse architecto
          ipsam laboriosam repudiandae sed? Veniam magnam libero error?
          Exercitationem ea ullam aspernatur iure unde sapiente saepe amet!
          Temporibus, maiores nostrum? Sed omnis voluptatibus fugiat, eum
          magnam aperiam corrupti et, quisquam nam, necessitatibus minus
          officiis doloribus? Sequi debitis tenetur aspernatur maxime. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellat
          pariatur reiciendis sint fugiat molestias totam possimus quis fuga
          voluptas qui vero magnam alias reprehenderit voluptatum, nemo ea
          nulla natus error. Asperiores.
        </p>
      </div>
    </div>

    <div className="mt-8">
      <h1 className="font-bold text-2xl text-left mb-5">Skills</h1>
      <div className="shadow-lg border-slate-200 border-2 p-4 rounded-lg">
        <div className="flex flex-wrap gap-2">
          {user?.skills?.map((item, index) => (
            <SkillCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-8">
      <h1 className="font-bold text-2xl text-left mb-5">Work History</h1>
      {user?.workHistory?.map((item, index) => (
        <div
          key={index}
          className="shadow-lg border-slate-200 border-2 p-4 rounded-lg mb-4"
        >
          <div className="flex gap-2">
            <Building2 size={24} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-2xl">{user?.name}</h1>
                <div className="bg-black w-1 h-8"></div>
                <h1 className="font-bold text-2xl">{item.position}</h1>
              </div>
              <div className="flex items-center gap-2">
                <p>{item.placeofWork}.</p>
                <div className="flex items-center gap-2">
                  <p>June, 2024</p>
                  <p>September, 2025</p>
                </div>
              </div>
              <div>
                <p>{item.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item?.technologies?.map((tech, index) => (
                  <SkillCard item={tech} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8">
      <h1 className="font-bold text-2xl text-left mb-5">Projects</h1>
      <div className="shadow-lg border-slate-200 border-2 p-4 rounded-lg">
        {user?.projects?.map((item) => (
          <div key={item.id} className="flex gap-2 mb-4">
            <Building2 size={24} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-2xl">{item?.nameofProject}</h1>
                <div className="bg-black w-1 h-8">
                  {item?.durationofProject}
                </div>
                <h1 className="font-bold text-2xl">Front-End Developer</h1>
              </div>
              <div className="flex items-center gap-2">
                <p>Sand Tech Inc.</p>
                <div className="flex items-center gap-2">
                  <p>June, 2024</p>
                  <p>September, 2025</p>
                </div>
              </div>
              <div>
                <p>{item?.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item?.technologies?.map((tech, index) => (
                  <SkillCard item={tech} key={index} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-8">
      <h1 className="font-bold text-2xl text-left mb-5">Resume</h1>
      <div className="shadow-lg border-slate-200 border-2 p-4 rounded-lg">
        <SkillCard item={"React"} />
      </div>
    </div>

    <div className="mt-8">
      <h1 className="font-bold text-2xl text-left mb-5">Education</h1>
      <div className="shadow-lg border-slate-200 border-2 p-4 rounded-lg">
        {user?.education?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 mb-2 border-b-2 border-slate-400 pb-2"
          >
            <h1 className="font-bold text-2xl">{item?.nameofDegree}</h1>
            <p>{item?.placeofEducation}</p>
            <div className="flex gap-2 items-center">
              <p>June, 2016</p>
              <p>June, 2021</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Single