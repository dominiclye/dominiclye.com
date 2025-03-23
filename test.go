package main

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
			"API/Backend development", "Automation/Webscraping", "API Reverse engineering", "Data analysis", "Data classification", "Web development", "ThreeJS",
		},
		university: "The University of Melbourne",
		hackathons: []string{
			"CISSA Codebrew", "Catalyst Hackafun (2nd)", "Pokehack",
		},
		hobbies: []string{
			"Snowboarding", "Volleyball", "Cooking", "Clarinet",
		},
	}

	fmt.Printf("%+v\n", me)
}
