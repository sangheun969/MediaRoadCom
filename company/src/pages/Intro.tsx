import React from "react";
import IntroBanner1 from "../components/templates/IntroBanner1";
import IntroBanner2 from "../components/templates/IntroBanner2";
import IntroBanner3 from "../components/templates/IntroBanner3";

const Intro: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <IntroBanner1 />
      <IntroBanner2 />
      <IntroBanner3 />
    </div>
  );
};

export default Intro;
