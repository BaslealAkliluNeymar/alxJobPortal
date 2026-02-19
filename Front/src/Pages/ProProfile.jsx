import React, { useState, useEffect } from "react";
import ProfileEducation from "../components/UserProfile/ProfileEducation.jsx";
import ProfileHeader from "../components/UserProfile/ProfileHeader.jsx";
import ProfileSummary from "../components/UserProfile/ProfileSummary.jsx";
import ProfileSkills from "../components/UserProfile/ProfileSkills.jsx";
import ProfileWorkHistory from "../components/UserProfile/ProfileWorkHistory.jsx";
import ProfileProjects from "../components/UserProfile/ProfileProjects.jsx";
import { Save, ArrowLeft } from "lucide-react";
import ProfileResume from "../components/UserProfile/ProfileResume.jsx";
import { talentThunk, talentProfile } from "../reducers/talentReducer.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const ProProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const okay = useSelector((state) => (state.talent.talent))
  const found = okay.find(item => item._id === id)
  const [user, setUser] = useState({
    education: "",
    github: "",
    id: "",
    jobseekerlocation: "",
    languages: "",
    linkedin: "",
    name: "",
    porfoliolink: "",
    professionalsummary: "",
    skills: "",
    telegram: ""
  });

  console.log(user)

  useEffect(() => {
    if (!found) {
      dispatch(talentThunk());
    } else {
      setUser(found);
    }
  }, [found, dispatch]);

  useEffect(() => {
    dispatch(talentThunk())
  }, [])

  const handleClick = () => {
    const config = {
      headers: {
        'Content-Type': 'application/formdata',
      }
    }
    const data = new FormData()

    for (const key in user) {
      if (user[key] && key !== 'image') {
        data.append(key, user[key]);
      }
    }
    for (const [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

  }

  return (
    <section className="w-full sm:w-4/6 sm:container md:container lg:container mx-auto py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-slate-500 hover:text-green-600 transition-all font-medium"
      >
        <ArrowLeft size={18} />
        <span>Back to Dashboard</span>
      </button>
      <ProfileHeader user={user} setUser={setUser} />
      <div className="flex gap-2">
        <ProfileResume className="flex-1" />
        <ProfileResume className="flex-1" />
      </div>




    </section>
  );
};

export default ProProfile;
