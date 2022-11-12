/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 " >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
            <div className="col-span-2 mx-3"> 
            <p className=" uppercase text-purple-900 text-xl tracking-widest">//About Me</p>
            <h1>Who am I ?</h1>
            <p className="py-4 text-justify  text-md text-gray-600">Proident consectetur nostrud amet et. Nisi excepteur ad eiusmod non in do. Excepteur excepteur sunt quis occaecat laboris nostrud elit exercitation culpa ullamco ex dolore. In veniam dolor eiusmod laboris est incididunt qui laboris nisi tempor deserunt proident in. Reprehenderit dolore excepteur nisi elit et cupidatat. Eu adipisicing qui ea ipsum nisi ad proident dolor dolore duis et tempor minim labore. Nulla eiusmod velit fugiat Lorem et reprehenderit mollit.</p>
            <p className="text-justify text-md text-gray-600">Proident consectetur nostrud amet et. Nisi excepteur ad eiusmod non in do. Excepteur excepteur sunt quis occaecat laboris nostrud elit exercitation culpa ullamco ex dolore. In veniam dolor eiusmod laboris est incididunt qui laboris nisi tempor deserunt proident in. Reprehenderit dolore excepteur nisi elit et cupidatat. Eu adipisicing qui ea ipsum nisi ad proident dolor dolore duis et tempor minim labore. Nulla eiusmod velit fugiat Lorem et reprehenderit mollit.</p>
            <p className="py-4 text-justify  text-md text-gray-600 underline"> <a href="https://github.com/Vasudev-2308?tab=repositories">Checkout some projects of mine</a></p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex  justify center items-center p-4 hover:scale-105 ease-in duration-300">
                <img class = "rounded-full " src="https://avatars.githubusercontent.com/u/56473514?v=4" alt="Vdx's Image"/>
            </div>
        </div>
    </div>
  )
}

export default About