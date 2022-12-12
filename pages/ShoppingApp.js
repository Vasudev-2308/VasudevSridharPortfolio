import React from 'react'
import Head from 'next/head';
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate'
import shoppingApp from "../public/Assets/Project3.png";
import Project from '../Constants/info.json'

const ShoppingApp = () => {
  return (
    <div>
      <Head>
        <title>Shopping App</title>
      </Head>
      <ProjectPage
      imgsrc={shoppingApp}
      title = {Project.Project3.title}
      domain = {Project.Project3.domain}
      desc = {Project.Project3.desc}
    />

    </div>
    
  )
}

export default ShoppingApp