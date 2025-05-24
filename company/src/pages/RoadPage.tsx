import React from "react";
import KakaoMap from "../components/templates/KakaoMap";

const RoadPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <h2 className="mt-4 text:2xl md:text-4xl font-bold mb-6">본사</h2>
      <div className="flex flex-col gap-10 md:flex-row w-full max-w-4xl h-[700px] sm:h-[500px] xs:h-[300px]">
        <KakaoMap />
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-2xl md:text-3xl">주소</p>
            <p>서울 영등포구 여의서로 43, 한서 리버파크 1209호</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl">전화번호</p>
            <p>02-782-1255</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl">우편번호</p>
            <p>07239</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadPage;
