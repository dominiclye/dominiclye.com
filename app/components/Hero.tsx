"use client"

import React from 'react'
import { AuroraBackground } from './ui/aurora-background';
import { motion } from 'framer-motion';
import { FlipWords } from './ui/flip-words';

const Hero = () => {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <h1 className='text-8xl'>🫖</h1>
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Hello, I&apos;m Dominic.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 overflow-hidden pl-10">
            <span>an avid</span>
            <div className="relative inline-block min-w-[11ch]">
              <FlipWords words={['Developer', 'Student', 'Snowboarder']}/>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default Hero