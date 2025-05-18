import React from "react";

function Video() {
  return (
    <div>
      <div className="max-h-[766px] w-full bg-gray-300 mx-auto mt-16 rounded-xl">
        <video
          src="public/videos/Sequence_01.mp4"
          autoPlay
          loop
          playsInline
          className="w-full h-[690px]"
        />
      </div>
    </div>
  );
}

export default Video;
