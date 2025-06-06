import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({title, imageSrc, className, link}) {
  return (
    <Link to={link} className={`text-left grid  ${className}`}>
      <img src={imageSrc} alt={title} className='rounded-2xl w-full h-[366px] object-cover'/>
      <p className="font-textMedium mt-6 text-2xl">{title}</p>
    </Link>
  );
}

export default ProjectCard;
