/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import React, { useState } from "react";
import Contacts from "../../Constants/links.json";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import workImg from "../../public/Assets/work.png";
import Link from "next/link";

const Contact = () => {
  const [email, setEmail] = useState("John.Doe@example.com"); 
  const [name, setName] = useState("John Doe"); 
  const [number, setNumber] = useState("70xxxxxxxx"); 
  const [subject, setSubject] = useState("You Rock Buddy"); 
  const [message, setMessage] = useState("Wanna Collab ?");

  let handleName = (evnt) => {
    let inputVal = evnt.target.value;
    setName(inputVal);
  }

  let handleEmail = (evnt) => {
    let inputVal = evnt.target.value;
    setEmail(inputVal);
  }
  let handleSubject = (evnt) => {
    let inputVal = evnt.target.value;
    setSubject(inputVal);
  }
  let handlePh = (evnt) => {
    let inputVal = evnt.target.value;
    setNumber(inputVal);
  }
  let handleMessage = (evnt) => {
    let inputVal = evnt.target.value;
    setMessage(inputVal);
  }

  const sendMail = async (e) =>{
    e.preventDefault();
   
   const results = await fetch('/pages/api/communicate', {
    method:"POST",
    body: JSON.stringify({
      email: email, 
      phno : number, 
      name : name, 
      sub: subject, 
      msg: message
    })
   }); 

   if(results.status == 200){
    alert(`Thanks ${name}, your message has been successfully sent to Vdx`);
   }
   else{
    alert("Failed to Send the mail");
   }
  }

  return (

    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#ecf0f3]">
          //Contact
        </p>
        <h1 className="py-4">Get in touch with me..</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full bg-[#afb5f9] shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={workImg}
                  alt="img"
                />
              </div>

              <div>
                <h2 className="py-2 text-[#250940]">Vasudeva. S</h2>
                <p className="uppercase text-[#250940]">Software Engineer</p>
                <p className="text-[#250940]">Message me to connect and collab</p>
              </div>
              <div className="flex items-center justify-between py-4">
                <a href={Contacts.linkedin} target="_blank" rel="noreferrer">
                  <div className="rounded-full bg-blue-600 shadow-lg shadow-blue-300 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href={Contacts.github} target="_blank" rel="noreferrer">
                  <div className="rounded-full bg-gray-800 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href={Contacts.instagram} target="_blank" rel="noreferrer">
                  <div className="rounded-full bg-rose-600 shadow-lg shadow-gray-200 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a>
                <a href={Contacts.mail} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg bg-red-600 p-5 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300">
                    <SiGmail />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 bg-[#afb5f9] rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={sendMail} method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 bg-gray-800 rounded-lg p-3 flex border-gray-200"
                      type="text"
                      
                      placeholder={name}
                      onChange={handleName}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Phone
                    </label>
                    <input
                      className="border-2 bg-gray-800 rounded-lg p-3 flex border-gray-200"
                      type="number"
                      
                      placeholder={number}
                      onChange={handlePh}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="name">
                    Email
                  </label>
                  <input
                    className="border-2 bg-gray-800 rounded-lg p-3 flex border-gray-200"
                    type="email"
                    
                    placeholder={email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="name">
                    Subject
                  </label>
                  <input
                    className="border-2 bg-gray-800 rounded-lg p-3 flex border-gray-200"
                    type="text"
                    
                    placeholder={subject}
                    onChange={handleSubject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="name">
                    Message
                  </label>
                  <textarea
                    className="border-2 bg-gray-800 rounded-lg p-3 border-gray-200"
                    rows="7"
                    
                    placeholder={message}
                    onChange={handleMessage}
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="flex flex:row justify-between items-center rounded-full bg-[#afb5f9] shadow-lg shadow-purple-600 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsChevronDoubleUp className="text-[#250940]" size={25} />
              <p className="px-2 text-[#250940]">Scroll to top</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
