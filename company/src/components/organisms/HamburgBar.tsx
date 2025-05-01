import React, { useState } from "react";
import SlideMenu from "../molecules/SlideMenu";

const HamburgBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
      >
        {isOpen ? (
          <img
            src="/images/closeIcon.png"
            alt="Close"
            className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110"
          />
        ) : (
          <>
            <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-hover:scale-110"></span>
            <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-hover:scale-110"></span>
            <span className="block w-6 h-0.5 bg-black transition-all duration-300 group-hover:scale-110"></span>
          </>
        )}
      </button>
      <SlideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default HamburgBar;
