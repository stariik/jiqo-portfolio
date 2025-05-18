import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import Fgrid from "../components/Fgrid";

function Marketino() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
  ];
  return (
    <div className="px-[50px] sm:px-[145px] md:px-[245px]">
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
      <div>
        <Fgrid
          image1={"../../images/marketino/marketino1.png"}
          image2={"../../images/marketino/marketino2.png"}
          image3={"../../images/marketino/marketino3.png"}
        />
        <div className="grid grid-cols-2 gap-2">
          <img
            src="../../images/marketino/marketino4.png"
            alt=""
            className="object-cover rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
          />
          <img
            src="../../images/marketino/marketino5.png"
            alt=""
            className="object-cover rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-2 md:mt-8">
          <div className="bg-[#220659] rounded-xl relative h-32 md:h-[500px]">
            <div className="absolute bottom-8 left-6 text-white text-xs leading-tight">
              #220659
              <br />
              R G B: 34 6 89
              <br />C Y M K: 62 93 0 65
            </div>
          </div>
          <div className="bg-[#0D3677] rounded-xl relative h-32 md:h-[500px]">
            <div className="absolute bottom-8 left-6 text-white text-xs leading-tight">
              #0D3677
              <br />
              R G B: 13 54 119
              <br />C Y M K: 89 55 0 53
            </div>
          </div>
          <div className="bg-[#087AFD] rounded-xl relative h-32 md:h-[500px]">
            <div className="absolute bottom-8 left-6 text-white text-xs leading-tight">
              #087AFD
              <br />
              R G B: 8 122 253
              <br />C Y M K: 97 52 0 1
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-xl relative h-32 md:h-[500px] shadow-[0_0_20px_rgba(0,0,0,0.2)] ">
            <div className="absolute bottom-8 left-6 text-black text-xs leading-tight">
              #FFFFFF
              <br />
              R G B: 255 255 255
              <br />C Y M K: 0 0 0 0
            </div>
          </div>
          <div className="bg-[#220659] rounded-xl relative h-32 md:h-[500px]">
            <div className="absolute bottom-8 left-6 text-white text-xs leading-tight">
              #220659
              <br />
              R G B: 34 6 89
              <br />C Y M K: 62 93 0 65
            </div>
          </div>
        </div>
        {/* 32 px dashoreba */}
        <img
          src="public/images/marketino/marketino7.png"
          alt=""
          className="w-full rounded-xl mt-8 object-cover max-h-[700px]"
        />
        {/* 24 px dashoreba */}

        <img
          src="public/images/marketino/marketino8.png"
          alt=""
          className="w-full rounded-xl mt-6 object-cover max-h-[800px]"
        />
        {/* 24 px dashoreba */}
 
        <img
          src="public/images/marketino/marketino9.png"
          alt=""
          className="w-full rounded-xl mt-6 object-cover max-h-[1000px]"
        />
        <img
          src="public/images/marketino/marketino10.png"
          alt=""
          className="w-full rounded-xl mt-6 object-cover max-h-[1100px]"
        />
        <div className="grid md:grid-cols-5 gap-2 md:gap-6 mt-2 md:mt-6">
          <img src="public/images/marketino/marketino11.png" alt="" className="rounded-xl col-span-2"/>
          <img src="public/images/marketino/marketino12.png" alt="" className="rounded-xl col-span-3"/>
        </div>
        <img src="public/images/marketino/marketino13.png" alt="" className="rounded-xl mt-2 md:mt-6 mb-40"/>
      </div>
    </div>
  );
}

export default Marketino;
