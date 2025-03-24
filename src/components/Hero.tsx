"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';



const Hero = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);
  

  return (
          <div className="w-full h-screen pb-8 pt-10 lg:pt-12 px-12 lg:px-32 flex flex-col justify-between">
              <div className="h-full flex flex-col justify-between">
                <nav className="relative flex justify-between text-[#66615E] [font-family:var(--font-custom)] items-baseline">
                  <h1 className="flex-nowrap lg:text-5xl text-4xl">Dominic Lye</h1>

                  <div onClick={() => setMenuOpen(!menuOpen)} className='relative w-[25px] h-[25px] cursor-pointer sm:hidden z-55'>
                    <span className={`
                      absolute top-1/2 left-0 w-full h-[3px] bg-[#333] transition-all duration-300
                      ${menuOpen ? 'rotate-[-90deg] opacity-0' : 'rotate-0 opacity-100'}
                      -translate-y-1/2
                    `}/>
                      <span
                      className={`
                        absolute top-1/2 left-0 w-full h-[3px] bg-[#333] transition-all duration-300
                        ${menuOpen ? 'rotate-0' : 'rotate-90'}
                        -translate-y-1/2
                      `}
                    />
                  </div>
                  <ul className="hidden sm:flex text-xl gap-5 underline">
                    <li><a href="" download>Resume</a></li>
                    <li><a href="https://github.com/dominiclye">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/dominiclye/">Linkedin</a></li>
                  </ul>
                  <AnimatePresence>
                    {menuOpen && (
                      <motion.ul
                        key="menu"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-xl gap-5 sm:underline sm:flex flex absolute flex-col w-full h-screen items-center py-[30%] bg-[#F2F0EF] z-45 text-[1.5rem]"
                      >
                        <li><a href="" download>Resume</a></li>
                        <li><a href="https://github.com/dominiclye">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/dominiclye/">Linkedin</a></li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </nav>
                
                <div >
                  <div className="lg:text-[5rem] md:text-[4rem] text-[2rem] [font-family:var(--font-custom)] mb-3">
                    <h1 className="m-0 leading-none">Software Engineer</h1>
                    <h1 className="m-0 leading-none">Data Scientist</h1>
                  </div>
                  <div className="w-full h-[200px] md:h-[300px] overflow-hidden rounded-4xl">
                    <Image
                      src="/comm199.png"
                      alt="Drawing of me done by haru <3"
                      width={1500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <a href="">
                  <Image 
                  src="/down_arrow.png"
                  alt="More..."
                  width={50}
                  height={500}
                  className="rotate-45 mt-6"
                  />
                </a>
        </div>
    </div>
  )
}

export default Hero