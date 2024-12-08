import React,{useState , useEffect }from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { getProfile } from "../services/talents";
import { Upload } from 'lucide-react'
import { talentProfile } from "../reducers/talentReducer";
import { useDispatch, useSelector } from "react-redux";
export default function Profile() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state)

  console.log(user)
  const { register, handleSubmit, control } = useForm();
  const [profile, setProfile]  = useState({})

  console.log(profile)
  const [value, setValue] = useState({})
  const [file,setFile] = useState({})
  const { fields: workHistoryFields, append: addWorkHistory } = useFieldArray({
    control,
    name: "workHistory",
  });
  const { fields: projectFields, append: addProject } = useFieldArray({
    control,
    name: "projects",
  });
  const { fields: educationFields, append: addEducation } = useFieldArray({
    control,
    name: "education",
  });

  // useEffect(() => {
    
  //   const fetchProfile = async () => {

      // const found = await getProfile(profile)
  //     console.log(found)
  //   };
  //   fetchProfile();
  // }, [profile]);


  const onSubmit = (data) => {
    console.log(data)
    setProfile(data)

  };

  const handleChange = (e) => {
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    setFile(e.target.files[0])
    console.log(file)
    setProfile((prev) => ({...prev, resume:formdata}))
  }

  console.log(profile)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg container">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Talent Profile</h2>

      <label className="block text-gray-700">Image URL</label>
      <input
        {...register("image", { required: true })}
        placeholder="Image URL"
        className="w-full mb-4 px-3 py-2 border rounded-md"
      />

      <label className="block text-gray-700">Resume URL</label>
      <input
        {...register("resume", { required: true })}
        placeholder="Resume URL"
        className="w-full mb-4 px-3 py-2 border rounded-md"
      />

      <div className="w-32 h-20 border-2 p-2 gap-2 border-slate-300 flex justify-between items-center rounded-md focus:bg-slate-300 cursor-pointer">
        <Upload />
        <input type="file" name="Resume"  onChange={(e) =>handleChange(e)} />
      </div>

      

      <label className="block text-gray-700">Name</label>
      <input
        {...register("name")}
        placeholder="Full Name"
        className="w-full mb-4 px-3 py-2 border rounded-md"
      />

      <label className="block text-gray-700">Position</label>
      <input
        {...register("position", { required: true })}
        placeholder="Position"
        className="w-full mb-4 px-3 py-2 border rounded-md"
      />

      <label className="block text-gray-700">Skills</label>
      <input
        {...register("skills")}
        placeholder="Skills (comma-separated)"
        className="w-full mb-6 px-3 py-2 border rounded-md"
      />

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Work History</h3>
      {workHistoryFields.map((item, index) => (
        <div key={item.id} className="mb-4 p-4 border rounded-md bg-gray-50">
          <label className="block text-gray-600">Position</label>
          <input
            {...register(`workHistory.${index}.position`, { required: true })}
            placeholder="Position"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Years</label>
          <input
            type="number"
            {...register(`workHistory.${index}.years`, { required: true })}
            placeholder="Years"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Place of Work</label>
          <input
            {...register(`workHistory.${index}.placeofWork`)}
            placeholder="Place of Work"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Date From</label>
          <input
            type="date"
            {...register(`workHistory.${index}.dateFrom`, { required: true })}
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Date To</label>
          <input
            type="date"
            {...register(`workHistory.${index}.dateTo`)}
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Summary</label>
          <textarea
            {...register(`workHistory.${index}.summary`, { required: true })}
            placeholder="Work Summary"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Technologies</label>
          <input
            {...register(`workHistory.${index}.technologies`)}
            placeholder="Technologies (comma-separated)"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addWorkHistory({})}
        className="w-full mb-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Add Work History
      </button>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Projects</h3>
      {projectFields.map((item, index) => (
        <div key={item.id} className="mb-4 p-4 border rounded-md bg-gray-50">
          <label className="block text-gray-600">Name of Project</label>
          <input
            {...register(`projects.${index}.nameofProject`)}
            placeholder="Project Name"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Duration (months)</label>
          <input
            type="number"
            {...register(`projects.${index}.durationofProject`)}
            placeholder="Duration"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Date From</label>
          <input
            type="date"
            {...register(`projects.${index}.dateFrom`)}
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Date To</label>
          <input
            type="date"
            {...register(`projects.${index}.dateTo`)}
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Summary</label>
          <textarea
            {...register(`projects.${index}.summary`)}
            placeholder="Project Summary"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Technologies</label>
          <input
            {...register(`projects.${index}.technologies`)}
            placeholder="Technologies (comma-separated)"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addProject({})}
        className="w-full mb-6 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-blue-600"
      >
        Add Project
      </button>

      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Education</h3>
      {educationFields.map((item, index) => (
        <div key={item.id} className="mb-4 p-4 border rounded-md bg-gray-50">
          <label className="block text-gray-600">Name of Degree</label>
          <input
            {...register(`education.${index}.nameofDegree`)}
            placeholder="Degree Name"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Place of Education</label>
          <input
            {...register(`education.${index}.placeofEducation`)}
            placeholder="School or University"
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Date From</label>
          <input
            type="date"
            {...register(`education.${index}.dateFrom`)}
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />

          <label className="block text-gray-600">Date To</label>
          <input
            type="date"
            {...register(`education.${index}.dateTo`)}
            className="w-full mb-2 px-3 py-2 border rounded-md"
          />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <button
          type="button"
          onClick={() => addEducation({})}
          className="w-full mb-6 px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-blue-600"
        >
          Add Education
        </button>

        <button
          type="submit"
          className="w-40 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </div>  
    </form>
  );
}
