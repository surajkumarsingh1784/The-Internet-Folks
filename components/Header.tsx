"use client";

import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZPU_UPyMp39WA4gqdURo7siqzVJZ1DhR2ETLyux0BBQT-7YHvAResu_agOBG_w6h9sLEsuiS8aFtIuzCYeiizJDv2YnxhkJSvmciInrqPh8PMUvz7X9k51bn8U6ppD8lNkiSOlw?key=f9tVWdsbyKZjhn20c54qdIn9"
          alt="Mammothzy Logo"
          width={180}
          height={60}
          className="h-12 w-auto"
          priority
        />
      </div>
      
      <button className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-gray-50 rounded-lg transition-colors">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="7" r="2" fill="currentColor" />
          <path
            d="M6 15c0-2.21 1.79-4 4-4s4 1.79 4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-medium">Profile</span>
      </button>
    </div>
  );
};

export default Header;
