import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import Fgrid from "../components/Fgrid";

function TeaCorner() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
  ];

  return (
    <div className="px-[50px] sm:px-[145px] md:px-[245px] md:px-[361px]">
      <Video
        source={"/videos/Tea Corner.mp4"}
      />
      <Title text={"Tea Corner"} />
      <Services services={serviceList} />
      <div className="mt-4">
        <p className="text-lg">
          The Tea Corner logo is a visual representation of coziness and
          authenticity. Its design is inspired by the ritual of tea and modern
          aesthetics. The minimalist style and clean lines convey the brand’s
          elegance and core value – to offer customers high-quality tea in a
          pleasant and inviting atmosphere.
        </p>
        <p className="text-lg font-semibold pt-6">
          Symbolism and Visual Elements
        </p>
        <p className="text-lg">The logo’s composition is carefully balanced</p>
        <p>
          🔸 The right triangle represents a "corner", symbolizing a cozy and
          welcoming space for tea lovers.
        </p>
        <p>
          {" "}
          🍵 The tea in the center embodies the brand’s dedication to
          authenticity, quality, and rich tea culture.
        </p>
        <p className="font-semibold text-lg pt-6">
          Color Palette and Emotional Impact
        </p>
        <p className="pt-1 text-lg ">
          The Tea Corner’s color palette consists of warm, earthy, and natural
          tones, creating a sense of peace and harmony. These carefully selected
          hues reflect the natural ingredients of tea, its aroma, and the
          soothing ambiance it brings.
        </p>

        <p className="font-semibold text-lg pt-6">Brand Identity and Purpose</p>
        <p className="pt-1 text-lg ">
          Tea Corner is more than just a tea café – it is a space where tea
          becomes an inspiration, a moment of comfort, and a memorable
          experience. The logo’s design captures this essence perfectly:
          minimalist yet rich in meaning, with symbols and visual harmony that
          speak to the brand’s story.
        </p>
      </div>
      <Fgrid
        image1={"../../images/teacorner/tc1.png"}
        image2={"../../images/teacorner/tc2.png"}
        image3={"../../images/teacorner/tc3.png"}
      />
      <img src="../../images/teacorner/tc4.png" alt="" className="w-full rounded-xl" />
      <div className="grid grid-cols-4 gap-6 mt-2 md:mt-6">
        <div className="bg-[#282828] aspect-[275/215] w-[355px] rounded-xl"></div>
        <div className="bg-[#82BE45] rounded-xl"></div>
        <div className="bg-[#E97441] rounded-xl"></div>
        <div className="bg-[#FFFFFF] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)]"></div>
      </div>
      <img src="../../images/teacorner/tc5.png" alt="" className="w-full mt-2 md:mt-6 rounded-xl"/>
      <div className="grid grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-6">
        <img src="../../images/teacorner/tc6.png" alt="" className="w-full rounded-xl"/>
        <img src="../../images/teacorner/tc7.png" alt="" className="w-full rounded-xl"/>
      </div>
      <img src="../../images/teacorner/tc8.png" alt="" className="w-full rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/teacorner/tc9.png" alt="" className="w-full rounded-xl mt-2 md:mt-6"/>
      <div className="grid grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-6">
        <img src="../../images/teacorner/tc10.png" alt="" className="rounded-xl"/>
        <img src="../../images/teacorner/tc11.png" alt="" className="rounded-xl"/>
      </div>
      <img src="../../images/teacorner/tc12.png" alt="" className="w-full rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/teacorner/tc13.png" alt="" className="w-full rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/teacorner/tc14.png" alt="" className="w-full rounded-xl mt-2 md:mt-6"/>

    </div>
  );
}

export default TeaCorner;
