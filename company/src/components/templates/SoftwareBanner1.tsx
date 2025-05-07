import React, { useState, useEffect } from "react";

const SoftwareBanner1: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setShowTitle(false);
      } else if (e.deltaY < 0) {
        setShowTitle(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="mt-44 flex flex-col w-full h-[110vh] overflow-hidden transition-all duration-700">
      {showTitle && (
        <div
          className={`transition-all duration-1000 ease-in-out text-center transform ${
            scrolled
              ? "translate-y-[800px] text-white opacity-0"
              : "translate-y-0 text-black mt-10 opacity-100"
          }`}
        >
          <p className="text-8xl py-2">IT 소프트웨어</p>
          <p className="text-8xl py-2">개발 분야</p>
        </div>
      )}

      <div
        className={`mt-20 md:px-4 flex justify-center gap-10 transition-all duration-1000 ease-in-out ${
          scrolled ? "scale-100" : "scale-75"
        }`}
      >
        <button
          className={`transition-all duration-1000 ease-in-out font-bold text-xl ${
            scrolled
              ? "translate-y-[300px] w-full h-80 rounded-full bg-blue-500 text-white"
              : "w-40 h-40 rounded-full bg-blue-200 text-black"
          }`}
        >
          스마트팜
        </button>
        <button
          className={`transition-all duration-1000 ease-in-out font-bold text-xl ${
            scrolled
              ? "translate-y-[300px] w-full h-80 rounded-full bg-green-500 text-white"
              : "w-40 h-40 rounded-full bg-green-200 text-black"
          }`}
        >
          해양양식장 H/W
        </button>
      </div>
    </div>
  );
};

export default SoftwareBanner1;
