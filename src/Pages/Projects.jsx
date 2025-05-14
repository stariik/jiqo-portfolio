import React from 'react'
import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: "Booking Hub", imageSrc: "/images/BOOKINGHUB.png" },
  { title: "Booking Hub App", imageSrc: "/images/BOOKINGHUBAPP.png" },
  { title: "Marketino", imageSrc: "/images/MARKETINO.png" },
  { title: "Tea Corner", imageSrc: "/images/TEACORNER.png" },
  { title: "Trustster", imageSrc: "/images/TRUSTSTER.png" },
  { title: "Marketino", imageSrc: "/images/MEKOBRE.png" },
  { title: "Visual Playground", imageSrc: "/images/PLAYGROUND.png", fullWidth: true },
];

function Projects() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 mx-auto w-max"> 
      <ProjectCard imageSrc={"/images/BOOKINGHUB.png"} title={"Booking Hub"}/>
      <ProjectCard imageSrc={"/images/BOOKINGHUBAPP.png"} title={"Booking Hub App"}/>
      <ProjectCard imageSrc={"/images/MARKETINO.png"} title={"Marketino"}/>
      <ProjectCard imageSrc={"/images/TEACORNER.png"} title={"Tea Corner"}/>
      <ProjectCard imageSrc={"/images/TRUSTSTER.png"} title={"Trustster"}/>
      <ProjectCard imageSrc={"/images/MEKOBRE.png"} title={"Mekobre"}/>
      <ProjectCard imageSrc={"/images/PLAYGROUND.png"} title={"Visual PlayGround"} className={"col-span-2"}/>
    </div>
  )
}

export default Projects