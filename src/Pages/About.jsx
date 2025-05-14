import React from "react";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start px-9 py-10">
      <div className="flex justify-center">
        <img
          src="/images/jiqo.png"
          alt="Profile"
          className="rounded-xl h-[577px] object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="space-y-8">
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
        <div className="bg-[#EDEEED] p-7 rounded-xl">
          <h3 className="font-semibold mb-2">Programs</h3>
          <div className="grid grid-cols-2 gap-y-1 text-gray-600">
            <p>Photoshop</p>
            <p>Figma</p>
            <p>Illustrator</p>
            <p>Powerpoint</p>
            <p>InDesign</p>
            <p>Word</p>
            <p>Premiere Pro</p>
            <p>Lightroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

{
  /* <div className='grid grid-cols-2 w-4xl mx-auto pt-32'>
<div className='h-[577px]'>
    <img src='../../images/jiqo.png' className="h-[577px] rounded-xl"/>
</div>
<div className='bg-black'>
    <div>
        
    </div>
</div>
</div> */
}
