import React from "react";

const SmartFarmCom2_3: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px] md:w-[400px]">
      <img
        src="/images/farm4.jpg"
        alt=""
        className="w-full h-[150] border rounded-md"
      />
      <div className="p-2 border rounded-md h-[380px] md:h-[400px] bg-[#F6F6F6]">
        <p className="py-5 text-xl md:text-2xl font-extrabold">
          교육, 체험 프로그램은은 어떻게 운영 예정 이었나?
        </p>
        <p className="md:text-xl">
          - 현재 텃밭에 참여한 구민 중 1기 당 30명 내외의 인원을 선발 연간
          3회(3개월 씩 총 9개월) 운영 - 내부 강사 및 커뮤니티에서 다음 기수에게
          기술과 운영을 이전하는 방식으로 운영 (커뮤니티 및 고정 운영진 존재) -
          당사에서는 초기 1-2회 운영진 및 커뮤니티 관계자들에게 기술 교육/체험
        </p>
      </div>
    </div>
  );
};

export default SmartFarmCom2_3;
