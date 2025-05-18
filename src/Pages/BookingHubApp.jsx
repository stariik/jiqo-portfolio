import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import ColorCard from "../components/ColorCard";

function BookingHubApp() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
    "UI/UX Design",
  ];

  return (
    <div className="px-[50px] sm:px-[145px] md:px-[361px]">
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
      <img
        src="../../images/bookinghubapp/bapp1.png"
        alt=""
        className="rounded-xl mt-6 w-full"
      />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-6 mt-2 md:mt-6">
         
        <ColorCard title={"Accent"} bgcolor={"#222222"} hex={"222222"} />
        <ColorCard title={"Accent"} bgcolor={"#FF6666"} hex={"FF6666"} />
        <ColorCard
          title={"Background"}
          bgcolor={"#FFFFFF"}
          hex={"FFFFFF"}
          textColor={"black"}
          shadow
        />
        <ColorCard
          title={"Button background"}
          bgcolor={"#FFECEC"}
          hex={"FFECEC"}
          textColor={"black"}
        />
        <ColorCard title={"Header text"} bgcolor={"#222222"} hex={"222222"} />
        <ColorCard title={"Text"} bgcolor={"#222222"} hex={"222222"} />
        <ColorCard
          title={"Secondary text"}
          bgcolor={"#555555"}
          hex={"555555"}
        />
        <ColorCard
          title={"Border"}
          bgcolor={"#D8D8D8"}
          hex={"D8D8D8"}
          textColor={"black"}
        />
        <ColorCard title={"Error"} bgcolor={"#FF3636"} hex={"FF3636"} />
      </div>

      <div className=""></div>
      <div className=""></div>

      <img
        src="../../images/bookinghubapp/bapp2.png"
        alt=""
        className="rounded-xl mt-6 w-full"
      />
      <img
        src="../../images/bookinghubapp/bapp3.png"
        alt=""
        className="rounded-xl mt-6 w-full"
      />
      <img
        src="../../images/bookinghubapp/bapp4.png"
        alt=""
        className="rounded-xl mt-6 w-full"
      />
      <img
        src="../../images/bookinghubapp/bapp5.png"
        alt=""
        className="rounded-xl mt-6 w-full"
      />
      <img
        src="../../images/bookinghubapp/bapp6.png"
        alt=""
        className="rounded-xl mt-6 w-full"
      />
      <p className="mt-6">
        "Thank you for exploring my UX/UI case study for BookingHub.ge. The
        website is live at www.bookinghub.ge, offering a seamless booking
        experience for various services. The mobile application is currently in
        development, with a focus on enhancing user engagement and
        accessibility. You can explore the app design on Figma: BookingHub App
        Design. Stay tuned for updates!"
      </p>
    </div>
  );
}

export default BookingHubApp;
