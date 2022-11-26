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
                <Image className="rounded-xl" src={workImg} alt="img" />
              </div>

              <div>
                <h2 className="py-2 text-[#250940] text-center">Vasudeva. S</h2>
                <p className="uppercase text-[#250940] text-center">
                  Software Engineer
                </p>
                <p className="text-[#250940] text-center ">
                  Message me to connect and collab
                </p>
                <p className="text-[#250940] text-center ">
                  Ph: +91 7090602915
                </p>
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
              <a href="https://www.google.com/maps/place/Vidyaranyapura,+Bengaluru,+Karnataka/@13.0812416,77.5378909,14z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2sBengaluru,+Karnataka!3b1!8m2!3d12.9715987!4d77.5945627!3m4!1s0x3bae229f7a8debe1:0x4d80f1d259c7e7ac!8m2!3d13.0810667!4d77.556181">
                <div className="flex flex-row items-center justify-center  my-16">
                  <div className="flex flex-row  rounded-full  bg-green-900 shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FiMapPin size="20" />
                    <address className="px-5 text-blue-300 uppercase">
                      Bangalore, India.
                    </address>
                  </div>
                </div>
              </a>
              <div>
                <p className="text-justify px-5 text-[#250940]">
                  Magna velit in ullamco dolor. Ad est officia id nulla culpa
                  cupidatat enim qui magna Lorem dolor occaecat cupidatat
                  pariatur. Quis ullamco nostrud consectetur elit ut qui laboris
                  ad. Enim irure culpa in dolore labore velit quis. Ipsum
                  reprehenderit quis dolor dolor elit non esse.
                </p>
              </div>

              <div className="p-6 text-[#250940]">
                <p>How active am I on Github : </p>
                <img
                  className=" py-6 m-auto flex justify-center"
                  src="https://camo.githubusercontent.com/dd553e07747bdef4c664b4ac8e2642a63b4bbfab4a17b58211f5d2b28da8f456/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d766173756465762d32333038"
                  alt=""
                />
              </div>

              <div className="my-4 flex flex-row justify-center items-center rounded-full shadow-lg shadow-gray-600 bg-gradient-to-r from-[#5651e5] to-[#5651e5] p-5 cursor-pointer hover:scale-105 ease-in duration-300 w-full">
                <a href="" className="px-4">
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
