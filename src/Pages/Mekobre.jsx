import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import Fgrid from "../components/Fgrid";

function Mekobre() {
  const serviceList = ["Identity Design", "Branding", "Art Direction"];
  return (
    <div className="px-[50px] sm:px-[145px] md:px-[361px] pb-16">
      <Video
        source={"/videos/Mekobre.mp4"}
      />
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
      <Fgrid
        image1={"../../images/mekobre/m1.png"}
        image2={"../../images/mekobre/m2.png"}
        image3={"../../images/mekobre/m3.png"}
      />
      <img
        src="../../images/mekobre/m4.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
      <img
        src="../../images/mekobre/m5.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
      <div className="grid grid-cols-2 gap-2 md:gap-6">
        <img
          src="../../images/mekobre/m6.png"
          alt=""
          className="mt-2 md:mt-6 rounded-xl"
        />
        <img
          src="../../images/mekobre/m7.png"
          alt=""
          className="mt-2 md:mt-6 rounded-xl"
        />
        <img
          src="../../images/mekobre/m8.png"
          alt=""
          className="mt-2 md:mt-6 rounded-xl"
        />
        <img
          src="../../images/mekobre/m9.png"
          alt=""
          className="mt-2 md:mt-6 rounded-xl"
        />
      </div>
      <img
        src="../../images/mekobre/m10.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
      <img
        src="../../images/mekobre/m11.png"
        alt=""
        className="mt-2 md:mt-8 rounded-xl"
      />
      <img
        src="../../images/mekobre/m12.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
      <img
        src="../../images/mekobre/m13.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
      <img
        src="../../images/mekobre/m14.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
      <img
        src="../../images/mekobre/m15.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
      <img
        src="../../images/mekobre/m16.png"
        alt=""
        className="mt-2 md:mt-6 rounded-xl"
      />
    </div>
  );
}

export default Mekobre;
