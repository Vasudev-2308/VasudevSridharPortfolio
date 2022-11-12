/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";
import Contacts from "../../Constants/links.json";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import workImg from "../../public/Assets/work.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-purple-900">
          //Contact
        </p>
        <h1 className="py-4">Get in touch with me..</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={workImg}
                  alt="img"
                />
              </div>

              <div>
                <h2 className="py-2">Vasudeva. S</h2>
                <p className="uppercase text-gray-500">Software Engineer</p>
                <p>Message me to connect and collab</p>
              </div>
              <div className="flex items-center justify-between py-4">
                <a href={Contacts.linkedin} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-blue-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href={Contacts.github} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-800 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href={Contacts.instagram} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-rose-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a>
                <a href={Contacts.mail} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-red-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <SiGmail />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-200"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Phone
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-200"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="name">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-200"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="name">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-200"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="name">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-200"
                    rows="7"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="flex flex:row justify-between items-center rounded-full shadow-lg shadow-purple-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsChevronDoubleUp size={25} />
              <p className="px-2">Scroll to top</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
