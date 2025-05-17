import React from "react";

const MarinFarmCom2: React.FC = () => {
  const items = [
    "1. 욕지도 현장의 상황은 내항이 아닌 외항(open sea)의 형태",
    "2. 태풍, 높은 파고가 예상되는 극단의 자연 환경을 고려 해야 하는 상황",
    "3. 일부 내항용 H/W 설치의 경우 전원(최소12V-220v)이 공급 되나 항에서 2km 분리된 전원 공급 완전불가 지역",
    "4. 일반적인 가두리와 달리 설치와 운영이 어려움 (발판, 지지대 없음)",
    "5. 국내에서 개발된 환경측정 장치의 기존 방식으로는 설치 운영 절대 불가 (총 3개사의 방식 모두 검토 결과 불가 )\n2. 본 양식장에 특화된 별도의 H/W 방식을 설계, 개발, 설치, 운영 해야만 확실한 환경측정이 가능",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-50 py-10">
      <div className="text-4xl md:text-8xl font-bold mb-10 py-[50px]">
        H/W 운영을 위한 현장 현황
      </div>
      {items.map((text, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white border-2 border-blue-400 shadow-md rounded-md p-6 w-[500px] text-lg whitespace-pre-line">
            {text}
          </div>
          {index < items.length - 1 && (
            <div className="my-4 text-2xl text-blue-500 animate-bounce">↓</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MarinFarmCom2;
