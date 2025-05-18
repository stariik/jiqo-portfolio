import React from "react";

function ColorCard({ title, hex, bgColor = "#fff", textColor = "#000" }) {
  return (
    <div
      className="rounded-[15px] border border-[#31334c] w-32 h-24 flex flex-col justify-center px-3 py-2 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="text-sm font-medium">{title}</div>
      <div className="text-[10px] mt-1">HEX {hex}</div>
    </div>
  );
}

export default ColorCard;
