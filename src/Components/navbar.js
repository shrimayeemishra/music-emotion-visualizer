import React from "react";

const Navbar = () => {
  return (
    <div
      className="navbar bg-[#FADADD] flex flex-row justify-around font-poppins text-black text-sm font-semibold
      xs:text-base
      md:text-lg md:justify-center
      lg:text-xl"
    >
      <a
        className="m-4
      md:mx-6"
        href="#EmoMeter"
      >
        EmoMeter
      </a>
      <a
        className="m-4
      md:mx-6"
        href="#Guidelines"
      >
        How to use?
      </a>
      <a
        className="m-4
      md:mx-6"
        href="#Aboutus"
      >
        About us
      </a>
    </div>
  );
};

export default Navbar;
