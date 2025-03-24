"use client"
import React from 'react'
import { CodeBlock } from './ui/code-block'

const code = `package main

import (
	"fmt"
)

type aboutMe struct {
	languages           []string
	skills_technologies []string
	university          string
	hackathons          []string
	hobbies             []string
}

func main() {
	me := aboutMe{
     languages: []string{
      "Golang", "Python", "C", "R", "Javascript",
     },
     skills_technologies: []string{
      "API/Backend development", "Webscraping", "API Reverse engineering", \n      "Data analysis", "Data classification", "Web development", "ThreeJS",
     },
     university: "The University of Melbourne",
     hackathons: []string{
      "CISSA Codebrew", "Catalyst Hackafun (2nd)", "Pokehack",
     },
     hobbies: []string{
      "Snowboarding", "Volleyball", "Cooking", "Clarinet",
     },
	}

	fmt.Printf("%+v\\n", me)
}
`

export default function AboutMe() {
  return (
    <div className='w-full h-screen pb-8 pt-10 lg:pt-12 px-12 lg:px-32 flex'>
        <div className='hidden lg:block'>
            <div className=' origin-top-left '>
                <CodeBlock 
                    language='go'
                    filename="aboutMe.go"
                    code={code}
                />
            </div>
        </div>
        <div className='p-5 [font-family:var(--font-custom)] flex flex-col gap-y-5'>
            <h1 className='text-6xl'>About Me</h1>
            <p className=''>I&apos;m a 19-year-old software engineer focused on building robust, efficient solutions for backend systems and machine learning applications.
I began coding at 14 by creating small Discord bots for my friends, which gradually evolved into a more serious pursuit. During the COVID lockdowns, I ran a Discord-based database search engine that served over 200 users — a project that became my primary source of income before I was eligible for employment.<br /><br />

Around the time I picked up Go, I began experimenting with reverse engineering TikTok&apos;s mobile endpoints. Go&apos;s lightweight concurrency model and network performance, especially when paired with fasthttp, enabled me to develop an autoclaimer that “claimed” rare usernames the moment they became available.<br /><br />

While backend engineering remains my core strength, I picked up enough web development to bring my ideas into production, and recently began exploring WebGL and Three.js as a creative outlet. Since starting university, I&apos;ve turned my focus toward deepening my understanding of data science, backend systems, and low-level programming — working primarily with Python, Go, and C.</p>
        </div>
    </div>
  )
}
