/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Contacts from "../../Constants/links.json";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <div>
            <h1 className="py-4 text-[#ecf0f3]">
              Hello, I'm <span className="text-green-600">Vasudeva.</span>
            </h1>

            <h1 className="py-4 px-2 text-[#ecf0f3]">
              A{" "}
              <span className="text-yellow-300 underline">
                Software Engineer
              </span>{" "}
              & <span className="text-rose-600 underline">Musician.</span>
            </h1>
          </div>

          <p className="pt-4 uppercase my-2 text-xl tracking-widest text-[#ecf0f3] ">
            A Coder, Musician and Epistemophile.
          </p>
          <p className="uppercase my-2 text-xl tracking-widest text-[#ecf0f3] ">
            Software Engineer @
            <span className="text-rose-600 underline">Unisys</span>.
          </p>

          <div className="flex flex-row items-center justify-center m-16">
            <a href="https://www.google.com/maps/place/Vidyaranyapura,+Bengaluru,+Karnataka/@13.0812416,77.5378909,14z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2sBengaluru,+Karnataka!3b1!8m2!3d12.9715987!4d77.5945627!3m4!1s0x3bae229f7a8debe1:0x4d80f1d259c7e7ac!8m2!3d13.0810667!4d77.556181">
              <div className="flex flex-row  rounded-full  bg-green-900 shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FiMapPin size="20" />
                <address className="px-5 text-blue-300 uppercase">
                  Bangalore, India.
                </address>
              </div>
            </a>
          </div>

          <div className="flex justify-around sm:justify-around items-center max-w-[530px] m-auto py-4">
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
