import React, { useEffect, useRef, useState } from "react";

const MainCom3: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-20"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/videoIntro6.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center md:justify-start z-10">
        <div
          className={`flex flex-col gap-6 md:gap-8 px-6 md:pl-36 pb-20 md:pb-56 text-center md:text-left transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold">정책</h1>
          <h1 className="text-white text-4xl md:text-6xl font-bold">소통</h1>
          <h1 className="text-white text-4xl md:text-6xl font-bold">전략</h1>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />
    </div>
  );
};

export default MainCom3;
