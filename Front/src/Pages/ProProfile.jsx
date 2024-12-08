import React, { useState } from "react";
import ProfileEducation from "../components/UserProfile/ProfileEducation.jsx";
import ProfileHeader from "../components/UserProfile/ProfileHeader.jsx";
import ProfileSummary from "../components/UserProfile/ProfileSummary.jsx";
import ProfileSkills from "../components/UserProfile/ProfileSkills.jsx";
import ProfileWorkHistory from "../components/UserProfile/ProfileWorkHistory.jsx";
import ProfileProjects from "../components/UserProfile/ProfileProjects.jsx";
import { Save } from "lucide-react";
import ProfileResume from "../components/UserProfile/ProfileResume.jsx";
const ProProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    image:"",
    resume:"",
    position: "Software Engineer",
    location: "Ethiopia",
    summary: "Passionate developer specializing in full-stack applications.",
    skills: ["React", "Node.js", "MongoDB"],
    workHistory: [
      {
        position: "Frontend Developer",
        placeofWork: "Tech Corp",
        duration: "2022-2023",
        summary: "Developed dynamic UI components.",
        technologies: ["React", "CSS"],
      },
    ],
    projects: [
      {
        id: 1,
        nameofProject: "Weather App",
        durationofProject: "3 months",
        summary: "Built a weather app using OpenWeather API.",
        technologies: ["React", "API Integration"],
      },
    ],
    education: [
      {
        nameofDegree: "BSc in Electrical and Computer Engineering",
        placeofEducation: "XYZ University",
        duration: "2016-2021",
      },
    ],
  });
  const handleClick = () =>{
    console.log(user)
  }

  console.log(user)
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
