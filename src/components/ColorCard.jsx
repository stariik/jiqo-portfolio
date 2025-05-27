import React from "react";

function ColorCard({ title, bgcolor, hex, textColor = "#ffffff", shadow = false }) {
  return (
    <div
      className={`rounded-[15px] h-[113px] px-6 py-6 flex flex-col justify-between font-semibold font-montserrat ${
        shadow ? "shadow-[0_0_20px_rgba(0,0,0,0.2)]" : ""
      }`}
      style={{ backgroundColor: bgcolor, color: textColor }}
    >
      <div className="text-[16px]">{title}</div>
      <div className="text-[14px]">HEX #{hex}</div>
    </div>
  );
}

export default ColorCard;
