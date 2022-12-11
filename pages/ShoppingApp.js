import React from 'react'
import ProjectPage from '../components/ProjectPage/ProjectPageTemplate'
import shoppingApp from "../public/Assets/Project3.png";
import Project from '../Constants/info.json'

const ShoppingApp = () => {
  return (
    <ProjectPage
      imgsrc={shoppingApp}
      title = {Project.Project3.title}
      domain = {Project.Project3.domain}
      desc = {Project.Project3.desc}
    />
  )
}

export default ShoppingApp