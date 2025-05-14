function ProjectCard({title, imageSrc, className}) {
  return (
    <div className={`text-left grid ${className}`}>
      <img src={imageSrc} alt={title} className='rounded-2xl w-full h-[366px] object-cover'/>
      <p className="text-lg/12">{title}</p>
    </div>
  );
}

export default ProjectCard;
