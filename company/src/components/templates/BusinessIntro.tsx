import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessIntro: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const buttons = [
    {
      text: "영상 컨텐츠 기획, 제작분야",
      image: "/images/background6.png",
    },
    {
      text: "IT 소프트웨어 개발, 제작분야",
      image: "/images/background5.png",
    },
    {
      text: "문화콘텐츠",
      image: "/images/background8.png",
    },
  ];

  return (
    <div className="flex flex-col mt-10">
      <div className="pl-8 h-[100px] flex items-center">
        <h1 className="text-4xl md:text-6xl">Our Business</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:h-[700px] transition-all duration-500">
        {buttons.map((btn, index) => {
          let flexClass = "w-full";

          if (hoveredIndex === null) {
            flexClass += " md:flex-[1_1_0%]";
          } else if (hoveredIndex === index) {
            flexClass += " md:flex-[3_3_0%]";
          } else {
            flexClass += " md:flex-[1_1_0%]";
          }

          const handleClick = () => {
            if (index === 1) {
              navigate("/software");
            } else if (index === 2) {
              navigate("/culture");
            } else if (index === 0) {
              navigate("/video");
            }
          };

          return (
            <button
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={handleClick}
              className={`
                ${flexClass}
                transition-all duration-500 
                bg-cover bg-center text-white text-2xl font-bold 
                flex items-center justify-center text-center h-[200px] md:h-auto
              `}
              style={{
                backgroundImage: `url('${btn.image}')`,
              }}
            >
              {btn.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BusinessIntro;
