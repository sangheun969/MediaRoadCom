import React from "react";
import SmartFarmCom1 from "../components/templates/SmartFarmCom1";
import SmartFarmCom2 from "../components/templates/SmartFarmCom2";

const SmartFarm: React.FC = () => {
  return (
    <div className="w-full h-full">
      <SmartFarmCom1 />
      <SmartFarmCom2 />
    </div>
  );
};

export default SmartFarm;
