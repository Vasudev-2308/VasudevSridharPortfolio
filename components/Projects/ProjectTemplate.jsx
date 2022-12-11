import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectTemplate = ({ image, title, domain, link }) => {
  return (
    <div className="relative flex items-center justify-center shadow-xl shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:group-hover:block ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{domain}</p>
          <Link href={link} className="flex justify-center items-center m-auto align-center text-center   py-4 border-4 h-full w-fit px-4 hover:bg-indigo-600 hover:scale-105 ease-in duration-300 rounded-full">
              Know More
          </Link>
        {/* <p className="text-justify py-3 text-white text-sm">{desc}</p> */}
      </div>
    </div>
  );
};

export default ProjectTemplate;
