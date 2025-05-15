import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";

function BookingHubApp() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
    "UI/UX Design",
  ];

  return (
    <div className="px-[205px] my-8">
      <Video />
      <Title text={"Booking Hub App"} />
      <Services services={serviceList} />
      <div>
        <p className="text-lg font-semibold pt-4">Introduction</p>
        <p>
          BookingHub.ge is a modern booking platform designed to simplify the
          process of reserving beauty salon services, dental clinics, and mental
          health consultations. This case study presents the UX/UI design
          journey, challenges faced, and solutions implemented to create an
          intuitive and user-friendly experience.
        </p>
        <p className="text-lg font-semibold pt-4"> Problem Statement</p>
        <p>
          Users need a seamless and efficient way to book services with minimal
          communication effort while ensuring trust and convenience. Many
          existing platforms offer fragmented experiences, making it difficult
          to navigate and complete bookings.
        </p>
      </div>
    </div>
  );
}

export default BookingHubApp;
