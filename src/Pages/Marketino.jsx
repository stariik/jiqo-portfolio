import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";

function Marketino() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
  ];
  return (
    <div className="px-[205px]">
      <Video />
      <Title text={"Marketino"} />
      <Services services={serviceList} />
      <div className="mt-4">
        <p className="text-lg">
          Marketino is an innovative marketing company that provides strategic
          branding, digital advertising, and creative solutions. With a
          forward-thinking approach, Marketino helps businesses grow, succeed,
          and stand out in a competitive market. Logo Concept
        </p>
        <p className="text-lg">
          The Marketino logo is designed to reflect the brand’s progressive
          mindset, creativity, and commitment to success.
        </p>
        <ul className="list-disc px-8 pt-2">
          <li>
            Letter "M" – Represents the brand name, ensuring instant
            recognition.
          </li>
          <li>
            Upward Line in "M" – Symbolizes growth, progress, and success,
            aligning with Marketino’s mission to help brands elevate their
            presence.
          </li>
        </ul>
        <p className="pt-2 text-lg ">
          The combination of sharp angles and smooth curves creates a modern and
          dynamic look, reinforcing the company’s cutting-edge approach to
          marketing.
        </p>
      </div>
    </div>
  );
}

export default Marketino;
