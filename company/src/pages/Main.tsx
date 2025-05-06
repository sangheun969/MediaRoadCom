import React from "react";
import MainCom1 from "../components/templates/MainCom1";
import MainCom2 from "../components/templates/MainCom2";
import MainCom3 from "../components/templates/MainCom3";
import BusinessIntro from "../components/templates/BusinessIntro";

const Main: React.FC = () => {
  return (
    <div>
      <div className="relative h-[300vh]">
        <MainCom1 />
        <MainCom2 />
        <MainCom3 />
      </div>
      <div className="w-full h-[100vh] mt-[200px]">
        <BusinessIntro />
      </div>
    </div>
  );
};

export default Main;
