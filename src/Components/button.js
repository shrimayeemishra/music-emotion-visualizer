import React from "react";

const Button = ({ label }) => {
  return (
    <button
      className="bg-[#FFA9A9] w-56 rounded-lg font-poppins text-black 
      border-[#DFFFE2] border-3 p-2.5 text-sm font-semibold
      hover:opacity-90 transition-opacity duration-200 
      md:text-base 
      lg:text-lg"
    >
      {label}
    </button>
  );
};

export default Button;
