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
      <Title text={"Booking Hub App"} />
      <Services services={serviceList} />
    </div>   
  );
}

export default TeaCorner;
