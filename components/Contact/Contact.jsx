/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";
import Contacts from "../../Constants/links.json";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBookDownload } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import workImg from "../../public/Assets/work.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#ecf0f3]">
          //Contact
        </p>
        <h1 className="py-4">Get in touch with me..</h1>

        <div className="lg:w-[60%] lg:mx-auto md:wd-[25%] md:mx-auto sm:px-auto flex items-center justify-center ">
          <div className="col-span-3 lg:col-span-2 w-full h-full bg-[#afb5f9] shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image className="rounded-xl shadow-lg shadow-gray-500" src={workImg} alt="img" />
              </div>

              <div>
                <h2 className="py-2 mt-4 text-[#250940] text-center">Vasudeva. S</h2>
                <p className="uppercase text-[#250940] text-center underline">
                  Software Engineer
                </p>
                <p className="text-[#250940] text-center ">
                  Message me to connect and collab
                </p>
                <p className="text-[#250940] text-center ">
                  Ph: +91 7090602915
                </p>

                <div className="flex flex-row mb-4 mt-2 justify-center cursor:pointer">
                    <FiMapPin size="20" className="text-[#250940]" />
                    <address className="px-5 text-[#250940] not-italic uppercase">
                      Bangalore
                    </address>
                  </div>
              </div>
              <div className="flex items-center  justify-around py-4 m-auto max-w-[530px]  ">
                <a href={Contacts.linkedin} target="_blank" rel="noreferrer">
                  <div className="rounded-full bg-blue-600 shadow-lg shadow-blue-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300 sm:mx-2">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href={Contacts.github} target="_blank" rel="noreferrer">
                  <div className="rounded-full bg-gray-800 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href={Contacts.instagram} target="_blank" rel="noreferrer">
                  <div className="rounded-full bg-rose-600 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a>
                <a href={Contacts.mail} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg bg-red-600 p-5 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300">
                    <SiGmail />
                  </div>
                </a>
              </div>


              <div>
                <p className="text-justify px-5 text-[#250940]">
                I presently work for Unisys as a software engineer who also dabbles in design and music. I'm very interested in learning new things and dissecting difficult ideas into simpler ones so that I can comprehend them better. I enjoy creating websites and apps. Enjoy creating exciting type-level experiments and programming code in Dart, C++, Java, and Python.
                </p>
              </div>

              <div className="p-6 text-[#250940]">
                <p className="underline">How active am I on Github : </p>
                <img
                  className=" py-6 m-auto flex justify-center"
                  src="https://camo.githubusercontent.com/dd553e07747bdef4c664b4ac8e2642a63b4bbfab4a17b58211f5d2b28da8f456/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d766173756465762d32333038"
                  alt=""
                />
              </div>

              <div className="my-4 flex flex-row justify-center items-center rounded-full shadow-lg shadow-gray-600 bg-gradient-to-r from-[#5651e5] to-[#5651e5] p-5 cursor-pointer hover:scale-105 ease-in duration-300 w-full">
                <a download href="/files/Vasudev_Resume.pdf" className="px-4">
                  Download Resume
                </a>
                <TbBookDownload />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12  ">
          <Link href="/">
            <div className="flex flex:row justify-between items-center rounded-full bg-[#afb5f9] shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsChevronDoubleUp className="text-[#250940]" size={25} />
              <p className="px-2 text-[#250940]">Scroll to top</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="bottom-0 w-full items-center text-white py-6 flex justify-center">
        <p className="uppercase text-white text-xl">MADE with ❤️ by VDX...</p>
      </div>
    </div>
  );
};

export default Contact;
