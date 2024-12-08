import React,{useState} from "react";
import EditButton from "../UI/EditButton.jsx";
import Modal from "../UI/Modal.jsx";
import { AlignLeft } from "lucide-react";
const ProfileEducation = ({ education }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [all, setAll]  = useState(education)
  const [single, setSingle] = useState({
    nameofDegree:'',
    placeofEducation:'',
    dateFrom:'',
    dateTo:''
  })

  const handleChange = (e) =>{
    setSingle((prev) =>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }

  const handleMore = (e) =>{
    setAll((prev) =>{
      return [
        ...prev,
        single
      ]
    })
  }


  console.log(all)
  console.log(single)
  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-2xl text-gray-800 mb-6">Education</h2>
      <button className="underline text-blue-300" onClick={() => setIsEditing(!isEditing)}>Edit</button>
      {
        isEditing && (
          <Modal onClose={() => setIsEditing(!isEditing)}>
            {
              all.map((_) =>{
                return (
                  <div className="flex flex-col">
                  <input
                  name="nameofDegree" value={single.nameofDegree}
                  type="text" onChange={handleChange} placeholder="Name of Degree" />
                  <input
                  name="placeofEducation" value={single.placeofEducation}
                  type="text" onChange={handleChange} placeholder="Place of Education" />
                  <input
                  name="dateFrom" value={single.dateFrom}
                  type="date" onChange={handleChange} placeholder="From" />
                  <input
                  name="dateTo" value={single.dateTo}
                  type="date" onChange={handleChange} placeholder="To" />
                  <button onClick={handleMore}>Add More</button>
                  <button>Save</button>
                </div>
                )
              })
            }
           
          </Modal>
        )
      }
      <div className="space-y-6">
        {education?.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-gray-700">{item.nameofDegree}</h3>
             
            </div>
            <p className="text-sm text-gray-600">{item.placeofEducation}</p>
            <div className="flex gap-2 items-center text-sm text-gray-500 mt-1">
              <p>{item.startDate}</p>
              <span>-</span>
              <p>{item.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileEducation;
