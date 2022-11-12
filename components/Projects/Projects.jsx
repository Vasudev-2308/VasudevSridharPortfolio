/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from 'next/image'
import agroBuddy from '../../public/Assets/Project1.png'
import netflixClone from '../../public/Assets/Project2.png';
import shoppingApp from '../../public/Assets/Project3.png'
import eVote from '../../public/Assets/Project4.png'

const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-purple-900">//Projects</p>
            <h1 className="py-4">What all have i built ?</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
                    <Image className="rounded-xl group-hover:opacity-10" src={agroBuddy} alt = "/"/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                      <h3 className="text-2xl text-white tracking-wider text-center">Agrobuddy</h3>
                      <p className="pb-4 pt-2 text-white text-center">Edge AI</p>
                      <p className="text-justify py-3 text-white text-md">Labore esse occaecat laboris in ullamco sint in. Exercitation velit officia occaecat eiusmod aliqua consequat. Sint do ex veniam pariatur exercitation fugiat adipisicing magna pariatur labore.</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
                    <Image className="rounded-xl group-hover:opacity-10" src={netflixClone} alt = "/"/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                      <h3 className="text-2xl text-white tracking-wider text-center">Agrobuddy</h3>
                      <p className="pb-4 pt-2 text-white text-center">Edge AI</p>
                      <p className="text-justify py-3 text-white text-md">Labore esse occaecat laboris in ullamco sint in. Exercitation velit officia occaecat eiusmod aliqua consequat. Sint do ex veniam pariatur exercitation fugiat adipisicing magna pariatur labore.</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
                    <Image className="rounded-xl group-hover:opacity-10" src={shoppingApp} alt = "/"/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                      <h3 className="text-2xl text-white tracking-wider text-center">Agrobuddy</h3>
                      <p className="pb-4 pt-2 text-white text-center">Edge AI</p>
                      <p className="text-justify py-3 text-white text-md">Labore esse occaecat laboris in ullamco sint in. Exercitation velit officia occaecat eiusmod aliqua consequat. Sint do ex veniam pariatur exercitation fugiat adipisicing magna pariatur labore.</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
                    <Image className="rounded-xl group-hover:opacity-10" src={eVote} alt = "/"/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                      <h3 className="text-2xl text-white tracking-wider text-center">Agrobuddy</h3>
                      <p className="pb-4 pt-2 text-white text-center">Edge AI</p>
                      <p className="text-justify py-3 text-white text-md">Labore esse occaecat laboris in ullamco sint in. Exercitation velit officia occaecat eiusmod aliqua consequat. Sint do ex veniam pariatur exercitation fugiat adipisicing magna pariatur labore.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects

