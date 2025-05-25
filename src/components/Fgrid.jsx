import React from "react";

function Fgrid({ image1, image2, image3 }) {
  return (
    <div className="mt-8 md:grid gap-6 auto-rows-[215px] grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
      <img
        className="rounded-xl w-full h-full object-cover sm:col-span-2 sm:row-span-2"
        src={image1}
        alt="Main Left"
      />
      <img
        src={image2}
        alt="Top Right"
        className="rounded-lg w-full h-full object-cover sm:col-span-2 md:col-span-3 my-4 md:my-0"
      />
      <img
        src={image3}
        alt="Bottom Right"
        className="rounded-lg w-full h-full object-cover sm:col-span-2 md:col-span-3"
      />
    </div>
  );
}

export default Fgrid;
