import React from "react";

const BusinessIntro: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="pl-8 h-[100px] flex items-center">
        <h1 className="text-4xl">Our Business</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <button
          className="w-full md:w-1/3 h-[300px] md:h-[900px] bg-cover bg-center text-white text-2xl font-bold flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('/images/background5.png')",
          }}
        >
          공공정책/조사, 분석/ 시민교육
        </button>
        <button
          className="w-full md:w-1/3 h-[300px] md:h-[900px] bg-cover bg-center text-white text-2xl font-bold flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('/images/background6.png')",
          }}
        >
          영상 컨텐츠 기획, 제작분야
        </button>
        <button
          className="w-full md:w-1/3 h-[300px] md:h-[900px] bg-cover bg-center text-white text-2xl font-bold flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('/images/background8.png')",
          }}
        >
          IT 소프트웨어 개발, 제작분야
        </button>
      </div>
    </div>
  );
};

export default BusinessIntro;
