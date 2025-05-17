import React from "react";
import MarinFarmCom1 from "../components/templates/MarinFarmCom1";
import MarinFarmCom2 from "../components/templates/MarinFarmCom2";

const MarineFarm: React.FC = () => {
  return (
    <div className="w-full h-full">
      <MarinFarmCom1 />
      <MarinFarmCom2 />
    </div>
  );
};

export default MarineFarm;
