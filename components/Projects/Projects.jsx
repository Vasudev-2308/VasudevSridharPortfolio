/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import agroBuddy from "../../public/Assets/Project1.png";
import netflixClone from "../../public/Assets/Project2.png";
import shoppingApp from "../../public/Assets/Project3.png";
import eVote from "../../public/Assets/Project4.png";
import Project from "../../Constants/info.json";
import ProjectTemplate from "./ProjectTemplate";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ecf0f3]">
          //Projects
        </p>
        <h1 className="py-4">What all have i built ?</h1>
        <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectTemplate
          image={agroBuddy}
          domain={Project.Project1.domain}
          title={Project.Project1.title}
          desc={Project.Project1.desc}
          />
          <ProjectTemplate
          image={netflixClone}
          domain={Project.Project2.domain}
          title={Project.Project2.title}
          desc={Project.Project2.desc}
          />
          <ProjectTemplate
          image={eVote}
          domain={Project.Project3.domain}
          title={Project.Project3.title}
          desc={Project.Project3.desc}
          />
          <ProjectTemplate
          image={shoppingApp}
          domain={Project.Project4.domain}
          title={Project.Project4.title}
          desc={Project.Project4.desc}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
