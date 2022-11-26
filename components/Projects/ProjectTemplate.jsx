import React from "react";
import Image from "next/image";

const ProjectTemplate = ({ image, title, domain, desc }) => {
  return (
    <div className="relative flex items-center justify-center shadow-xl shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{domain}</p>
        <p className="text-justify py-3 text-white text-md">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectTemplate;
