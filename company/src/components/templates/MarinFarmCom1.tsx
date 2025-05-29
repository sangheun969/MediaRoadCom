import React, { useEffect, useState } from "react";

const MarinFarmCom1: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/videoIntro7.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 md:px-20">
        <div className="text-white z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-6">Marine FARM</h1>
          <p className="text-xl md:text-4xl">
            맞춤형 H/W로 환경 측정이 가능한 유일한 양식장 솔루션
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0" />
    </div>
  );
};

export default MarinFarmCom1;
