import React from "react";

function Fgrid({ image1, image2, image3 }) {
  return (
    <div className="mt-12 mb-12 grid grid-cols-5 gap-8">
      <img
        className="rounded-xl col-span-2 row-span-2 w-full"
        src={image1}
        alt="Main Left"
      />
      <img src={image2} alt="Top Right" className="rounded-lg col-span-3" />
      <img src={image3} alt="Bottom Right" className="rounded-lg col-span-3" />
    </div>
  );
}

export default Fgrid;
