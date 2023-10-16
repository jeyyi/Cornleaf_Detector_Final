import React from "react";

const Cures = () => {
  return (
    <>
      <div className="min-h-screen bg-yellow-300 flex flex-col items-center justify-center">
        <div className="text-center w-fit">
          <a
            href="cures/blight"
            class="group text-gray-600 transition duration-300 font-bold text-4xl lg:text-6xl hover:text-yellow-700"
          >
            Blight
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-yellow-700"></span>
          </a>
        </div>
        <div className="text-center mt-2 w-fit">
          <a
            href="cures/rust"
            class="group text-gray-600 transition duration-300 font-bold text-4xl lg:text-6xl hover:text-yellow-700"
          >
            Common Rust
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-yellow-700"></span>
          </a>
        </div>
        <div className="text-center mt-2 w-fit">
          <a
            href="cures/gls"
            class="group text-gray-600 transition duration-300 font-bold text-4xl lg:text-6xl hover:text-yellow-700"
          >
            Gray Leaf Spot
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-2 bg-yellow-700"></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cures;
