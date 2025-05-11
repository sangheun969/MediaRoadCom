import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import SmartFarmCom2_1 from "../organisms/SmartFarmCom2_1";
import SmartFarmCom2_2 from "../organisms/SmartFarmCom2_2";
import SmartFarmCom2_3 from "../organisms/SmartFarmCom2_3";
import SmartFarmCom2_4 from "../organisms/SmartFarmCom2_4";

const SmartFarmCom2: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-[120vh]">
      <div className="pl-[30px] h-[120px] md:h-[250px] flex items-center">
        <img
          src="/images/qnaIcon.png"
          alt=""
          className="w-[70px] h-[70px] md:w-[110px] md:h-[110px]"
        />
      </div>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={8}
        slidesPerView={"auto"}
        freeMode={true}
        grabCursor={true}
        className="px-6"
      >
        <SwiperSlide className="!w-[40%] md:!w-[400px]">
          <SmartFarmCom2_1 />
        </SwiperSlide>
        <SwiperSlide className="!w-[40%] md:!w-[400px]">
          <SmartFarmCom2_2 />
        </SwiperSlide>
        <SwiperSlide className="!w-[40%] md:!w-[400px]">
          <SmartFarmCom2_3 />
        </SwiperSlide>
        <SwiperSlide className="!w-[40%] md:!w-[400px]">
          <SmartFarmCom2_4 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SmartFarmCom2;
