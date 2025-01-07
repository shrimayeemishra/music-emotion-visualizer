import React from "react";
import Button from "./button";
import Plot from "./plot";

const EmoMeter = () => {
  return (
    <div className="emoMeter min-h-screen bg-[#FADADD] flex flex-col font-poppins text-black font-semibold">
      <div className="heading text-center py-8 space-y-2">
        <h1
          className="text-3xl font-bold tracking-wide
          sm:text-4xl
          lg:text-5xl"
        >
          EmoMeter
        </h1>
        <p
          className="text-base opacity-90
          sm:text-lg
          lg:text-xl"
        >
          A Music Emotion Visualizer
        </p>
      </div>

      <div
        className="flex flex-col gap-6 px-4 pb-12
        md:flex-row md:items-center md:gap-8 md:px-8
        lg:gap-12 lg:px-12"
      >
        <div
          className="flex flex-col items-center space-y-4 p-4 
          bg-white/10 rounded-xl backdrop-blur-sm
          md:w-1/3 md:sticky md:top-24"
        >
          <div className="w-full space-y-4">
            <Button label="Upload Audio File" />
            <Button label="Analyze" />
            <Button label="Reset" />
          </div>
        </div>
        <div className="md:w-2/3">
          <Plot />
        </div>
      </div>
    </div>
  );
};

export default EmoMeter;
