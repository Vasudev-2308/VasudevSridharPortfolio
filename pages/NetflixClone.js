import React from 'react'
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate'
import netflixClone from "../public/Assets/Project2.png";
import Project from '../Constants/info.json'

const NetflixClone = () => {
  return (
    <ProjectPage
      imgsrc={netflixClone}
      title = {Project.Project2.title}
      domain = {Project.Project2.domain}
      desc = {Project.Project2.desc}
    />
  )
}

export default NetflixClone