import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";

function Trustster() {
  const serviceList = ["Identity Design", "UI/UX Design"];
  return (  
    <div className="px-[205px]">
      <Video />
      <Title text={"Booking Hub App"} />
      <Services services={serviceList} />
    </div>
  );
}

export default Trustster;
