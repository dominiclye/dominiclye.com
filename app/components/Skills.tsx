"use client"

import React from 'react'
import { motion } from 'framer-motion'


const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

const hoverEffect = {
  scale: 1.1,
  backgroundColor: "#ffffff22", 
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", 
};

const Skills = () => {
    const content = ['Python', 'Golang', 'ReactJS', 'SQL', 'C', 'Node', 'MongoDB', 'ThreeJS', 'Tailwind']
  return (
    <div className='flex flex-col w-full justify-center items-center'>
        <p className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-neutral-200 mt-3">
              Skills/Technology
        </p>
        <p className='text-white py-5 text-2xl font-light'>A collection of the languages, technologies, and framworks I have under my belt.</p>
        <div className='lg:w-96 flex flex-wrap justify-center gap-5 items-center lg:flex-wrap mb-10'>
            {content.map((lang, index) => (
                    <motion.li
                    className='border rounded-xl px-5 py-3 list-none text-white'
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                    whileHover={hoverEffect}>
                        {lang}
                    </motion.li>
            ))}
        </div>
    </div>
  )
}

export default Skills