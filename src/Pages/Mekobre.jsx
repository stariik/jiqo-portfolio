import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";

function Mekobre() {
  const serviceList = ["Identity Design", "Branding", "Art Direction"];
  return (
    <div className="px-[205px]">
      <Video />
      <Title text={"Mekobre"} />
      <Services services={serviceList} />
      <div>
        <p className="text-lg font-semibold pt-4">Project Description</p>
        <p>
          The MEKOBRE branding captures the adventurous spirit and vibrant
          energy of entertainment. Inspired by the idea of exploration and
          discovery — much like finding a hidden cinematic gem — the design
          combines bold shapes, neon color palettes, and playful illustrations
          to create a lively, engaging experience for users.
        </p>
        <p className="text-lg font-semibold pt-4">
          Symbolism and Visual Elements
        </p>
        <p>
          The central ship wheel symbolizes navigation and exploration, aligning
          with the journey of discovering new movies and stories.The film reel
          and frames highlight the platform’s dedication to cinema and
          storytelling, blending technology with creativity.
        </p>
        <p className="text-lg font-semibold pt-4">
          Color Palette and Emotional Impact
        </p>
        <p>
          MEKOBRE’s vivid purple, electric blue, and deep black hues evoke a
          sense of mystery, excitement, and immersion — key emotions associated
          with the world of films. The energetic color transitions add a
          futuristic touch, making the platform feel dynamic and innovative.
        </p>
        <p className="text-lg font-semibold pt-4">
          {" "}
          Brand Identity and Purpose
        </p>
        <p>
          MEKOBRE is more than a movie website — it is a gateway to adventures,
          emotions, and cultural storytelling. The brand identity emphasizes
          connection, curiosity, and entertainment, creating an inviting and
          thrilling atmosphere for users to explore a universe of stories, all
          in their native language.
        </p>
      </div>
    </div>
  );
}

export default Mekobre;
