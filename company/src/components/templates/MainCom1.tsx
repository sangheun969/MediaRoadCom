import React from "react";

const MainCom1: React.FC = () => {
  return (
    <div
      className="sticky top-0 w-full h-[100vh] bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/images/background1.png')",
      }}
    >
      <div className="flex flex-col justify-center pl-36 pb-56 gap-8 h-full">
        <h1 className="text-white text-4xl  md:text-6xl font-bold">
          개인의 가치
        </h1>
        <h1 className="text-white text-2xl md:text-6xl font-bold">
          사회의 가치
        </h1>
        <h1 className="text-white text-4xl  md:text-6xl font-bold">그리고</h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          조화의 가치
        </h1>
      </div>
    </div>
  );
};

export default MainCom1;
