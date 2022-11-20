/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {animations, motion} from 'framer-motion';
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Contacts from "../../Constants/links.json";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale:0.8,
                opacity:0
              }, 
              visible:{
                scale:1.12,
                opacity:1,
                transition: {
                  delay:0.7,
                  scale:1
                }
              }

            }}
          >
          <div>
          <h1 className="py-4 text-[#ecf0f3]">
            Hi, I'm <span className="text-green-600">Vasudeva.</span>
          </h1>

          <h1 className="py-4 px-2 text-[#ecf0f3]">
            A{" "}
            <span className="text-yellow-300 underline">Software Engineer</span>{" "}
            & <span className="text-rose-600 underline">Musician.</span>
          </h1>
          </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale:0.8,
                opacity:0
              }, 
              visible:{
                scale:1.1,
                opacity:1,
                transition: {
                  delay:1.5,
                  scale:1
                }
              }
            }}
          >
          <p className="pt-4 uppercase my-2 text-xl tracking-widest text-[#ecf0f3] ">
            A Coder, Musician and Epistemophile.
          </p>
          <p className="uppercase my-2 text-xl tracking-widest text-[#ecf0f3] ">
            Software Engineer @
            <span className="text-rose-600 underline">Unisys</span>.
          </p>
          </motion.div>

          <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale:0.8,
              opacity:0
            }, 
            visible:{
              scale:1.1,
              opacity:1,
              transition: {
                delay:2.5,
                ease: [0.17, 0.67, 0.83, 0.67],
                scale:1
              }
            }
          }}
          
         >

          {/*  */}
 
          <div className="flex flex-row items-center justify-center ">
            <a href="https://www.google.com/maps/place/Vidyaranyapura,+Bengaluru,+Karnataka/@13.0812416,77.5378909,14z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2sBengaluru,+Karnataka!3b1!8m2!3d12.9715987!4d77.5945627!3m4!1s0x3bae229f7a8debe1:0x4d80f1d259c7e7ac!8m2!3d13.0810667!4d77.556181">
              
              <div className="rounded-full  bg-green-900 shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FiMapPin size="20" />
              </div>
            </a>
            <address className="py-12 px-5 my-4 text-blue-300 uppercase">
              Bangalore, India.
            </address>
          </div>
          </motion.div>
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale:0.8,
              opacity:0
            }, 
            visible:{
              scale:1.1,
              opacity:1,
              transition: {
                delay:3.5,
                ease: [0.17, 0.67, 0.83, 0.67],
                scale:1,
                type: "tween"
              }
            }
          }}
         >
          <motion.div whileHover={{
              position:'relative', 
              zIndex:1, 
              scale:1.05,
              transition:{
                duration:.2
              }
            }}> 
          <div className="flex justify-around sm:justify-around items-center max-w-[530px] m-auto py-4">

          <motion.div whileHover={{
              position:'relative', 
              zIndex:1, 
              scale:1.2,
              transition:{
                duration:.2
              }
            }}>
            <div className="rounded-full bg-blue-600 shadow-lg shadow-blue-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.linkedin}>
                <FaLinkedinIn size="25" />
              </a>
            </div>
            </motion.div>
           
            <motion.div whileHover={{
              position:'relative', 
              zIndex:1, 
              scale:1.2,
              transition:{
                duration:.2
              }
            }}>
            <div className="rounded-full bg-gray-800 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.github}>
                <FaGithub size="25" />
              </a>
            </div>
            </motion.div>
            <motion.div whileHover={{
              position:'relative', 
              zIndex:1, 
              scale:1.2,
              transition:{
                duration:.2
              }
            }}>
            <div className="rounded-full bg-rose-600 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.instagram}>
                <FaInstagram size="25" />
              </a>
            </div>
            </motion.div>
            <motion.div whileHover={{
              position:'relative', 
              zIndex:1, 
              scale:1.2,
              transition:{
                duration:.2
              }
            }}>
            <div className="rounded-full shadow-lg bg-red-600 p-5 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href={Contacts.mail}>
                <SiGmail size="25" />
              </a>
            </div>
            </motion.div>
          </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
