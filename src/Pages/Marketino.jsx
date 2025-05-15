import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";

function Marketino() {
  const serviceList = [
    "Identity Design",
    "Branding",
    "Packaging Design",
    "Art Direction",
  ]; 
  return (
    <div className="px-[205px]">
      <Video />
      <Title text={"Marketino"} />
      <Services services={serviceList} />
    </div>
  );
}

export default Marketino;
