import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-100 shadow-xl z-10">
      <div className="flex justify-between flex-row items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/Assets/Logo.png"
          alt="/"
          width="125"
          height="70"
          className="cursor-pointer py-2"
        />
        <div>
          <ul className="hidden md:flex px-5">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects & Accomplishments
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <RiMenu3Line size={25} />
            {/* <AiOutlineClose/> */}
          </div>
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Image
                src="/../public/Assets/Logo.png"
                alt="/"
                width="105"
                height="65"
                className="cursor-pointer py-2"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={17} />
              </div>
            </div>
            <p className="border-b border-gray-300 my-4 w-[85%] md:w-[90%]">
              A Coder, Musician and Epistemophile
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="">
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">
                  Projects & Accomplishments
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div className="pt-40 ">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Connect with me on
            </p>
            <div className="flex items-center justify-between my-2 sm:w-[80%]">
            <div className="rounded-full shadow-lg shadow-blue-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn size="20" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size="20" />
              </div>
              <div className="rounded-full shadow-lg shadow-rose-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaInstagram size="20" />
              </div>
              <div className="rounded-full shadow-lg shadow-red-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <SiGmail size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
