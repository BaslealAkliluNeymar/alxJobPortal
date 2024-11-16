import React,{ useState }from 'react'

const Jobz = () => {
  const [modal, setModal] = useState(false)
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [experience, setExperience] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [qualifications, setQualifications] = useState('')

  const [data,setData] = useState({
    jobTitle,
    company,
    experience,
    type,
    location,
    description,
    responsibilities,
    qualifications
  })
  
  console.log(data)
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleclick = () =>{
    console.log('clicked')
    setModal(true)
  }

  const handleSave = () =>{
    console.log('saved')
    setModal(false)
  }

  return (
    <section className='flex flex-col gap-2'>
      <div className='flex justify-between p-2'>
        <h1 className='text-2xl font-bold'>Jobs</h1>
        <button onClick={handleclick} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg delay-75'>
          <p>Create Job</p>
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        

        {modal && 
        <div className="bg-transparent flex h-auto w-3/5 flex-col gap-6 items-center m-auto border border-gray-300 bg-white rounded-xl shadow-2xl p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  sm:w-1/2">
        <div className="border border-gray-200 bg-gray-50 rounded-lg p-6 w-full">
          <div className="flex flex-wrap gap-2 w-full">
            {/** Job Title */}
            <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
              <label htmlFor="jobTitle" className="text-gray-700 font-medium mb-1">Job Title</label>
              <input
                name="jobTitle"
                value={data.jobTitle}
                onChange={handleChange}
                type="text"
                placeholder="Enter job title"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {/** Company */}
            <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
              <label htmlFor="company" className="text-gray-700 font-medium mb-1">Company</label>
              <input
                name="company"
                value={data.company}
                onChange={handleChange}
                type="text"
                placeholder="Enter company name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {/** Experience */}
            <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
              <label htmlFor="experience" className="text-gray-700 font-medium mb-1">Experience</label>
              <input
                type="text"
                name='experience'
                value={data.experience}
                onChange={handleChange}
                placeholder="e.g., 2-4 years"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {/** Type */}
            <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
              <label htmlFor="type" className="text-gray-700 font-medium mb-1">Type</label>
              <input
                type="text"
                name='type'
                value={data.type}
                onChange={handleChange}
                placeholder="e.g., Full-time"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {/** Location */}
            <div className="flex flex-col w-full sm:w-[calc(50%-8px)]">
              <label htmlFor="location" className="text-gray-700 font-medium mb-1">Location</label>
              <input
                type="text"
                name='location'
                value={data.location}
                onChange={handleChange}
                placeholder="Enter location"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {/** Description */}
            <div className="flex flex-col w-full">
              <label htmlFor="description" className="text-gray-700 font-medium mb-1">Description</label>
              <textarea
                name='description'
                value={data.description}
                onChange={handleChange}
                placeholder="Write a job description..."
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            {/** Responsibilities */}
            <div className="flex flex-col w-full">
              <label htmlFor="responsibilities" className="text-gray-700 font-medium mb-1">Responsibilities</label>
              <textarea
                name='responsibilities'
                value={data.responsibilities}
                onChange={handleChange}
                placeholder="List responsibilities..."
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
          
            <div className="flex flex-col w-full">
              <label htmlFor="qualifications" className="text-gray-700 font-medium mb-1">Qualifications</label>
              <textarea
                name='qualifications'
                value={data.qualifications}
                onChange={handleChange}
                placeholder="List qualifications..."
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-150"
            onClick={handleSave}
          >
            Save Changes
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-150"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    }
    </div>
    </section>
  )
}

export default Jobz