import React, { useEffect, useState } from "react";

const MainCom3: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startScroll = windowHeight;
  const endScroll = windowHeight * 2;

  const progress = Math.min(
    Math.max((scrollY - startScroll) / (endScroll - startScroll), 0),
    1
  );
  const visibleHeight = Math.min(progress * windowHeight, windowHeight);

  return (
    <div className="sticky top-0 left-0 w-full h-[100vh] z-20 pointer-events-none overflow-hidden flex flex-col justify-end">
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background4.png')",
          height: `${visibleHeight}px`,
          transition: "height 1s ease-out",
        }}
      >
        <div
          className={`flex flex-col justify-center pl-36 pb-64 gap-8 h-full transition-opacity duration-500 ${
            progress >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-white text-2xl md:text-6xl font-bold">정책</h1>
          <h1 className="text-white text-2xl md:text-6xl font-bold">소통</h1>
          <h1 className="text-white text-2xl md:text-6xl font-bold">전략</h1>
        </div>
      </div>
    </div>
  );
};

export default MainCom3;
