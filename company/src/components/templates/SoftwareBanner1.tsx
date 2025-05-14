import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SoftwareBanner1: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  const navigate = useNavigate();

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
    <div className="mt-44 flex flex-col w-full h-[200vh] md:h-[140vh] overflow-hidden transition-all duration-700">
      {showTitle && (
        <div
          className={`transition-all duration-1000 ease-in-out text-center transform ${
            scrolled
              ? "translate-y-[800px] text-white opacity-0"
              : "translate-y-0 text-black mt-10 opacity-100"
          }`}
        >
          <p className="text-6xl md:text-8xl py-2">IT 소프트웨어</p>
          <p className="text-6xl md:text-8xl py-2">개발 분야</p>
        </div>
      )}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out text-center z-10
    ${
      scrolled
        ? "translate-y-[300px] md:translate-y-[100px] opacity-100"
        : "-translate-y-1/2 opacity-0"
    }`}
      >
        <p className="text-2xl md:text-4xl font-semibold text-green-600">
          지구를 위한 기술, 사람을 위한 소프트웨어
        </p>
      </div>

      <div
        className={`mt-20 md:px-4 flex justify-center items-center flex-col md:flex-row gap-10 transition-all duration-1000 ease-in-out ${
          scrolled ? "scale-100" : "scale-75"
        }`}
      >
        <div
          onClick={() => navigate("/software/smartfarm")}
          className="relative"
        >
          <button
            className={`transition-all duration-1000 ease-in-out font-bold text-xl bg-cover bg-center bg-no-repeat ${
              scrolled
                ? "translate-y-[800px] w-[500px] md:w-[800px] text-2xl md:text-6xl h-80 rounded-full text-white pr-[50px]"
                : "w-40 h-40 rounded-full text-white"
            }`}
            style={{
              backgroundImage: "url('/images/farm1.jpg')",
            }}
          >
            스마트팜
          </button>
          {/* <p
            className={`absolute px-8 text-white w-full text-center pt-[200px] transition-all duration-1000 ease-in-out md:text-2xl font-medium pointer-events-none ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
          >
            직접 키우고 배우는 체험형 스마트팜, 강남 최초의 생활 속 농업·기술
            교육장
          </p> */}
        </div>
        <div
          onClick={() => navigate("/solfware/marinefarm")}
          className="relative"
        >
          <button
            className={`transition-all duration-1000 ease-in-out font-bold text-2xl bg-cover bg-center bg-no-repeat ${
              scrolled
                ? "translate-y-[800px] w-[500px] md:w-[800px] text-2xl md:text-6xl h-80 rounded-full text-white"
                : "w-40 h-40 rounded-full text-white"
            }`}
            style={{
              backgroundImage: "url('/images/sea1.png')",
            }}
          >
            해양 양식장 H/W
          </button>
          {/* <p
            className={`absolute px-8 text-white w-full text-center pt-[200px] transition-all duration-1000 ease-in-out md:text-2xl font-medium pointer-events-none  ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
          >
            직접 키우고 배우는 체험형 스마트팜, 강남 최초의 생활 속 농업·기술
            교육장
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SoftwareBanner1;
