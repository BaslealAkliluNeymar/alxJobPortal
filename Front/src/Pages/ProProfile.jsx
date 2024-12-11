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
        name: "",
        image:"",
        resume:"",
        position: "",
        location: "",
        summary: "",
        skills: [],
        workHistory: [],
        projects: [],
        education: [],
    });

    useEffect(() => {
      if (!found) {
        dispatch(talentThunk());
      } else {
        setUser(found);
      }
    }, [found, dispatch]);

    console.log(user)
    
    // console.log(found)
    // // if(found){
    // //     setUser(found)
    // // }
   
    
    useEffect(() =>{
        dispatch(talentThunk())
    },[])

  const handleClick = () =>{
    console.log(user)
    dispatch(talentProfile(user))
    console.log('in proprofile')
  }

  return (
    <section className="container mx-auto py-8">
      <ProfileHeader user={user} setUser={setUser} />
      <ProfileResume user={user} setUser={setUser} />
      <ProfileSummary summary={user.summary} setUser={setUser} />
      <ProfileSkills skills={user.skills} setUser={setUser} />
      <ProfileWorkHistory workHistory={user.workHistory} setUser={setUser} />
      <ProfileProjects projects={user.projects} setUser={setUser} />
      <ProfileEducation education={user.education} setUser={setUser} />

      <button
            onClick={() => handleClick()}
            className={`flex mt-2 items-center rounded-lg w-44 h-12 justify-center font-extrabold  gap-2 text-slate-50 bg-green-500 cursor-pointer`}
            aria-label="Edit"
            >
            <Save size={16}/>
            <span>Save</span>
    </button>
    </section>
  );
};

export default ProProfile;
