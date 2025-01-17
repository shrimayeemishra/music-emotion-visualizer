import React, { useState } from "react";
import Plot from "../Components/plot";
import DisplayValue from "../Components/displayvalue";

const EmoMeter = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("audio/")) {
        setFileName(file.name);
      } else {
        alert("Only audio files are allowed!");
        event.target.value = "";
        setFileName("");
      }
    } else {
      setFileName("");
    }
  };

  return (
    <div
      className="emoMeter min-h-screen bg-[#FADADD] flex flex-col font-poppins text-black font-semibold pb-4"
      id="EmoMeter"
    >
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
          <div
            className="flex flex-col items-center gap-4
            md:justify-center md:gap-6"
          >
            <div className="relative flex items-center w-full">
              <input
                type="file"
                id="audioUpload"
                accept="audio/*"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleFileChange}
              />
              <label
                htmlFor="audioUpload"
                className="bg-[#FFA9A9] w-56 rounded-lg font-poppins text-black 
              border-[#DFFFE2] border-3 p-2.5 text-sm font-semibold
                hover:opacity-90 transition-opacity duration-200 
                md:text-base 
                lg:text-lg text-center inline-block cursor-pointer"
              >
                Upload Audio File
              </label>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              {fileName && (
                <span className="ml-4 text-gray-700 text-sm md:text-base truncate w-full text-ellipsis">
                  {fileName}
                </span>
              )}

              <button
                className="bg-[#FFA9A9] w-56 rounded-lg font-poppins text-black 
              border-[#DFFFE2] border-3 p-2.5 text-sm font-semibold
                hover:opacity-90 transition-opacity duration-200 
                md:text-base 
                lg:text-lg"
              >
                Analyze
              </button>
              <button
                className="bg-[#FFA9A9] w-56 rounded-lg font-poppins text-black 
              border-[#DFFFE2] border-3 p-2.5 text-sm font-semibold
                hover:opacity-90 transition-opacity duration-200 
                md:text-base 
                lg:text-lg"
                onClick={() => setFileName("")}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <Plot />
        </div>
      </div>

      <div
        className="grid grid-rows-3 grid-cols-2
        md:grid-rows-2 md:grid-cols-3"
      >
        <DisplayValue label="Energy: " />
        <DisplayValue label="Tension: " />
        <DisplayValue label="Valence: " />
        <DisplayValue label="Emotion: " />
        <DisplayValue label="Intensity: " />
        <DisplayValue label="Atmosphere: " />
      </div>
    </div>
  );
};

export default EmoMeter;
