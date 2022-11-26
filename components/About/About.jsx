/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2 mx-3">
          <p className=" uppercase text-[#ecf0f3] text-xl tracking-widest">
            //About_Me
          </p>
          <h1>Who am I ?</h1>
          <p className="py-4 text-justify  text-md text-[#ecf0f3]">
            Proident consectetur nostrud amet et. Nisi excepteur ad eiusmod non
            in do. Excepteur excepteur sunt quis occaecat laboris nostrud elit
            exercitation culpa ullamco ex dolore. In veniam dolor eiusmod
            laboris est incididunt qui laboris nisi tempor deserunt proident in.
            Reprehenderit dolore excepteur nisi elit et cupidatat. Eu
            adipisicing qui ea ipsum nisi ad proident dolor dolore duis et
            tempor minim labore. Nulla eiusmod velit fugiat Lorem et
            reprehenderit mollit.
          </p>
          <p className="text-justify text-md text-[#ecf0f3]">
            Proident consectetur nostrud amet et. Nisi excepteur ad eiusmod non
            in do. Excepteur excepteur sunt quis occaecat laboris nostrud elit
            exercitation culpa ullamco ex dolore. In veniam dolor eiusmod
            laboris est incididunt qui laboris nisi tempor deserunt proident in.
            Reprehenderit dolore excepteur nisi elit et cupidatat. Eu
            adipisicing qui ea ipsum nisi ad proident dolor dolore duis et
            tempor minim labore. Nulla eiusmod velit fugiat Lorem et
            reprehenderit mollit.
          </p>
          <p className="py-4 text-justify  text-md text-[#ecf0f3] underline">
            {" "}
            <a href="https://github.com/Vasudev-2308?tab=repositories">
              Checkout some projects of mine
            </a>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
          whileHover={{
            scale: [1, 1.2, 1.1],
          }}
        >
          <div className="">
            <img
              class=" m-auto shadow-xl bg-gray-100 shadow-white rounded-full flex  justify center items-center p-4 "
              src="https://avatars.githubusercontent.com/u/56473514?v=4"
              alt="Vdx's Image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
