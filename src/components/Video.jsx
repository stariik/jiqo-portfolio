import React from "react";

function Video({ source }) {
  return (
    <div className="container mx-auto mt-16">
      <div className="relative overflow-hidden rounded-xl bg-gray-300 shadow-lg w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  );
}

export default Video;