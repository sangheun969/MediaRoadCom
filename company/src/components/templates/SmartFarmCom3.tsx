import React, { useEffect, useRef, useState } from "react";

const images = ["/images/farm7.jpg", "/images/farm8.jpg", "/images/farm9.jpg"];

const SmartFarmCom3: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`h-[100vh] flex justify-center items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="w-full h-full md:w-[80%] md:h-[800px] flex md:flex-row flex-col justify-center items-center 
  bg-gradient-to-br from-green-700 via-lime-500 to-emerald-400 border rounded-xl overflow-hidden shadow-xl"
      >
        <div className="md:w-1/2 w-full h-full flex justify-center items-center text-white text-3xl font-bold">
          <p>스마트팜</p>
        </div>
        <div className="md:w-1/3 md:h-[80%] w-full h-full relative border rounded-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex && fade ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartFarmCom3;
