import React, { useEffect } from "react";
import MainCom1 from "../components/templates/MainCom1";
import MainCom2 from "../components/templates/MainCom2";
import MainCom3 from "../components/templates/MainCom3";
import BusinessIntro from "../components/templates/BusinessIntro";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

const Main: React.FC = () => {
  useEffect(() => {
    return () => {
      // react-fullpage가 내부에서 설정한 DOM 상태 제거
      const root = document.querySelector(".apcx-fullpage");
      root?.parentElement?.removeChild(root);
    };
  }, []);

  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: "100vh" }}>
          <MainCom1 />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <MainCom2 />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <MainCom3 />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <BusinessIntro />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default Main;
