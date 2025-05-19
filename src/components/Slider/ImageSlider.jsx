import React, { useEffect, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = () => {
  const images = [
    "/images/BOOKINGHUB.png",
    "/images/BOOKINGHUBAPP.png",
    "/images/MARKETINO.png",
    "/images/MEKOBRE.png",
    "/images/TRUSTSTER.png",
    "/images/TEACORNER.png",
    "/images/PLAYGROUND.png",
  ];
  return (
    <Slide
      vertical={true}
      autoplay={true}
      infinite={true}
      pauseOnHover={true}
      canSwipe={true}
      transitionDuration={1000}
      duration={3000}
    >
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[3]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[4]})` }}>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[5]})` }}>
        </div>
      </div>
    </Slide>
  );
};

export default ImageSlider;
