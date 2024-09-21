"use client"
import React from 'react'



const Projects = () => {
  const cards = [
    {
      title: "FindMine",
      description: "Catalyst Hackathon Winner. A map of accessible live music venues around Melbourne, operating on user",
      img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      url: "https://findmine.vercel.app"
    },
    {
      title: "adbot.gg",
      description: "A telegram adbot that autoforwards user messages to certain channels. Serving over 100 users daily.",
      img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      url: "https://t.me/ableist"
    },
    {
      title: "CSLevelled",
      description: "A productivity app for computer science students with over 10,000 active users, gamifying CS study.",
      img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      url: "https://dominiclye.com"
    },
  ]

  return (
    <div>
      <h1 className='absolute text-9xl px-[300px] py-[10px] z-10'>🏂</h1>
      <div className='bg-zinc-900 flex flex-col items-center justify-center min-h-screen'>
        <div className="h-[80vh] w-[80vw]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
        {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex bg-zinc-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
          <div className='flex flex-col justify-center items-center'>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-neutral-200 bg-gradient-to-b">
              Recent Projects
            </p>
            <h2 className='py-5 text-2xl text-white text-wrap w-1/2 align-middle'>All sites are deployed but not necessarily open source. If you have any questions, contact me.</h2>
              <div className='flex flex-wrap gap-5'>
                {cards.map((project) => (
                  <div className="max-w-xs w-full group/card" key={project.title} onClick={() => window.open(project.url, "_blank")}>
                    <div
                      className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                      style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                      <div className="flex flex-row items-center space-x-4 z-10">
                      </div>
                      <div className="text content">
                        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                          {project.title}
                        </h1>
                        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects