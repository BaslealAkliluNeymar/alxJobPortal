import { Building2, MapPin, Briefcase, GraduationCap, Code2, ExternalLink, Mail, ArrowLeft } from 'lucide-react'
import React, { useEffect } from 'react'
import SkillCard from '../components/SkillCard'
import { useParams, useNavigate } from 'react-router-dom'
import { talentSingle } from '../reducers/talentReducer'
import { useDispatch, useSelector } from 'react-redux'

const Single = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.talent.talent[0])
  const { id } = useParams()

  useEffect(() => {
    dispatch(talentSingle(id))
    window.scrollTo(0, 0)
  }, [id, dispatch]);

  if (!user) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  )

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header / Hero Section */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div className="flex gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              <Mail size={18} />
              Contact Talent
            </button>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 mt-8 max-w-5xl">
        {/* Profile Info Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={user?.avatar || "https://github.com/shadcn.png"}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
              alt={user?.name}
            />
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left flex-1">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl text-slate-900">{user?.name}</h1>
              <p className="text-xl font-medium text-green-600 mt-1">{user?.position}</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-green-500" />
                <span className="font-medium">{user?.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-green-500" />
                <span className="font-medium text-slate-700">{user?.experience || 0} Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-green-500" />
                <span className="font-medium truncate">{user?.email || "n/a"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
                Professional Summary
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg italic">
                  "{user?.description || user?.bio}"
                </p>
              </div>
            </div>

            {/* Work History */}
            <div className="space-y-6">
              <h2 className="font-bold text-2xl text-slate-900 flex items-center gap-3 ml-2">
                <Briefcase className="text-green-600" />
                Experience
              </h2>

              {user?.workHistory?.length > 0 ? (
                user.workHistory.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div className="flex gap-4">
                        <div className="p-3 bg-slate-50 rounded-xl">
                          <Building2 size={24} className="text-slate-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-slate-900">{item.position}</h3>
                          <p className="text-green-600 font-medium text-lg">{item.placeofWork}</p>
                        </div>
                      </div>
                      <div className="bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
                        {item.years} Years
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.summary}
                    </p>

                    {item?.technologies && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="text-xs font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-slate-100/50 border-2 border-dashed border-slate-200 p-8 rounded-2xl text-center text-slate-400">
                  No professional experience listed.
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="space-y-6">
              <h2 className="font-bold text-2xl text-slate-900 flex items-center gap-3 ml-2">
                <Code2 className="text-green-600" />
                Key Projects
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {user?.projects?.length > 0 ? (
                  user.projects.map((item, index) => (
                    <div key={item.id} className={`${index !== 0 ? 'mt-8 pt-8 border-t border-slate-100' : ''}`}>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2">
                          {item?.nameofProject}
                          <ExternalLink size={16} className="text-slate-300 hover:text-green-500 cursor-pointer" />
                        </h3>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {item?.durationofProject}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-4">{item?.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {item?.technologies?.map((tech, i) => (
                          <SkillCard item={tech} key={i} />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-slate-400">No project samples available.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-8">
            {/* Skills Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                <Code2 className="text-green-600" size={20} />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {user?.skills?.map((item, index) => (
                  <SkillCard item={item} key={index} />
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                <GraduationCap className="text-green-600" size={20} />
                Education
              </h3>
              <div className="space-y-6">
                {user?.education?.length > 0 ? (
                  user.education.map((item, index) => (
                    <div key={index} className="relative pl-4 border-l-2 border-green-100">
                      <h4 className="font-bold text-slate-900 leading-snug">{item?.nameofDegree}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item?.placeofEducation}</p>
                      <p className="text-xs font-bold text-slate-400 mt-2">{item?.years}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400 text-sm italic">Education info not specified.</p>
                )}
              </div>
            </div>

            {/* CV/Resume Download Card */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="font-bold text-xl mb-4">Wanna see the full CV?</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Download the complete professional resume for detailed background and technical qualifications.
              </p>
              <button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/20 active:scale-95">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Single