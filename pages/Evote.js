import React from 'react'
import Project from "../Constants/info.json";
import evote from "../public/Assets/Project4.png";
import Link from 'next/link';
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate';
import e from 'cors';

const Evote = () => {
  return (
    <ProjectPage
      imgsrc={evote}
      title = {Project.Project4.title}
      domain = {Project.Project4.domain}
      desc = {Project.Project4.desc}
    />
  )
}

export default Evote