/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {

  /* . const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3'); */

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg]  = useState("#292C2F");  // 

  const handleNav = () => {
    setNav(!nav);
  };

  

  useEffect(() => { 
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        } 
        else {
        setShadow(false);
      }
    };
    
    window.addEventListener("scroll", handleShadow ),  []
  });


  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-gray-700 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between flex-row items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home" scroll={false}>
          <p className="m-2 text-[30px] md:text-[40px] lg:text-[50px] font-bold">.VDX()</p>
        </Link>

        <div>
          <ul className="hidden md:flex px-5">
            <Link href="/#home" scroll={false}>
              <li className="ml-10 text-lg uppercase hover:border-b">
                .Home()
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-lg uppercase hover:border-b">
                .About_Me()
              </li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-lg uppercase hover:border-b">
                .Skills()
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-lg uppercase hover:border-b">
                .Projects()
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-lg uppercase hover:border-b">
                .Contact()
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
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#1F1F24]" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1F1F24] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1F1F24] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center">
            <p className="text-[30px] font-bold">.VDX()</p>
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
              <Link href="/#home">
                <li className="py-4 text-sm uppercase hover:border-b">
                  .Home()
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm uppercase hover:border-b">
                  .About_Me()
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm uppercase hover:border-b">
                  .Skills()
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm uppercase hover:border-b">
                  .Projects()
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm uppercase hover:border-b">
                  .Contact()
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
