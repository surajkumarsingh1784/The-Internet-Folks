"use client";

import React from "react";
import Image from "next/image";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">
            Activity Created Successfully!
          </h2>
          <p className="text-gray-600">
            Your activity has been submitted successfully. Check the console for
            the complete form data.
          </p>
        </div>

        {/* Mammothzy Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-3">
            <Image
              src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZPU_UPyMp39WA4gqdURo7siqzVJZ1DhR2ETLyux0BBQT-7YHvAResu_agOBG_w6h9sLEsuiS8aFtIuzCYeiizJDv2YnxhkJSvmciInrqPh8PMUvz7X9k51bn8U6ppD8lNkiSOlw?key=f9tVWdsbyKZjhn20c54qdIn9"
              alt="Mammothzy Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Marketplace for searching, filtering and instantly booking team activities
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {["facebook", "instagram", "linkedin", "email"].map((social) => (
            <button
              key={social}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label={social}
            >
              <span className="text-gray-600 text-lg">
                {social === "facebook" && "f"}
                {social === "instagram" && "📷"}
                {social === "linkedin" && "in"}
                {social === "email" && "✉"}
              </span>
            </button>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          OK
        </button>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Copyright © 2024
        </p>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;
