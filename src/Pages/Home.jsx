import React from "react";
import ImageSlider from "../components/Slider/ImageSlider";

function Home() {
  return (
    <div className="p-8">
      <div className="my-8 mx-auto w-[455px]">
        <p>
          I'm Luka Jikia, a graphic & UI / UX designer with an addiction to
          detail and a love for storytelling.
        </p>
      </div>
      <ImageSlider />
      <div className="bg-gray-100 p-4 rounded-xl text-center w-fit mx-auto mt-8 ">
        <p className="text-sm mb-2 text-gray-900">
          Always searching new partners
        </p>
        <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black font-medium py-4 px-20 rounded-xl transition">
          Let's Work Together!{" "}
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7778 1L22.6666 8M22.6666 8L13.7778 15M22.6666 8L1.33331 8"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
