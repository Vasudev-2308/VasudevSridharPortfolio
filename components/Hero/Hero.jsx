/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Contacts from "../../Constants/links.json";

const Hero = () => {
  const text = ["Code", "Collab", "Bond"];
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#ecf0f3]">
            Hi, I'm <span className="text-green-600">Vasudeva.</span>
          </h1>

          <h1 className="py-4 px-2 text-[#ecf0f3]">
            A <span className="text-yellow-300">Software Engineer</span> &{" "}
            <span className="text-rose-600">Musician.</span>
          </h1>
          <p className="pt-4 uppercase my-2 text-md tracking-widest text-[#ecf0f3] ">
            A Coder, <span className="italic">Musician</span> and Epistemophile.
          </p>
          <p className="uppercase my-2 text-md tracking-widest text-[#ecf0f3] ">
            Software Engineer @<span className="text-rose-600">Unisys</span>.
          </p>
          <div className="flex flex-row items-center justify-center ">
            <div className="rounded-full  bg-green-900 shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <FiMapPin size="20" />
            </div>
            <p className="py-12 px-5 my-4 text-blue-300">Bangalore, India.</p>
          </div>

          <div className="flex justify-between sm:justify-around items-center max-w-[330px] m-auto py-4">
            <div className="rounded-full bg-blue-600 shadow-lg shadow-blue-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.linkedin}>
                <FaLinkedinIn size="25" />
              </a>
            </div>
            <div className="rounded-full bg-gray-800 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.github}>
                <FaGithub size="25" />
              </a>
            </div>
            <div className="rounded-full bg-rose-600 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.instagram}>
                <FaInstagram size="25" />
              </a>
            </div>
            <div className="rounded-full shadow-lg bg-red-600 p-5 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.mail}>
                <SiGmail size="25" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
