import React from "react";
import SmartFarmCom1 from "../components/templates/SmartFarmCom1";
import SmartFarmCom2 from "../components/templates/SmartFarmCom2";
import SmartFarmCom3 from "../components/templates/SmartFarmCom3";

const SmartFarm: React.FC = () => {
  return (
    <div className="w-full h-full">
      <SmartFarmCom1 />
      <SmartFarmCom3 />
      <SmartFarmCom2 />
    </div>
  );
};

export default SmartFarm;
