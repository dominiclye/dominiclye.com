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
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos nihil perspiciatis nam? Voluptas, quisquam minus? Sed blanditiis, quaerat dolor doloribus ullam at voluptatum fugit, delectus voluptatibus nulla dolorem distinctio!</p>
        </div>
    </div>
  )
}
