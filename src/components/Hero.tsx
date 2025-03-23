import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
          <div className="w-full h-screen pb-8 pt-10 lg:pt-12 px-12 lg:px-32 flex flex-col justify-between">
              <div className="h-full flex flex-col justify-between">
                <nav className="flex justify-between text-[#66615E] [font-family:var(--font-custom)] items-baseline">
                  <h1 className="flex-nowrap lg:text-5xl text-4xl">Dominic Lye</h1>
                  <ul className="hidden sm:flex text-xl gap-5 underline">
                    <li><a href="" download>Resume</a></li>
                    <li><a href="github.com/dominiclye">Github</a></li>
                    <li><a href="linkdin.com/dominiclye"></a>Linkedin</li>
                  </ul>
                </nav>
                
                <div >
                  <div className="lg:text-[5rem] md:text-[4rem] text-[3rem] [font-family:var(--font-custom)] mb-3">
                    <h1 className="m-0 leading-none">Software Engineer</h1>
                    <h1 className="m-0 leading-none">Data Scientist</h1>
                  </div>
                  <div className="w-full h-[300px] overflow-hidden rounded-4xl">
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
                <Image 
                src="/down_arrow.png"
                alt="More..."
                width={50}
                height={500}
                className="rotate-90 mt-6"
                />
        </div>
    </div>
  )
}

export default Hero