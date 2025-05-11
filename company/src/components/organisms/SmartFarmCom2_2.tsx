import React from "react";

const SmartFarmCom2_2: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px] md:w-[400px]">
      <img
        src="/images/farm3.jpg"
        alt=""
        className="w-full h-[150] border rounded-md"
      />
      <div className="p-2 border rounded-md h-[380px] md:h-[400px] bg-[#F6F6F6]">
        <p className="py-5 text-xl md:text-2xl font-extrabold">
          현재 스마트텃밭 체험시설의 크기가 작은 이유는?
        </p>
        <p className="md:text-xl">
          - 현재 스마트팜의 온실은 상호 협의 후 결정된 크기로, 온실 설치 인프라
          비용이 전체 예산의 30% 이상 이었음 (참고로 본사도 구매한 것임) -
          초기에 비닐 하우스를 설치하고자 했으나 외형과 디자인에 대한 요구와
          예산문제를 고려해 현재의 폴리카보네이트(캐나다산)으로 결정됨 (참고 :
          같은 예산으로 비닐하우스 설치시 20평 크기까지 확장 가능하였음) - 또한
          강남구 아파트의 평균 베렌다 사이즈인 4-5평도 고려하였음
        </p>
      </div>
    </div>
  );
};

export default SmartFarmCom2_2;
