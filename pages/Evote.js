import React from 'react'
import Project from "../Constants/info.json";
import evote from "../public/Assets/Project4.png";
import Head from 'next/head';
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate';
import e from 'cors';

const Evote = () => {
  return (
    <div>
      <Head>
        <title>E-Vote</title>
      </Head>
      <ProjectPage
      imgsrc={evote}
      title = {Project.Project4.title}
      domain = {Project.Project4.domain}
      desc = {Project.Project4.desc}
    />

    </div>
    
  )
}

export default Evote