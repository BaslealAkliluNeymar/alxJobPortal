import React, { useState,useEffect } from "react";
import ProfileEducation from "../components/UserProfile/ProfileEducation.jsx";
import ProfileHeader from "../components/UserProfile/ProfileHeader.jsx";
import ProfileSummary from "../components/UserProfile/ProfileSummary.jsx";
import ProfileSkills from "../components/UserProfile/ProfileSkills.jsx";
import ProfileWorkHistory from "../components/UserProfile/ProfileWorkHistory.jsx";
import ProfileProjects from "../components/UserProfile/ProfileProjects.jsx";
import { Save } from "lucide-react";
import ProfileResume from "../components/UserProfile/ProfileResume.jsx";
import { talentThunk,talentProfile } from "../reducers/talentReducer.js";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProProfile = () => {
    const dispatch = useDispatch()
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

    useEffect(() =>{
        dispatch(talentThunk())
    },[])

  const handleClick =  () =>{
    const config = {
      headers:{
        'Content-Type': 'application/formdata',
      }
    }
    const data  = new FormData()

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
      <ProfileHeader user={user} setUser={setUser} />
      {/* <ProfileResume user={user} setUser={setUser} /> */}
      {/* <ProfileSummary summary={user.summary} setUser={setUser} />
      <ProfileSkills skills={user.skills} setUser={setUser} />
      <ProfileWorkHistory workHistory={user.workHistory} setUser={setUser} />
      <ProfileProjects projects={user.projects} setUser={setUser} />
      <ProfileEducation education={user.education} setUser={setUser} /> */}

     
    </section>
  );
};

export default ProProfile;
