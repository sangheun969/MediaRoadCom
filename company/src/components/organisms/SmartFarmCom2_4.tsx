import React from "react";

const SmartFarmCom2_4: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px] md:w-[400px]">
      <img
        src="/images/farm6.jpg"
        alt=""
        className="w-full h-[150] border rounded-md"
      />
      <div className="p-2 border rounded-md h-[300px] md:h-[400px] bg-[#F6F6F6]">
        <p className="py-5 text-xl md:text-2xl font-extrabold">
          H/W와 S/W 프로그램의 특징은?
        </p>
        <p className="md:text-xl">
          본 시설 H/W의 특징은 저전력, 친환경, 지속가능성, 에너지 충격 감소 등을
          목표로 제작되었습니다.
        </p>
        <p className="md:text-xl">
          일반적으로 속칭 “에너지먹는 하마”라고 불리는 다른 스마트팜들과는 달리
          저전력/에너지로 작동됩니다
        </p>
        <p className="md:text-xl">
          S/W의 경우 스마트폰에서 현장의 온도,습도외 다양한 기상정보를
          실시간으로 바로 알아볼수 있음 (텃밭에 오기 전 또는 집에서) - 또한
          별도의 기능으로 관수 공급, 순환 팬 작동을 수동으로 체험할 수 있는 것이
          가장 큰 특징입니다
        </p>
      </div>
    </div>
  );
};

export default SmartFarmCom2_4;
