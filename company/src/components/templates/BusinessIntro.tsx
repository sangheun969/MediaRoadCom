import React from "react";

const BusinessIntro: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[350px] pl-8 border border-black flex items-center">
        <h1 className="text-4xl">Our Business</h1>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="w-full h-[300px] bg-cover bg-center text-white text-2xl font-bold"
          style={{
            backgroundImage: "url('/images/background5.png')",
          }}
        >
          공공정책/조사, 분석/ 시민교육
        </button>
        <button
          className="w-full h-[300px] bg-cover bg-center text-white text-2xl font-bold"
          style={{
            backgroundImage: "url('/images/background6.png')",
          }}
        >
          영상 컨텐츠 기획, 제작분야야
        </button>
      </div>
    </div>
  );
};

export default BusinessIntro;
