import React from "react";

const SmartFarmCom2_1: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px] md:w-[400px]">
      <img
        src="/images/farm2.jpg"
        alt=""
        className="w-full h-[150] border rounded-md"
      />
      <div className="p-2 border rounded-md h-[380px] md:h-[400px] bg-[#F6F6F6]">
        <p className="py-5 text-xl md:text-2xl font-extrabold">
          스마트텃밭 체험시설의 기획의도 및 목적은?
        </p>
        <p className="md:text-xl">
          강남구 공영 텃밭에 스마트팜 기능을 가진 채험/교육 시설을 설치하여 이용
          구민으로 하여금 스마트팜에 대한 이해와 체험/교육을 진행시켜 농업 및
          첨단 기술에 대한 이해를 돕고자 기획함 - 다른 스마트 팜과 달리 단순한
          전시형 스마트 팜 설치가 아닌 직접 체험 및 교육 프로그램을 운영하는데
          가장 큰 목적을 가짐 - 이를 통해 해당 구민들이 수동적인 아닌 능동적으로
          농업과 첨단기술을 직접 실습하고 학습할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default SmartFarmCom2_1;
