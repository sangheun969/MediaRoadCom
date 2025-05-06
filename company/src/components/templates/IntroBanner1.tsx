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
    <div className="mt-44 flex flex-col w-full h-[120vh] overflow-hidden transition-all duration-700">
      <div
        className={`transition-all duration-1000 ease-in-out text-center transform ${
          scrolled
            ? "translate-y-[800px] text-white"
            : "translate-y-0 text-black mt-10"
        }`}
      >
        <p className="text-8xl">Who</p>
        <p className="text-8xl">We Are</p>
      </div>
      <img
        src="/images/background7.png"
        alt="intro1"
        className={`mt-20 object-cover transition-all duration-1000 ease-in-out mx-auto ${
          scrolled
            ? "w-full h-[100vh] rounded-none "
            : "w-[300px] h-[300px] rounded-full"
        }`}
      />
    </div>
  );
};

export default IntroBanner1;
