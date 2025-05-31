import React from "react";
import MainCom1 from "../components/templates/MainCom1";
import MainCom2 from "../components/templates/MainCom2";
import MainCom3 from "../components/templates/MainCom3";
import BusinessIntro from "../components/templates/BusinessIntro";

const Main: React.FC = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="snap-start h-screen">
        <MainCom1 />
      </section>
      <section className="snap-start h-screen">
        <MainCom2 />
      </section>
      <section className="snap-start h-screen">
        <MainCom3 />
      </section>
      <section className="snap-start h-screen">
        <BusinessIntro />
      </section>
    </div>
  );
};

export default Main;
