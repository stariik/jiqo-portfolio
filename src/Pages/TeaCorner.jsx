import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";

function TeaCorner() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
  ];

  return (
    <div className="px-[205px]">
      <Video /> 
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
        <p className="text-lg font-semibold pt-6">Symbolism and Visual Elements</p>
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
    </div>   
  );
}

export default TeaCorner;
