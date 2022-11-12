/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si';
import workImg from '../../public/Assets/work.png'

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
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
                <h2 className='py-2'>Vasudeva. S</h2>
                <p className='uppercase text-gray-500'>Software Engineer</p>
                <p>Message me to connect and collab</p>
              </div>
              <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-blue-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-800 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-rose-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-red-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <SiGmail />
                    </div>
                  </a>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
