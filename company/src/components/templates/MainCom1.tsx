import React, { useEffect, useRef, useState } from "react";

const MainCom1: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[100vh] overflow-hidden z-0"
    >
      {/* 배경 영상 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/videoIntro4.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 텍스트 콘텐츠 */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-10 md:pl-36 pb-32 gap-6 md:gap-8 z-10 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          개인의 가치
        </h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          사회의 가치
        </h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold">그리고</h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          조화의 가치
        </h1>
      </div>

      {/* 어두운 오버레이 */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />
    </div>
  );
};

export default MainCom1;
