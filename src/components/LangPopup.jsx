// components/Download.js
import React, { useState } from "react";
import { LuDownload } from "react-icons/lu";

function LanguagePopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-xl w-[300px] text-center">
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
        <button
          onClick={onClose}
          className="mt-4 text-sm text-blue-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}