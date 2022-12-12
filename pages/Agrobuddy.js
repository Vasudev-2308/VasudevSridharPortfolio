import React from 'react'
import Head from 'next/head';
import Project from "../Constants/info.json";
import agroBuddy from "../public/Assets/Project1.png";
import Link from 'next/link';
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate';
const Agrobuddy = () => {
  return (
    <div>
      <Head>
        <title>Agrobuddy</title>
      </Head>
      <ProjectPage
      imgsrc={agroBuddy}
      title = {Project.Project1.title}
      domain = {Project.Project1.domain}
      desc = {Project.Project1.desc}
    />

    </div>
      
  )
}

export default Agrobuddy
