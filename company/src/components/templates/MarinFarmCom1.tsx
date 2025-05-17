import React, { useEffect, useState } from "react";

const MarinFarmCom1: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="mt-44 flex flex-col w-full h-[120vh] overflow-hidden transition-all duration-700 ">
      <div
        className={`transition-all duration-1000 ease-in-out text-center transform ${
          scrolled
            ? "translate-y-[500px] md:translate-x-[-30%] text-white"
            : "translate-y-0 text-black mt-10"
        }`}
      >
        <p className="text-8xl">MARINE FARM</p>
      </div>
      <img
        src="/images/sea3.png"
        alt="intro1"
        className={`mt-20 object-cover transition-all duration-1000 ease-in-out mx-auto ${
          scrolled
            ? "w-full h-[100vh] rounded-none "
            : "w-[300px] h-[300px] rounded-full"
        }`}
      />
      {scrolled && (
        <p className="absolute flex justify-center items-center md:bottom-10 md:right-40 text-white text-xl md:text-4xl transition-opacity duration-1000">
          바다 속
        </p>
      )}
    </div>
  );
};

export default MarinFarmCom1;
