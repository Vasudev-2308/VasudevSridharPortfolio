/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {

  const text = ["Code", "Collab", "Bond"]
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-green-600">Vasudeva.</span>
          </h1>

          <h1 className="py-4 px-2 text-gray-700">
            A <span className="text-[#5651ae]">Software Engineer</span> & <span className="text-rose-600">Musician.</span>
          </h1>
              <p className="pt-4 uppercase my-2 text-md tracking-widest text-gray-700 ">
                A Coder, <span className="italic">Musician</span> and Epistemophile. 
              </p>
              <p className="uppercase my-2 text-md tracking-widest text-gray-700 ">
              Software Engineer @<span className="text-rose-600">Unisys</span> India.
              </p>

              <div className="flex justify-between sm:justify-around items-center max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-blue-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn size="25" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-800 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size="25" />
              </div>
              <div className="rounded-full shadow-lg shadow-rose-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaInstagram size="25" />
              </div>
              <div className="rounded-full shadow-lg shadow-red-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <SiGmail size="25" />
              </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Hero