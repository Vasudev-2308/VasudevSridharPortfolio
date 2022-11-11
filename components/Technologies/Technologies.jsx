/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

const Technologies = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className=" mx-auto flex flex-col justify-center h-full ">
        <p className=" py-4 uppercase text-purple-900 text-xl tracking-widest ">
          //Skill Showcase
        </p>
        <h1>What all can i do ?</h1>
      </div>
      <p className="py-4 uppercase text-purple-900 text-xl tracking-widest mx-4">
        Languages
      </p>
      <div className="m-4 grid md:grid-cols-3 lg:grid-cols-4 gap-16 flex items-center">
        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex  ">
            <div className="m-auto" >
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="Python"
              />
            </div>
            <p className="uppercase text-sm px-4">Python</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java"
              />
            </div>
            <p className="uppercase text-sm px-4">Java</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="C"
              />
            </div>
            <p className="uppercase text-sm px-4">C</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
              />
            </div>
            <p className="uppercase text-sm px-4">C++</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                alt="Dart"
              />
            </div>
            <p className="uppercase text-sm px-4">Dart</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JS"
              />
            </div>
            <p className="uppercase text-sm px-4">Javascript</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="MySQL"
              />
            </div>
            <p className="uppercase text-sm px-4">MySQL</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="MySQL"
              />
            </div>
            <p className="uppercase text-sm px-4">MySQL</p>
          </div>
        </div>
      </div>

      <p className="py-4 uppercase text-purple-900 text-xl tracking-widest mx-4">
        Frameworks & Tools
      </p>
      <div className=" m-4 grid md:grid-cols-3 lg:grid-cols-4 gap-16 flex items-center">
        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                alt="Android"
              />
            </div>
            <p className="uppercase text-sm px-4">Android</p>
          </div>
        </div>
        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                alt="Flutter"
              />
            </div>
            <p className="uppercase text-sm px-4">Flutter</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="MongoDB"
              />
            </div>
            <p className="uppercase text-sm px-4">mongodb</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="NodeJS"
              />
            </div>
            <p className="uppercase text-sm px-4">NODEJS</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="Reactjs"
              />
            </div>
            <p className="uppercase text-sm px-4">reactjs</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
                alt="Flask"
              />
            </div>
            <p className="uppercase text-sm px-4">Flask</p>
          </div>
        </div>

        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
              />
            </div>
            <p className="uppercase text-sm px-4">Git</p>
          </div>
        </div>
        <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <img
                className="w-[100px]"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
              />
            </div>
            <p className="uppercase text-sm px-4">bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
