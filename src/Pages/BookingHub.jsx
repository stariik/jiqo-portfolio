import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import Fgrid from "../components/Fgrid";

function BookingHub() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
    "UI/UX Design",
  ];

  return (
    <div className="px-[205px]">
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
      </div>
    </div>
  );
}

export default BookingHub;
