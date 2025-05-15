import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-max mt-12 mb-36">
      <div className="col-span-1 md:col-span-2 text-lg text-center mt-2 w-md mx-auto">
        I'm Luka Jikia, a graphic & UI / UX designer with an addiction to detail
        and a love for storytelling.
      </div>
      <ProjectCard
        imageSrc={"/images/BOOKINGHUB.png"}
        title={"Booking Hub"}
        link="/bookinghub"
      />
      <ProjectCard
        imageSrc={"/images/BOOKINGHUBAPP.png"}
        title={"Booking Hub App"}
        link="/bookinghubapp"
      />
      <ProjectCard
        imageSrc={"/images/MARKETINO.png"}
        title={"Marketino"}
        link="/marketino"
      />
      <ProjectCard
        imageSrc={"/images/TEACORNER.png"}
        title={"Tea Corner"}
        link="/teacorner"
      />
      <ProjectCard
        imageSrc={"/images/TRUSTSTER.png"}
        title={"Trustster"}
        link="/trustster"
      />
      <ProjectCard
        imageSrc={"/images/MEKOBRE.png"}
        title={"Mekobre"}
        link="/mekobre"
      />
      <ProjectCard
        imageSrc={"/images/PLAYGROUND.png"}
        title={"Visual PlayGround"}
        className="col-span-1 md:col-span-2"
        link="/visualplayground"
      />
    </div>
  );
}

export default Projects;
