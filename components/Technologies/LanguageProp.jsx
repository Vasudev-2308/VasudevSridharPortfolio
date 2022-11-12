import Image from 'next/image'
import React from 'react'

const LanguageProp = ({image, title, alt }) => {
  return (
    <div className="p-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
          <div className="justify-between items-center flex ">
            <div className="m-auto">
              <Image
                src={image}
                alt={alt}
                width='64'
                height='64'
              />
            </div>
            <p className="uppercase text-sm px-4">{title}</p>
          </div>
        </div>
  )
}

export default LanguageProp;
