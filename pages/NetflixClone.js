import React from 'react'
import Head from 'next/head';
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate'
import netflixClone from "../public/Assets/Project2.png";
import Project from '../Constants/info.json'

const NetflixClone = () => {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <ProjectPage
      imgsrc={netflixClone}
      title = {Project.Project2.title}
      domain = {Project.Project2.domain}
      desc = {Project.Project2.desc}
    />

    </div>
    
  )
}

export default NetflixClone