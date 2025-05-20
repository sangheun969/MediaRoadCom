import React, { useEffect, useState } from "react";

const IntroBanner1: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-44 flex flex-col items-center w-full min-h-screen overflow-hidden transition-all duration-700">
      <div
        className={`transition-all duration-1000 ease-in-out text-center transform ${
          scrolled
            ? "translate-y-[700px] text-white"
            : "translate-y-0 text-black mt-10"
        }`}
      >
        <p className="text-6xl md:text-8xl">Who</p>
        <p className="text-6xl md:text-8xl">We Are</p>
      </div>
      <img
        src="/images/background7.png"
        alt="intro1"
        className={`transition-all duration-1000 ease-in-out mx-auto object-cover ${
          scrolled
            ? "w-screen h-screen rounded-none"
            : "w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full mt-10 mb-20"
        }`}
      />
    </div>
  );
};

export default IntroBanner1;
