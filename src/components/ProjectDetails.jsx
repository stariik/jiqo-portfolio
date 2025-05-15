import React from "react";

function ProjectDetails({
  title,
  services,
  description,
  logoConcept,
  flexibilityTitle,
  flexibilityPoints,
  closingText,
}) {
  return (
    <div className="max-w-5xl mx-auto px-8 py-10 space-y-6 text-sm md:text-base">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {/* Services */}
      <div>
        <h2 className="font-semibold">Services</h2>
        <ul className="text-gray-400 space-y-1 mt-1">
          {services.map((service, i) => (
            <li key={i} className={i === 0 ? "text-black" : ""}>{service}</li>
          ))}
        </ul>
      </div>

      <p>{description}</p>

      {/* Logo Concept */}
      <div>
        <h3 className="font-semibold">Logo Concept</h3>
        <p>{logoConcept}</p>
      </div>

      {/* Flexibility Points */}
      <div>
        <h3 className="font-semibold">{flexibilityTitle}</h3>
        <ul className="list-disc pl-5 space-y-1">
          {flexibilityPoints.map((point, i) => (
            <li key={i}><strong>{point.label}</strong> – {point.text}</li>
          ))}
        </ul>
      </div>

      <p>{closingText}</p>
    </div>
  );
}

export default ProjectDetails;
