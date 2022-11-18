/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import agroBuddy from "../../public/Assets/Project1.png";
import netflixClone from "../../public/Assets/Project2.png";
import shoppingApp from "../../public/Assets/Project3.png";
import eVote from "../../public/Assets/Project4.png";
import Project from "../../Constants/info.json";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ecf0f3]">
          //Projects
        </p>
        <h1 className="py-4">What all have i built ?</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center shadow-xl shadow-purple-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={agroBuddy}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                {Project.Project1.title}
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                {Project.Project1.domain}
              </p>
              <p className="text-justify py-3 text-white text-md">
                {Project.Project1.desc}
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center shadow-xl shadow-purple-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={netflixClone}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                {Project.Project2.title}
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                {Project.Project2.domain}
              </p>
              <p className="text-justify py-3 text-white text-md">
                {Project.Project2.desc}
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center shadow-xl shadow-purple-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={shoppingApp}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                {Project.Project3.title}
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                {Project.Project3.domain}
              </p>
              <p className="text-justify py-3 text-white text-md">
                {Project.Project3.desc}
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center shadow-xl shadow-purple-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={eVote}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                {Project.Project4.title}
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                {Project.Project4.domain}
              </p>
              <p className="text-justify py-3 text-white text-md">
                {Project.Project4.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
