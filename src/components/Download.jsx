// import React from "react";

// function Download() {
//   return (
//     <div className="bg-gray-100 p-4 rounded-xl text-center w-fit mx-auto ">
//       <p className="text-sm mb-2 text-gray-900">Get more about me</p>
//       <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black font-medium py-4 px-20 rounded-xl transition">
//         Download CV{" "}
//         <svg
//           width="18"
//           height="20"
//           viewBox="0 0 18 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M1 13.2044L1 16.8925C1 17.4514 1.21071 17.9875 1.58579 18.3827C1.96086 18.778 2.46957 19 3 19H15C15.5304 19 16.0391 18.778 16.4142 18.3827C16.7893 17.9875 17 17.4514 17 16.8925V13.2044M9.00112 1V12.9425M9.00112 12.9425L13.5725 8.3793M9.00112 12.9425L4.42969 8.3793"
//             stroke="black"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default Download;

// components/Download.js
// components/Download.js
import React, { useState, useRef, useEffect } from "react";
import { LuDownload } from "react-icons/lu";

function LanguagePopup({ onClose }) {
  const popupRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-gray-100 p-6 rounded-2xl shadow-xl w-[300px] text-center"
      >
        <h2 className="text-lg font-semibold mb-4">Language</h2>
        <div className="flex justify-between gap-4">
          {['Georgian', 'English'].map((lang) => (
            <button
              key={lang}
              className="flex-1 bg-gray-200 hover:bg-gray-300 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
            >
              {lang} <LuDownload className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Download() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-gray-100 p-4 rounded-xl text-center w-fit mx-auto ">
      <p className="text-sm mb-2 text-gray-900">Get more about me</p>
      <button
        onClick={() => setShowPopup(true)}
        className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black font-medium py-4 px-20 rounded-xl transition"
      >
        Download CV <LuDownload className="w-5 h-5" />
      </button>
      {showPopup && <LanguagePopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default Download;