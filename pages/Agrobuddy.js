import React from 'react'
import Image from 'next/image'
import Project from "../Constants/info.json";
import agroBuddy from "../public/Assets/Project1.png";
import Link from 'next/link';
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate';
const Agrobuddy = () => {
  return (
    <div>
      <ProjectPage
      imgsrc={agroBuddy}
      title = {Project.Project1.title}
      domain = {Project.Project1.domain}
      desc = {Project.Project1.desc}
    />
    <p>
      
    </p>

    </div>
    
    
  )
}

export default Agrobuddy
