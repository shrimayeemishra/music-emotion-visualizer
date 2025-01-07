import React from "react";

const Plot = () => {
  return (
    <div
      className="h-60 w-11/12 bg-white border-black border-2 rounded-lg p-4 mx-auto my-4
        shadow-lg transition-all duration-300
        sm:w-4/5
        md:h-72 md:my-6
        lg:h-80
        xl:h-96 xl:w-3/4"
    >
      <div className="h-full w-full flex flex-col items-center justify-center text-gray-500">
        <svg
          className="w-16 h-16 mb-4 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>

        <p className="text-center font-medium mb-2">Upload your audio file</p>
        <p className="text-center text-sm opacity-75 max-w-md">
          Your emotion visualization will appear here after analysis
        </p>
      </div>
    </div>
  );
};

export default Plot;
