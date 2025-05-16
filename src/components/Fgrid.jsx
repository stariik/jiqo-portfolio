import React from "react";

function Fgrid() {
  return (
    <div className="mt-12 mb-12 grid grid-cols-5 gap-8">
      <img
        className="rounded-xl col-span-2 row-span-2 w-full"
        src="../../images/bookinghub/booking1.png"
        alt=""
      />

      <img
        src="../../images/bookinghub/booking2.png"
        alt="Top Right Image"
        className="rounded-lg col-span-3"
      />

      <img
        src="../../images/bookinghub/booking3.png"
        alt="Bottom Right Image"
        className="rounded-lg col-span-3"
      />
      
    </div>
  );
}

export default Fgrid;
