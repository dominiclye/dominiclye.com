"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


const data = [


  {
    title: "2023",
    description: "Graduated from highschool after pursuing CS based subjects during VCE.",
    url: "/c496c54c-d821-4ba3-af19-09f0fd8afbed.JPG"
  },
  {
    title: "2024",
    description: "Started my Bachelor's degree at Melbourne Uni, majoring in Data science. Got involved with a few clubs and won a couple hackathons along the way.",
    url: "/IMG_4424.jpg"
  },
  {
    title: "2025",
    description: "I can't read the future :( Coming Soon...",
    url: "/IMG_1399 2.JPG"
  }
];

const Education = () => {

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[80%] text-white flex flex-col items-center'>
        <p className="text-4xl sm:text-5xl font-bold relative z-20 text-neutral-200 mt-20">
          Education/Experience
        </p>
        
        <div className='relative flex flex-col w-1/3'>
          {data.map((year, index) => (
            <motion.div
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-10`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={variants}
            >
                <div className='w-1/2 px-5'>
                  <h3 className='text-2xl font-bold mb-4'>{year.title}</h3>
                  <p className='text-neutral-300'>{year.description}</p>
                </div>

                <div className='w-[2px] bg-neutral-500 h-full'></div>
                <div className='px-5 flex justify-center'>
                  <Image 
                    src={year.url}
                    alt={year.title}
                    width={300}
                    height={250}
                    className="rounded-lg object-cover h-44 w-44 shadow-md"
                  />
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education