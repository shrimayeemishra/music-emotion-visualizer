import React from "react";
import Button from "./button";

const EmoMeter = () => {
  return (
    <div
      className="emoMeter bg-[#FADADD] flex flex-col pt-10 font-poppins text-black text-sm font-semibold
        xs:text-base
        md:text-lg md:justify-center
        lg:text-xl"
    >
      <div className="heading">
        <p className="pt-5 text-2xl">EmoMeter</p>
        <p className="text-sm">A Music Emotion Visualizer</p>
      </div>

      <div
        className="secondline flex flex-col
      md:flex-row"
      >
        <div className="buttons">
          <Button label="Upload Audio File" />
          <Button label="Analyze" />
          <Button label="Reset" />
        </div>
        <div className="plot h-60 w-72 bg-white border-black border-2 p-2 mx-auto my-4"></div>
      </div>
    </div>
  );
};

export default EmoMeter;
