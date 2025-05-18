import React from "react";

function ColorCard({ title, bgcolor, hex, textColor = "#ffffff", shadow = false }) {
  return (
    <div
      className={`rounded-[15px] h-[113px] px-4 py-6 flex flex-col justify-between ${
        shadow ? "shadow-[0_0_20px_rgba(0,0,0,0.2)]" : ""
      }`}
      style={{ backgroundColor: bgcolor, color: textColor }}
    >
      <div className="text-[16px] font-medium">{title}</div>
      <div className="text-[14px]">HEX #{hex}</div>
    </div>
  );
}

export default ColorCard;



{/* <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Button</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#222222] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Accent</div>
          <div className="text-[14px] text-white">HEX #222222</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Accent</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Background</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Button background</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Header text</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Text</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Secondary text</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Border</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
        <div className="rounded-[15px] bg-[#FF6666] h-[113px] px-4 py-6 flex flex-col justify-between">
          <div className="text-[16px] font-medium text-white">Error</div>
          <div className="text-[14px] text-white">HEX #FF6666</div>
        </div>
      </div> */} 