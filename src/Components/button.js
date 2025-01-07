import React from "react";

const Button = ({ label }) => {
  return (
    <div className="button bg-[#FFA9A9] font-poppins text-black border-[#DFFFE2] m-4 p-1 text-sm font-semibold">
      {label}
    </div>
  );
};

export default Button;
