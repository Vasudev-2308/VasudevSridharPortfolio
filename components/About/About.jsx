/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";


const About = () => {
  
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 mt-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2 mx-3">
          <p className=" uppercase text-[#ecf0f3] text-xl tracking-widest">
            //About_Me
          </p>
          <h1>Who am I ?</h1>

          <div className="my-2 py-2 px-4 items-center">
            <ul className="list-disc">
              <li>
                
                <p className="my-2 py-2 px-12 text-justify  text-md text-[#ecf0f3]">
                  Software Engineer Currently Working @ Unisys
                </p>
              </li>

              <li>
                <p className="my-2 py-2  px-12 text-justify  text-md text-[#ecf0f3]">
                  {"<Code Enthusiast />"}
                </p>
              </li>

              <li>
                <p className="my-2 py-2  px-12 text-justify  text-md text-[#ecf0f3]">
                  Part Time Musician with the love for Composing & Creating new Music.
                </p>
              </li>

              <li>
                <p className="my-2 py-2 px-12 text-justify  text-md text-[#ecf0f3]">
                  Currently Exploring on Edge Computing, AI & Learning Something New
                  Almost Everyday!!
                </p>
              </li>

              <li>
                <p className="my-2 py-2 px-12 text-justify  text-md text-[#ecf0f3]">
                  I Love building apps, websites and many more.
                </p>
              </li>

              <li>
                <p className="my-2 py-2 px-12 text-justify  text-md text-[#ecf0f3]">
                  I don't say no to Collaboration, Hackathon, Flutter and Beer
                  🍺
                </p>
              </li>

              <li>
                <p className="my-2 py-2 px-12 text-justify  text-md text-[#ecf0f3]">
                Love writing Dart, C++, Java, Python and building fun experiments on type-level
                </p>
              </li>
            </ul>
          </div>

          <p className="py-4 text-justify  text-md text-[#ecf0f3] underline">
            {" "}
            <a href="https://github.com/Vasudev-2308?tab=repositories">
              Checkout some projects of mine
            </a>
          </p>
        </div>

        <div className="hover:animate-pulse skew-y-0">
          <img
            className=" m-auto shadow-xl bg-gray-100 shadow-white rounded-full flex justify center items-center p-4 hover:scale-105 ease-in duration-300"
            src="https://avatars.githubusercontent.com/u/56473514?v=4"
            alt="Vdx's Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
