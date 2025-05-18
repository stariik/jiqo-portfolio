import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import Fgrid from "../components/Fgrid";
import FourGrid from "../components/FourGrid";

function BookingHub() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
    "UI/UX Design",
  ];

  return (
    <div className="px-[50px] sm:px-[145px] md:px-[245px] grid">
      <Video />
      <Title text={"Booking Hub"} />
      <Services services={serviceList} />
      <div className="mt-4">
        <p className="text-lg">
          BookingHub is a modern online booking platform that enables users to
          book services easily and efficiently. The platform integrates various
          industries, offering an innovative experience and ensuring user
          convenience.
        </p>
        <p className="font-semibold mt-4 mb-2 text-xl">Logo Concept</p>
        <p className="text-lg">
          The BookingHub logo is designed to be clear, memorable, and dynamic,
          representing the brand’s trustworthiness, accessibility, and
          <span className="font-bold"> flexibility</span>
        </p>
        <ul className="list-disc px-8 pt-2">
          <li>
            Letter "B" – Represents the first letter of the brand name, making
            it easy to identify and recognize.
          </li>
          <li>
            Bookmark Symbol – Highlights the booking process, which is the
            platform’s core function.
          </li>
        </ul>
        <p className="pt-8 text-lg ">
          The graphic design ensures that the logo remains minimalistic,
          adaptable, and versatile across different media, whether digital or
          physical. logo is a modern and effective visual identity that clearly
          conveys the brand’s values. Its minimal yet powerful design builds
          strong recognition and enhances customer trust and brand success.
        </p>
      </div>
      <div>
        <Fgrid
          image1={"../../images/bookinghub/booking1.png"}
          image2={"../../images/bookinghub/booking2.png"}
          image3={"../../images/bookinghub/booking3.png"}
        />
        <img
          src="public/images/bookinghub/booking4.png"
          alt=""
          className="w-full rounded-xl object-cover"
        />
        <div className="grid grid-cols-5 gap-4 mt-6">
          <img
            src="public/images/bookinghub/booking5.png"
            alt=""
            className="rounded-xl col-span-2"
          />
          <div className="col-span-2 grid grid-cols-2 gap-2 md:gap-4">
            <div className="bg-[#DC4E4E] w-full rounded-xl relative">
              <div className="absolute bottom-6 left-6 text-white text-sm leading-tight">
                <p>#DC4E4E</p>
                <p>R G B: 220 78 78</p>
                <p>C Y M K: 0 65 65 14</p>
              </div>
            </div>

            <div className="bg-[#EAB24B] w-full rounded-xl relative">
              <div className="absolute bottom-6 left-6 text-white text-sm leading-tight">
                <p>#EAB24B</p>
                <p>R G B: 234 178 75</p>
                <p>C Y M K: 0 24 68 8</p>
              </div>
            </div>

            <div className="bg-[#31334C] w-full rounded-xl relative">
              <div className="absolute bottom-6 left-6 text-white text-sm leading-tight">
                <p>#31334C</p>
                <p>R G B: 49 51 76</p>
                <p>C Y M K: 36 33 0 70</p>
              </div>
            </div>

            <div className="bg-[#D8D8D8] w-full rounded-xl relative">
              <div className="absolute bottom-6 left-6 text-black text-sm leading-tight">
                <p>#D8D8D8</p>
                <p>R G B: 216 216 216</p>
                <p>C Y M K: 0 0 0 15</p>
              </div>
            </div>
          </div>
          <img
            src="public/images/bookinghub/wilifon.png"
            alt=""
            className="max-h-[556px] rounded-[15px] border-4 border-[#31334c]"
          />
        </div>
        <img
          src="public/images/bookinghub/booking6.png"
          alt=""
          className="w-full rounded-xl mt-4 md:mt-8 object-cover"
        />
        <FourGrid
          image1={"public/images/bookinghub/booking7.png"}
          image2={"public/images/bookinghub/booking8.png"}
          image3={"public/images/bookinghub/booking9.png"}
          image4={"public/images/bookinghub/booking10.png"}
        />
        <img
          src="public/images/bookinghub/booking11.png"
          alt=""
          className="w-full rounded-xl mt-6 object-cover"
        />
        <img
          src="public/images/bookinghub/booking12.png"
          alt=""
          className="w-full rounded-xl mt-6 object-cover"
        />
        <img
          src="public/images/bookinghub/booking13.png"
          alt=""
          className="w-full rounded-xl mt-6 object-cover"
        />
        <div className="grid grid-cols-2 gap-6 mt-6">
          <img
            src="public/images/bookinghub/booking14.png"
            alt=""
            className="rounded-xl object-cover"
          />
          <img
            src="public/images/bookinghub/booking15.png"
            alt=""
            className="rounded-xl object-cover"
          />
        </div>
        <img
          src="public/images/bookinghub/booking16.png"
          alt=""
          className="w-full rounded-xl mt-6 object-cover"
        />
      </div>
    </div>
  );
}

export default BookingHub;
