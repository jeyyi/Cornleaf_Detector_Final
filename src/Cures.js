import React from "react";

const Cures = () => {
  return (
    <>
      <div className="min-h-screen px-10 lg:px-64 py-24 lg:py-32 bg-gradient-to-bl from-lime-100 to-amber-200">
        {/* Navbar */}
        <div className="w-full">
          <ul className="flex justify-between lg:justify-center lg:gap-10 text-gray-400 font-light">
            <a
              className="cursor-pointer hover:text-green-900 transition-colors"
              href="#blight"
            >
              Blight |
            </a>
            <a
              className="cursor-pointer hover:text-green-900 transition-colors"
              href="#cr"
            >
              Common Rust |
            </a>
            <a
              className="cursor-pointer hover:text-green-900 transition-colors"
              href="#gls"
            >
              Gray Leaf Spot |
            </a>
          </ul>
        </div>
        <div className="w-full carousel rounded-box">
          {/* Div for Blight */}
          <div id="blight" className="w-full carousel-item bg-black h-10" />
          <div id="cr" className="w-full carousel-item bg-white h-10" />
          <div id="gls" className="w-full carousel-item bg-red-500 h-10" />
        </div>
      </div>
    </>
  );
};

export default Cures;
