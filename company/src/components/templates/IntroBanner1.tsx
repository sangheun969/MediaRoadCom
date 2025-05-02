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
    <div className="relative flex flex-col justify-around p-11 w-full h-[100vh] overflow-hidden transition-all duration-700">
      <div
        className={`transition-all duration-700 ease-in-out text-center transform ${
          scrolled
            ? "translate-y-60 text-white"
            : "translate-y-0 text-black mt-10"
        }`}
      >
        <p className="text-8xl">Who</p>
        <p className="text-8xl">We Are</p>
      </div>
      <img
        src="/images/background7.png"
        alt="intro1"
        className={`object-cover transition-all duration-700 ease-in-out mx-auto mt-10 ${
          scrolled ? "w-full h-screen" : "w-[500px] h-[350px]"
        }`}
      />
    </div>
  );
};

export default IntroBanner1;
