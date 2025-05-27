import React from "react";
import Download from "../components/Download";

function About() {
  return (
    <div className="mb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start px-6 py-8 text-[20px]">
      <div className="flex justify-center">
        <img
          src="/images/jiqo.png"
          alt="Profile"
          className="rounded-xl object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="space-y-8 font-microRegular ">
        <p>
          I'm Luka Jiqia, a graphic and UI/UX designer from Tbilisi. I create
          brand identities and interactive digital experiences, but I’m always
          open to new and exciting projects.
        </p>
        <p>
          I believe that great design is all about the details—the often
          unnoticed but essential ones. My passion for precision and visual
          communication helps me craft work that is not only aesthetically
          pleasing but also functional and meaningful.
        </p>
        <p>
          In my process, I strive to balance aesthetics and usability, ensuring
          that every project is not just visually striking but also practical
          and memorable.
        </p>

        {/* Programs Box */}
        <div className="bg-[#EDEEED] p-7 rounded-xl mt-12">
          <h3 className="font-microMedium mb-2 ">Programs</h3>
          <div className="grid grid-cols-2 gap-y-1 text-gray-600 font-microRegular">
            <p>Photoshop</p>
            <p>Lightroom</p>
            <p>Illustrator</p>
            <p>Figma</p>
            <p>Premiere Pro</p>
            <p>Powerpoint</p>
            <p>InDesign</p>
            <p>Word</p>
          </div>
        </div>
      </div>
    </div>
      <Download />
    </div>
  );
}

export default About;