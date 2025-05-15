import React from "react";

function Download() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl text-center w-fit mx-auto ">
      <p className="text-sm mb-2 text-gray-900">Get more about me</p>
      <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black font-medium py-4 px-20 rounded-xl transition">
        Download CV{" "}
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13.2044L1 16.8925C1 17.4514 1.21071 17.9875 1.58579 18.3827C1.96086 18.778 2.46957 19 3 19H15C15.5304 19 16.0391 18.778 16.4142 18.3827C16.7893 17.9875 17 17.4514 17 16.8925V13.2044M9.00112 1V12.9425M9.00112 12.9425L13.5725 8.3793M9.00112 12.9425L4.42969 8.3793"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Download;
