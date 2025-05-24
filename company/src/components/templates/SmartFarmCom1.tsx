import React from "react";

const SmartFarmCom1: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/videoIntro3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 md:px-20">
        <div className="text-white z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-6">SMART FARM</h1>
          <p className="text-xl md:text-4xl">
            도심 속 내 텃밭, 스마트폰으로 키우는 미래 농업 체험
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0" />
    </div>
  );
};

export default SmartFarmCom1;
