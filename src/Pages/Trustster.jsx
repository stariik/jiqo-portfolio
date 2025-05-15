import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";

function Trustster() {
  const serviceList = ["Identity Design", "UI/UX Design"];
  return (
    <div className="px-[205px]">
      <Video />
      <Title text={"Trustster"} />
      <Services services={serviceList} />
      <div>
        <p className="text-lg font-semibold pt-4">Overview</p>
        <p>
          Trustster is a platform that enables safe and simple trading of
          digital goods—such as in-game currency and skins (Robux, V-Bucks,
          League RP, CS Skins, etc.)—through an automated middleman service. The
          goal is to minimize the risk of fraud and streamline transactions
          between buyers and sellers.
        </p>
        <p className="text-lg font-semibold pt-4">My Role</p>
        <p>
          Worked as a UI/UX designer and graphic designer. I was responsible for
          creating the platform's entire visual identity—from the landing page
          to the ticketing system and user dashboard.
        </p>
      </div>
    </div>
  );
}

export default Trustster;
