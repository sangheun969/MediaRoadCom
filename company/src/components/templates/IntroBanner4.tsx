import React from "react";

const OrgChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-slate-600 h-[100vh] w-full ">
      <div className="bg-blue-600 text-white font-bold rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center text-xl md:text-2xl shadow-md">
        대표이사
      </div>

      <div className="flex gap-20 mt-10 md:mt-40">
        <div className="bg-slate-700 text-white md:text-2xl rounded-lg px-6 py-3 md:px-11 md:py-6 shadow">
          자문위원회
        </div>
        <div className="bg-slate-700 text-white rounded-lg md:text-2xl px-6 py-3 md:px-11 md:py-6 shadow">
          전문가 그룹
        </div>
      </div>

      <div className="flex gap-5 md:gap-10 mt-10 md:mt-40">
        {["정책연구", "조사분석", "PR/CF 컨텐츠", "교육컨텐츠"].map(
          (dept, idx) => (
            <div
              key={idx}
              className="bg-slate-300 text-black rounded-lg px-6 py-4 md:px-11 md:py-6 md:text-xl text-center shadow"
            >
              {dept}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OrgChart;
