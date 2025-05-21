import React, { useEffect, useState } from "react";

const VideoProductCom1: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div
        className={`absolute inset-0 bg-center bg-cover transition-all duration-[2000ms] ease-out`}
        style={{
          backgroundImage: "url('/images/camera2.png')",
          clipPath: revealed
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 50% 50%)",
          WebkitClipPath: revealed
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-start px-8 md:px-20">
        <h1 className="text-white text-4xl md:text-8xl font-bold text-center md:text-left">
          Where Vision
          <br />
          Meets Motion
        </h1>
      </div>
    </div>
  );
};

export default VideoProductCom1;
