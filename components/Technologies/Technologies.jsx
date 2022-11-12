/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from 'next/image';
import Constants from '../../Constants/ImageConstants.json'
import LanguageProp from './LanguageProp'

const Technologies = () => {
  
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" uppercase text-purple-900 text-xl tracking-widest ">
          //Skill Showcase
        </p>
        <h1 className="py-4">What all can i do ?</h1>
      <p className="py-4 uppercase text-purple-900 text-xl tracking-widest mx-4">
        Languages
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <LanguageProp
        image={Constants.python.image}
        title={Constants.python.title}
        alt={Constants.python.alt}
        />
        <LanguageProp
        image={Constants.java.image}
        title={Constants.java.title}
        alt={Constants.java.alt}
        />
        <LanguageProp
        image={Constants.C.image}
        title={Constants.C.title}
        alt={Constants.C.alt}
        />
        <LanguageProp
        image={Constants["C++"].image}
        title={Constants["C++"].title}
        alt={Constants["C++"].alt}
        />
        <LanguageProp
        image={Constants.Dart.image}
        title={Constants.Dart.title}
        alt={Constants.java.alt}
        />
        <LanguageProp
        image={Constants.Javascript.image}
        title={Constants.Javascript.title}
        alt={Constants.Javascript.alt}
        />
        <LanguageProp
        image={Constants.MySQL.image}
        title={Constants.MySQL.title}
        alt={Constants.MySQL.alt}
        />
        <LanguageProp
        image={Constants.HTML.image}
        title={Constants.HTML.title}
        alt={Constants.HTML.alt}
        />

        </div>

      <p className="py-6 uppercase text-purple-900 text-xl tracking-widest mx-4">
        Frameworks and Tools
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <LanguageProp
        image={Constants.Flutter.image}
        title={Constants.Flutter.title}
        alt={Constants.Flutter.alt}
        />
        <LanguageProp
        image={Constants.Flask.image}
        title={Constants.Flask.title}
        alt={Constants.Flask.alt}
        />
        <LanguageProp
        image={Constants.Git.image}
        title={Constants.Git.title}
        alt={Constants.Git.alt}
        />
        <LanguageProp
        image={Constants.ReactJS.image}
        title={Constants.ReactJS.title}
        alt={Constants.ReactJS.alt}
        />
        <LanguageProp
        image={Constants.MongoDB.image}
        title={Constants.MongoDB.title}
        alt={Constants.MongoDB.alt}
        />
        <LanguageProp
        image={Constants.Android.image}
        title={Constants.Android.title}
        alt={Constants.Android.alt}
        />
        <LanguageProp
        image={Constants.BootStrap.image}
        title={Constants.BootStrap.title}
        alt={Constants.BootStrap.alt}
        /> 
        <LanguageProp
        image={Constants.NodeJS.image}
        title={Constants.NodeJS.title}
        alt={Constants.NodeJS.alt}
        /> 
      </div>
      </div>
    </div>
  );
};

export default Technologies;
